import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { ISocialMedia, TIconSocialMedia, TNAV } from "./types";

export const PROJECTS: TNAV[] = [
  {
    id: 1,
    name: "Arquitectura",
    link: "https://parrallax-arquitectura.vercel.app",
  },
  {
    id: 2,
    name: "Sitio de ropa",
    link: "https://ledbeey.vercel.app",
  },
  {
    id: 3,
    name: "EdelvStudio",
    link: "https://edeldev-studio.vercel.app",
  },
  {
    id: 4,
    name: "EdelFilms",
    link: "https://edelfilms.netlify.app",
  },
];

export const LINKS: TNAV[] = [
  {
    id: 1,
    name: "Inicio",
    link: "/#home",
  },
  {
    id: 2,
    name: "¿Cómo trabajamos?",
    link: "/#hoWeWork",
  },
  {
    id: 3,
    name: "Portafolio",
    link: "/#portafolio",
  },
  {
    id: 4,
    name: "Contacto",
    link: "/contact",
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
