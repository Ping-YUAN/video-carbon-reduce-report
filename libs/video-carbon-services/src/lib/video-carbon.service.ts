import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ReportItem,
  VideoCarbonData,
} from '@video-carbon-reduce-report/shared';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoCarbonService {
  data: Subject<VideoCarbonData> = new BehaviorSubject<VideoCarbonData>({
    videos: [],
    reports: [],
  });

  constructor(private httpClient: HttpClient) {}

  getDbData() {
    this.httpClient.get('api').subscribe({
      next: (data: any) => {
        this.data.next(data);
        // console.log(data);
      },
      error: () => {
        console.log('error');
      },
    });
  }

  saveReport(data: ReportItem) {
    this.httpClient.post('api', data).subscribe({
      next: () => console.log('save success'),
      error: (err) => {
        console.log(err);
      },
    });
  }
}
