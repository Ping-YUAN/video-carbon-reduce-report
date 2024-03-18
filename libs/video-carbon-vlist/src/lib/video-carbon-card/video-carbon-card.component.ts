import { Component, EventEmitter, Output, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItem } from '@video-carbon-reduce-report/shared';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FileSizePipe } from './video-size.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { VideoCheckStatus } from '../model';
@Component({
  selector: 'lib-video-carbon-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    FileSizePipe,
    MatCheckboxModule,
  ],
  templateUrl: './video-carbon-card.component.html',
  styleUrl: './video-carbon-card.component.scss',
})
export class VideoCarbonCardComponent {
  video = input<VideoItem>();
  checked = signal(false);

  @Output()
  videoChecked = new EventEmitter<VideoCheckStatus>();

  toggleCheckbox() {
    this.checked.set(!this.checked());
    this.videoChecked.emit({
      checked: this.checked(),
      video: this.video() as any,
    });
  }
}
