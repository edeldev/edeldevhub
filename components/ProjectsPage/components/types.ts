import { IProjects } from "@/interface/projects";
import { TCategories } from "@/utils/types";

export interface IFilter {
  active: TCategories;
  setActive: (active: TCategories) => void;
  filteredProjects: IProjects[];
}
