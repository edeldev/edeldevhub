"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../Container";
import { PROJECTS } from "@/utils/projects";
import { DetailsProject, Project, SectionHeading } from "./components";
import { IProjects } from "@/interface/projects";

export const Projects = () => {
  const [selectProject, setSelectProject] = useState<IProjects | null>(null);
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const openProject = (project: IProjects) => {
    setSelectProject(project);
    setShowDetails(true);
    setOpen(true);
  };

  const closeProject = () => {
    setOpen(false);
    setTimeout(() => {
      setShowDetails(false);
      setSelectProject(null);
    }, 300);
  };

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }

    return () => {
      html.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <Container id="portafolio" className="scroll-mt-20">
      <SectionHeading />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mx-auto">
        {PROJECTS.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="col-span-4 bg-neutral-900 p-5 rounded-2xl cursor-pointer"
            onClick={() => openProject(project)}
          >
            <Project project={project} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Link
          href="/projects"
          className="border-1 border-border-button py-2 px-6 rounded-full text-body hover:bg-button-hover transition duration-300 ease-in-out"
        >
          Ver todo
        </Link>
      </div>

      {showDetails && selectProject && (
        <DetailsProject
          project={selectProject}
          setOpen={closeProject}
          isOpen={open}
        />
      )}
    </Container>
  );
};
