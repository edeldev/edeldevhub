import { TTemplateType } from "@/utils/types";
import { StaticImageData } from "next/image";

export type TTemplate = {
  id: number;
  slug: string;
  type: TTemplateType;
  title: string;
  caption: string;
  img: StaticImageData;
  imgTemplateId: StaticImageData;
  price?: string;
  discount?: string;
  urlPreview: string;
  urlPaid: string;
  colorPlantilla: string;
  bgPlantilla: string;
  hoverPlantilla: string;
  titleId: string;
  resumeId: string;
  list: string[];
  descriptionId: TDescription[];
};

type TDescription = {
  id: number;
  title: string;
  content: string;
};
