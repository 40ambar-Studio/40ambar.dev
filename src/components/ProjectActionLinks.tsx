import { Link } from "react-router";
import { DownloadIcon } from "lucide-react";
import { GitHubIcon } from "./GitHubIcon";
import { PlayStoreIcon } from "./PlayStoreIcon";
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
    icon: <GitHubIcon size={16} />,
  },
  {
    key: "playstore",
    urlKey: "playStoreUrl",
    label: "Play Store",
    icon: <PlayStoreIcon size={16} />,
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
