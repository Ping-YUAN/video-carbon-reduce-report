import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCarbonCardComponent } from '../video-carbon-card/video-carbon-card.component';
import { VideoItem } from '@video-carbon-reduce-report/shared';
import { VideoCheckStatus } from '../model';

@Component({
  selector: 'lib-video-carbon-card-list',
  standalone: true,
  imports: [CommonModule, VideoCarbonCardComponent],
  templateUrl: './video-carbon-card-list.component.html',
  styleUrl: './video-carbon-card-list.component.scss',
})
export class VideoCarbonCardListComponent {
  videos = input<VideoItem[] | null>();
  filter = input<string[]>();
  selectedVideos = signal<VideoItem[]>([]);
  @Output()
  videoSelected = new EventEmitter();

  filteredVideos = computed(() => {
    if (this.filter()?.length == 0) return this.videos();
    return this.videos()?.filter((item) => {
      for (let i = 0; i < item.dossiers.length; i++) {
        if (this.filter()?.includes(item.dossiers[i].dossier)) {
          return true;
        }
      }

      return false;
    });
  });

  onVideoChecked(videoCheckStatus: VideoCheckStatus) {
    if (videoCheckStatus.checked) {
      this.selectedVideos.set([
        ...this.selectedVideos(),
        ...[videoCheckStatus.video],
      ]);
    } else {
      const videos = this.selectedVideos().filter(
        (item) => item.id !== videoCheckStatus.video.id
      );
      this.selectedVideos.set(videos);
    }

    this.videoSelected.emit(this.selectedVideos());
  }
}
