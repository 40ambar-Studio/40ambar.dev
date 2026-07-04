import type { ComponentType } from "react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription:string;
  icon?: ComponentType<{ size?: number }>;
  iconUrl?: string;
  gitHubUrl?:string;
  playStoreUrl?:string;
};
