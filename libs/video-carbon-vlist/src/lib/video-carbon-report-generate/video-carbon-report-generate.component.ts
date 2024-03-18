import { Component, Inject, OnInit, signal } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  ReportDataItem,
  ReportItem,
  VideoItem,
} from '@video-carbon-reduce-report/shared';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { NestedTreeControl } from '@angular/cdk/tree';

import { TreeNode } from '../model';
import { MatIconModule } from '@angular/material/icon';
import { VideoCarbonReportItemComponent } from '../video-carbon-report-item/video-carbon-report-item.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { VideoCarbonService } from '@video-carbon-reduce-report/video-carbon-services';
import { FileSizePipe } from '../video-carbon-card/video-size.pipe';
@Component({
  selector: 'lib-video-carbon-report-generate',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    VideoCarbonReportItemComponent,
    MatFormFieldModule,
  ],
  templateUrl: './video-carbon-report-generate.component.html',
  styleUrl: './video-carbon-report-generate.component.scss',
})
export class VideoCarbonReportGenerateComponent implements OnInit {
  automaticAssignImpression = signal<boolean>(false);
  reportTreeData = signal<TreeNode[]>([]);
  treeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  impressionFormControl = new FormControl('');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: VideoItem[],
    private videoCarbonService: VideoCarbonService
  ) // private fileSizePipe: FileSizePipe,
  // private percentage: PercentPipe
  {
    this.generateTreeData(data);
    this.dataSource.data = this.reportTreeData();
  }
  ngOnInit(): void {
    this.impressionFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => {
        const num = data as any;
        const reportTree = this.reportTreeData();
        reportTree.forEach((item) =>
          this.setImpressionForNode(item, num / reportTree.length)
        );
        this.reportTreeData.set([...reportTree]);
      });
  }
  setImpressionForNode(treeNode: TreeNode, impression: number) {
    treeNode.impression = impression;
    const subImpression = impression / treeNode.children.length;

    treeNode.children.forEach((item) =>
      this.setImpressionForNode(item, subImpression)
    );
  }

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;

  getVideoDetails(videos: VideoItem[]) {
    let result = '';
    videos.forEach(
      (video) => (result += `${video.video_quality} ${video.size}`)
    );
    return result;
  }
  toggleSlide() {
    this.automaticAssignImpression.set(!this.automaticAssignImpression());
  }

  generateTreeData(data: VideoItem[]) {
    const treeData: TreeNode[] = [];
    data.forEach((item) => {
      const dossiers = item.dossiers;
      let treeNode = treeData;

      for (let i = 0; i < dossiers.length; i++) {
        let workNode;
        const idx = treeNode.findIndex(
          (item) => item.name == dossiers[i].dossier
        );
        if (idx > -1) {
          workNode = treeNode[idx];
        } else {
          const newNode: TreeNode = {
            name: dossiers[i].dossier,
            children: [],
            impression: 0,
            level: i,
            expandable: true,
          };

          treeNode.push(newNode);
          workNode = newNode;
        }

        if (i == dossiers.length - 1) {
          if (workNode.videos) {
            workNode.videos.push(item);
          } else {
            workNode.videos = [item];
          }
        }

        treeNode = workNode.children;
      }
    });
    this.reportTreeData.set(treeData);
  }
  saveReport() {
    const newReport: ReportItem = {
      id: 999,
      data: this.getReportData(),
    };
    // this.videoCarbonService.saveReport();
  }

  getReportData(): ReportDataItem[] {
    const reprotDataItems: ReportDataItem[] = [];
    const reportTree = this.reportTreeData();
    // this.findAllReportItemFromReportTree(reportTree, {}, reprotDataItems);

    return reprotDataItems;
  }

  findAllReportItemFromReportTree(
    reportTree: TreeNode,
    // eslint-disable-next-line @typescript-eslint/ban-types
    reportDataItem: {},
    result: any[]
  ) {
    // if (reportTree.children.length == 0) {
    //   if (reportTree.videos && reportTree.videos?.length > 0) {
    //     const videoNumber = reportTree.videos.length;
    //     const impression = reportTree.impression / videoNumber;
    //     reportTree.videos?.forEach((item) => {
    //       const newReportItem = {
    //         Resulution: item.video_quality,
    //         impression: impression,
    //         'Nom-video': item.name,
    //         'Poids-unitaire-source': this.fileSizePipe.transform(item.size),
    //         'Total-poids-source': this.fileSizePipe.transform(
    //           item.size * impression
    //         ),
    //         'Emission-CO2-source': `${
    //           (0.05 * (item.size * impression)) / 1024
    //         }kg`,
    //         'Poids-unitaire-Encodee': this.fileSizePipe.transform(
    //           item.encoder[0].size
    //         ),
    //         'Total-poids-Encodee': this.fileSizePipe.transform(
    //           item.encoder[0].size * impression
    //         ),
    //         'Emission-Co2-Encodee': `${
    //           (0.05 * (item.encoder[0].size * impression)) / 1024
    //         }kg`,
    //         'Gain-carbone': `${
    //           (0.05 * (item.size * impression)) / 1024 -
    //           (0.05 * (item.encoder[0].size * impression)) / 1024
    //         }kg`,
    //         'Reduction-poids': this.percentage.transform(
    //           (0.05 * (item.encoder[0].size * impression)) /
    //             1024 /
    //             ((0.05 * (item.size * impression)) / 1024)
    //         ),
    //         ...reportDataItem,
    //       };
    //       result.push(newReportItem);
    //     });
    //   }
    // }
    // if()
  }
}
