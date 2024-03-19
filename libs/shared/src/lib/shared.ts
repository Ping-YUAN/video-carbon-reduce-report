export interface VideoEncoderItem {
  id: number;
  size: number;
  quality: string;
}

export interface VideoDossierItem {
  name: string;
  id: number;
  dossier: string;
}

export interface VideoItem {
  id: number;
  name: string;
  duration: number;
  size: number;
  video_quality: string;
  encoder: VideoEncoderItem[];
  dossiers: VideoDossierItem[];
}

export interface ReportDataItem {
  'Dossier-N1': string;
  'Dossier-N2': string;
  'Dossier-N3': string;
  'Dossier-N4': string;
  'Nom-video': string;
  Resolution: string;
  impression: number;
  'Poids-unitaire-source': number;
  'Total-poids-source': number;
  'Emission-CO2-source': number;
  'Poids-unitaire-Encodee': number;
  'Total-poids-Encodee': number;
  'Emission-Co2-Encodee': number;
  'Gain-carbone': number;
  'Reduction-poids': number;
}
export interface ReportItem {
  id?: number;
  data: ReportDataItem[];
}

export interface VideoCarbonData {
  reports: ReportItem[];
  videos: VideoItem[];
}
