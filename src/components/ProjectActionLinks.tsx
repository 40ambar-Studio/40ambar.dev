import { Link } from "react-router";
import { DownloadIcon } from "lucide-react";
import GitHubLogo from "/images/github_logo.svg";
import PlayStoreLogo from "/images/playstore_logo.svg";
import type { Project } from "../types/projects";

interface ActionLink {
  key: string;
  urlKey: keyof Pick<Project, "gitHubUrl" | "playStoreUrl" | "downloadUrl">;
  label: string;
  icon: React.ReactNode;
}

const actionLinks: ActionLink[] = [
  {
    key: "github",
    urlKey: "gitHubUrl",
    label: "GitHub",
    icon: (
      <img
        src={GitHubLogo}
        alt="GitHub"
        className="h-4 w-4 invert-on-dark transition-all duration-300 ease-in-out"
      />
    ),
  },
  {
    key: "playstore",
    urlKey: "playStoreUrl",
    label: "Play Store",
    icon: (
      <img
        src={PlayStoreLogo}
        alt="Play Store"
        className="h-4 w-4 invert-on-dark transition-all duration-300 ease-in-out"
      />
    ),
  },
  {
    key: "download",
    urlKey: "downloadUrl",
    label: "Download",
    icon: <DownloadIcon size={16} />,
  },
];

export function ProjectActionLinks({ app }: { app: Project }) {
  return (
    <div className="flex items-center text-sm gap-6">
      {actionLinks.map((link) => {
        const url = app[link.urlKey];
        if (!url) return null;

        return (
          <Link
            key={link.key}
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-(--primary)"
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
