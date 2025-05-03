import { ICON_SOCIAL_MEDIA, SOCIAL_MEDIA } from "@/utils/footer";
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";

export const ContactContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-body">Contacto</p>
      <h2 className="text-4xl md:text-5xl">
        Estamos aquí para <br /> ayudar
      </h2>
      <p className="text-sm text-body">
        No te preocupes. Si tienes alguna otra pregunta o necesitas más
        información, no dudes en ponerte en contacto con nosotros directamente.
      </p>
      <div className="h-[0.1px] w-full bg-body my-5"></div>

      <Link
        href="mailto:edeldev25@gmail.com"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <IconMail stroke={1} />
        <span className="text-body transition duration-300 ease-in-out hover:text-white">
          edeldev25@gmail.com
        </span>
      </Link>

      <div className="flex gap-5 flex-wrap">
        {SOCIAL_MEDIA.map((media) => (
          <Link key={media.id} href={media.link} target="_blank">
            {ICON_SOCIAL_MEDIA[media.name]}
          </Link>
        ))}
      </div>
    </div>
  );
};
