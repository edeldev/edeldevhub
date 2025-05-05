import { TCategories } from "@/utils/types";
import { StaticImageData } from "next/image";

export interface IProjects {
  id: number;
  project: string;
  img: StaticImageData;
  detailsImg: StaticImageData;
  categories: TCategories[];
  chip: TChip[];
  description: TDescription[];
}

type TChip = {
  id: number;
  title: string;
};

type TDescription = {
  id: number;
  title: string;
  content: string;
};
