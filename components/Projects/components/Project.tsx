import { Fragment } from "react";
import Image from "next/image";
import { Lens } from "@/components/ui/lens";
import { IProject } from "./types";

export const Project = ({ project }: IProject) => {
  return (
    <Fragment>
      <Lens>
        <Image
          src={project.img}
          alt={project.project}
          width={500}
          height={500}
          className="rounded-2xl w-full"
        />
      </Lens>
      <div className="pt-4">
        <div className="flex gap-3 flex-wrap">
          {project.chip.map((c) => (
            <p
              key={c.id}
              className="bg-container text-body text-xs py-2 px-4 rounded-full"
            >
              {c.title}
            </p>
          ))}
        </div>
        <h2 className="text-white text-xl font-bold mt-5">{project.project}</h2>
      </div>
    </Fragment>
  );
};
