import { ISocialMedias } from "@/interface/social-media";
import { ITechnologies } from "@/interface/technologies";
import { JSX } from "react";

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

export type TWhyWithUs = {
  id: number;
  title: string;
  caption: string;
};

export type TFaq = {
  id: number;
  question: string;
  answer: string;
};

export type TNAV = {
  id: number;
  name: string;
  link: string;
};

export type TIconSocialMedia = Record<ISocialMedias, JSX.Element>;

export interface ISocialMedia {
  id: number;
  name: ISocialMedias;
  link: string;
}

export type TCategorie = TCategories[];

export type TCategories = "Todo" | "Diseño UI/UX" | "Desarrollo web";

export type TTemplateType = "gratis" | "pago";
export type TTemplateCategory = "todo" | "gratis" | "pago";
