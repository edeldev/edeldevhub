import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { ISocialMedia, TIconSocialMedia, TNAV } from "./types";

export const TEMPLATES: TNAV[] = [
  {
    id: 1,
    name: "Dentista",
    link: "",
  },
  {
    id: 2,
    name: "Agencia de viajes",
    link: "",
  },
  {
    id: 3,
    name: "Gym",
    link: "",
  },
  {
    id: 4,
    name: "Comida",
    link: "",
  },
];

export const LINKS: TNAV[] = [
  {
    id: 1,
    name: "Inicio",
    link: "#home",
  },
  {
    id: 2,
    name: "¿Cómo trabajamos?",
    link: "",
  },
  {
    id: 3,
    name: "Portafolio",
    link: "#portafolio",
  },
  {
    id: 4,
    name: "Plantillas",
    link: "",
  },
];

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    id: 1,
    name: "tiktok",
    link: "https://www.tiktok.com/@edel.dev?_t=ZM-8tszoN5y8xB&_r=1",
  },
  {
    id: 2,
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100087542244958",
  },
  {
    id: 3,
    name: "instagram",
    link: "https://www.instagram.com/edel.dev?igsh=YzNibWJyeDNveGtp&utm_source=qr",
  },
  {
    id: 4,
    name: "linkedin",
    link: "https://www.linkedin.com/in/edel-dev",
  },
];

export const ICON_SOCIAL_MEDIA: TIconSocialMedia = {
  tiktok: (
    <IconBrandTiktok
      className="text-body transition duration-300 ease-in-out hover:text-white"
      stroke={1}
    />
  ),
  facebook: (
    <IconBrandFacebook
      className="text-body transition duration-300 ease-in-out hover:text-white"
      stroke={1}
    />
  ),
  instagram: (
    <IconBrandInstagram
      className="text-body transition duration-300 ease-in-out hover:text-white"
      stroke={1}
    />
  ),
  linkedin: (
    <IconBrandLinkedin
      className="text-body transition duration-300 ease-in-out hover:text-white"
      stroke={1}
    />
  ),
};
