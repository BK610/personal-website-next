export default interface MusicItem {
  title: string;
  description: string;
  type: MusicType;
  embedUrl: string;
  linkUrl: string;
}

export type MusicType = "YouTube" | "Google Photos" | "File" | "Other";
