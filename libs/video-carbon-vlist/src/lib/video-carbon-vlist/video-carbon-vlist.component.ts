import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCarbonActionComponent } from '../video-carbon-action/video-carbon-action.component';
import { VideoCarbonCardListComponent } from '../video-carbon-card-list/video-carbon-card-list.component';
import { VideoCarbonService } from '@video-carbon-reduce-report/video-carbon-services';
import { map, tap } from 'rxjs';
import { VideoItem } from '@video-carbon-reduce-report/shared';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { VideoCarbonReportGenerateComponent } from '../video-carbon-report-generate/video-carbon-report-generate.component';

@Component({
  selector: 'lib-video-carbon-vlist',
  standalone: true,
  imports: [
    CommonModule,
    VideoCarbonActionComponent,
    VideoCarbonCardListComponent,
  ],
  templateUrl: './video-carbon-vlist.component.html',
  styleUrl: './video-carbon-vlist.component.scss',
})
export class VideoCarbonVlistComponent {
  selectedVideos = signal<VideoItem[]>([]);
  videos = this.videoCarbonService.data.pipe(
    map((data) => data.videos),
    tap((data) => {
      const tagSet = new Set();
      data.forEach((video) => {
        video.dossiers.forEach((item) => {
          tagSet.add(item.dossier);
        });
      });

      this.tags.set([...tagSet] as any);
    })
  );
  tags = signal([]);
  filter = signal<string[]>([]);
  constructor(
    private videoCarbonService: VideoCarbonService,
    private dialog: MatDialog
  ) {}

  generateReport() {
    // console.log(this.selectedVideos());
    this.dialog.open(VideoCarbonReportGenerateComponent, {
      width: '600px',
      data: this.selectedVideos(),
    });
  }
  onVideoSelected(videos: VideoItem[]) {
    this.selectedVideos.set(videos);
  }
  onFilterChanged(tags: string[]) {
    this.filter.set(tags);
  }
}
