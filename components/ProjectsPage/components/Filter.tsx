"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DetailsProject, Project } from "@/components/Projects/components";
import { IProjects } from "@/interface/projects";
import { CATEGORIES } from "@/utils/projects";
import { IFilter } from "./types";

export const Filter = ({ active, setActive, filteredProjects }: IFilter) => {
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
    <div className="mt-5">
      <div className="flex gap-4 mb-6 flex-col md:flex-row">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full transition duration-300 ease-in-out cursor-pointer ${
              active === cat
                ? "bg-white text-black hover:bg-gray-300"
                : "border border-border text-body hover:bg-button-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mx-auto"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="col-span-4 bg-neutral-900 p-5 rounded-2xl cursor-pointer"
              onClick={() => openProject(project)}
            >
              <Project project={project} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {showDetails && selectProject && (
        <DetailsProject
          project={selectProject}
          setOpen={closeProject}
          isOpen={open}
        />
      )}
    </div>
  );
};
