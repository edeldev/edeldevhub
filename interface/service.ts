import { StaticImageData } from "next/image";

export interface IService {
  id: number;
  title: string;
  caption: string;
  image: StaticImageData | string;
}
