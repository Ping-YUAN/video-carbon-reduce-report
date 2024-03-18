import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItem } from '@video-carbon-reduce-report/shared';
import { FileSizePipe } from '../video-carbon-card/video-size.pipe';

@Component({
  selector: 'lib-video-carbon-report-item',
  standalone: true,
  imports: [CommonModule, FileSizePipe],
  templateUrl: './video-carbon-report-item.component.html',
  styleUrl: './video-carbon-report-item.component.scss',
})
export class VideoCarbonReportItemComponent {
  videos = input<VideoItem[]>();
  impression = input<number>();

  totalSize(size: number, impression: number | undefined): number {
    if (impression) {
      return size * impression;
    } else {
      return 0;
    }
  }

  emission(size: number): number {
    const mb = size / 1024;

    return Math.round(mb * 0.05);
  }
}
