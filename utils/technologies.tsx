import { TIconComponent } from "@/components/HomePage/components/types";
import {
  IconBrandFigma,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { TTechnologie } from "./types";

export const TECHNOLOGIES: TTechnologie[] = [
  {
    id: 1,
    icon: "react",
  },
  {
    id: 2,
    icon: "nextjs",
  },
  {
    id: 3,
    icon: "nodejs",
  },
  {
    id: 4,
    icon: "figma",
  },
  {
    id: 5,
    icon: "mongo",
  },
  {
    id: 6,
    icon: "tailwindcss",
  },
];

export const ICON_COMPONENTS: TIconComponent = {
  react: <IconBrandReact size={30} className="text-icon" />,
  tailwindcss: <IconBrandTailwind size={30} className="text-icon" />,
  nextjs: <IconBrandNextjs size={30} className="text-icon" />,
  nodejs: <IconBrandNodejs size={30} className="text-icon" />,
  figma: <IconBrandFigma size={30} className="text-icon" />,
  mongo: <IconBrandMongodb size={30} className="text-icon" />,
};
