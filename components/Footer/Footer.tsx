import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import {
  ICON_SOCIAL_MEDIA,
  LINKS,
  SOCIAL_MEDIA,
  TEMPLATES,
} from "@/utils/footer";
import LOGO_EDEL from "@/public/LOGO-EDEL-LIGHT.png";

export const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col gap-5 mb-15 md:mb-0">
          <h4 className="text-lg">EdelDev</h4>
          <p className="text-body leading-5">
            Servicio de diseño y <br /> desarrollo de páginas webs
          </p>
          <div className="flex gap-5">
            {SOCIAL_MEDIA.map((media) => (
              <Link key={media.id} href={media.link} target="_blank">
                {ICON_SOCIAL_MEDIA[media.name]}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-30">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg">Últimas plantillas</h4>
            {TEMPLATES.map((template) => (
              <Link
                href={template.link}
                key={template.id}
                target="_blank"
                className="text-body cursor-pointer transition duration-300 ease-in-out hover:text-white"
              >
                {template.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg">Navegación</h4>
            {LINKS.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                className="text-body cursor-pointer transition duration-300 ease-in-out hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-black via-neutral-800 to-black my-5"></div>

      <div className="flex justify-between flex-wrap">
        <p className="text-body text-sm">© 2025 EdelDev</p>
        <div className="flex gap-3 items-center">
          <Image src={LOGO_EDEL} alt="logo" width={30} height={30} />
          <p className="text-sm text-body">
            By
            <span className="underline cursor-pointer transition duration-300 ease-in-out hover:text-white">
              EdelDev
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};
