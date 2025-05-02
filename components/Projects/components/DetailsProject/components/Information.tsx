import LOGO from "@/public/edel-logo.webp";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "../../types";

export const Information = ({ project }: IProject) => {
  return (
    <div className="flex justify-between items-center mb-10 flex-wrap">
      <div className="mb-5 lg:mb-0">
        <h2 className="text-2xl font-bold mb-3 capitalize">
          {project.project}
        </h2>
        <div className="flex gap-3 flex-wrap">
          {project.chip.map((c) => (
            <p
              key={c.id}
              className="bg-chip-details text-black text-xs py-2 px-4 rounded-full inline"
            >
              {c.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-10">
        <div className="flex gap-2">
          <Image src={LOGO} alt="logo" width={60} height={60} />
          <div className="flex flex-col justify-center">
            <h3 className="font-bold">EdelDev</h3>
            <div className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-[#16B028]" />
              <p className="text-[#16B028] font-bold text-xs">
                Disponible para trabajar
              </p>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="hidden md:block py-3 px-5 bg-black text-xs rounded-full text-white hover:bg-border-button transition duration-300 ease-in-out text-center"
        >
          Pónganse en contacto
        </Link>
      </div>
    </div>
  );
};
