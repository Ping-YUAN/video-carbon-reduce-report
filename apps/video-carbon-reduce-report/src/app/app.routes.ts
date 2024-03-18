import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'video',
    loadComponent: () =>
      import('@video-carbon-reduce-report/video-carbon-vlist').then(
        (mod) => mod.VideoCarbonVlistComponent
      ),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('@video-carbon-reduce-report/video-carbon-report').then(
        (mod) => mod.VideoCarbonReportComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'video',
  },
];
