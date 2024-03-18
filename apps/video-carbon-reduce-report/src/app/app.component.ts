import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoCarbonService } from '@video-carbon-reduce-report/video-carbon-services';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VideoCarbonNavComponent } from '@video-carbon-reduce-report/video-carbon-nav';
@Component({
  standalone: true,
  imports: [RouterModule, MatSidenavModule, VideoCarbonNavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'video-carbon-reduce-report';
  constructor(private videoCarbonService: VideoCarbonService) {}
  ngOnInit(): void {
    this.videoCarbonService.getDbData();
  }
}
