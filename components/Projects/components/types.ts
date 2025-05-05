import { IProjects } from "@/interface/projects";
import { MouseEventHandler } from "react";

export interface IProject {
  project: IProjects;
}

export interface IProjectDetails {
  project: IProjects;
  setOpen: MouseEventHandler<SVGSVGElement>;
  isOpen: boolean;
  setSelectProject: Function;
}
