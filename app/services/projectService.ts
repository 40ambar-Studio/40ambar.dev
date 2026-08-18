import { projects } from "~/data/projects";
import type { Project } from "~/types/projects";

export const projectService = {
  getAll: (): Project[] => projects,

  getBySlug: (slug: string): Project | undefined => {
    return projects.find((p) => p.slug === slug);
  },
};
