import { Component, OnInit, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItem } from '@video-carbon-reduce-report/shared';
import { FileSizePipe } from '../video-carbon-card/video-size.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-video-carbon-report-item',
  standalone: true,
  imports: [
    CommonModule,
    FileSizePipe,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './video-carbon-report-item.component.html',
  styleUrl: './video-carbon-report-item.component.scss',
})
export class VideoCarbonReportItemComponent implements OnInit {
  videos = input<VideoItem[]>();
  impression = input<number>();
  impressionValue = signal<number>(0);
  impressionFormControl = new FormControl();
  totalSize(size: number, impression: number | undefined): number {
    if (impression) {
      return size * impression;
    } else {
      return 0;
    }
  }
  ngOnInit(): void {
    this.impressionFormControl.valueChanges.subscribe((data) => {
      this.impressionValue.set(data);
    });
  }
  emission(size: number): number {
    const mb = size / 1024;

    return Math.round(mb * 0.05);
  }
}
