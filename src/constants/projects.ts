import PillgrimLogo from "/images/pillgrim_logo.png";
import { privacyPolicies } from "./privacyPolicies";
import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    slug: "pillgrim",
    title: "Pillgrim",
    description: "Minimalist user friendly medication reminder.",
    longDescription:
      "Pillgrim is a free, ad-free medication reminder app that does not store or sell any data, requires no internet connection, and stores user data locally on the phone.\n\nIt was developed with a focus on ease of use, data security, and privacy.\n\n You can add your medications and, if you wish, track your inventory, receive reminders when your supply is running low, or hide the medication names. You can customize the app to your personal preferences with additional features like these.\n\n The app saves your medication purchase logs for up to 5 years on your phone; you can select any month and export the data in PDF or CSV format.",
    privacyPolicy: privacyPolicies.pillgrim,
    iconUrl: PillgrimLogo,
    gitHubUrl: "https://github.com/leidorf/pillgrim/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ambar40.pillgrim",
    downloadUrl: "https://codeberg.org/leidorf/pillgrim/releases/latest",
  },
];
