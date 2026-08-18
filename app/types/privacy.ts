export interface PrivacyPolicy {
  appSlug: string;
  appName: string;
  effectiveDate: string;
  contactEmail: string;
  sections: {
    heading: string;
    content: string;
  }[];
}
