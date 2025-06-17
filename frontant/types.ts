
export interface VideoDetails {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface SummaryData {
  summary: string;
  videoDetails: VideoDetails; // Made mandatory as backend should always provide it
}

export interface ApiError {
  message: string;
}
