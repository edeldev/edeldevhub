import { ITechnologies } from "@/interface/technologies";

export type TNavLink = {
  id: number;
  label: string;
  link: string;
};

export type TTechnologie = {
  id: number;
  icon: ITechnologies;
};

export type TTestimonial = {
  quote: string;
  name: string;
  title: string;
};
