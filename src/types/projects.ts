import type { ComponentType } from "react";
import type { PrivacyPolicy } from "./privacy";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  privacyPolicy: PrivacyPolicy;
  icon?: ComponentType<{ size?: number }>;
  iconUrl?: string;
  gitHubUrl?: string;
  playStoreUrl?: string;
  downloadUrl?: string;
}
