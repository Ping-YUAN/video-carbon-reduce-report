import { VideoItem } from '@video-carbon-reduce-report/shared';

export interface VideoCarbonFilter {
  tag: string[];
}

export interface VideoCheckStatus {
  checked: boolean;
  video: VideoItem;
}

export interface TreeNode {
  name: string;
  children: TreeNode[];
  impression: number;
  videos?: VideoItem[];
  level: number;
  expandable: boolean;
  isExpanded: boolean;
}
