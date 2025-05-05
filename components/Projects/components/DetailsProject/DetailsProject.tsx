"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { IProjectDetails } from "../types";
import { Information } from "./components";

export const DetailsProject = ({
  project,
  setOpen,
  isOpen,
  setSelectProject,
}: IProjectDetails) => {
  const handleClose = () => {
    setSelectProject(null);
    setOpen;
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black w-full h-full py-4 px-5 rounded-2xl shadow-lg overflow-y-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end fixed w-full px-10">
              <IconX
                size={30}
                className="cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div className="md:w-[80%] mx-auto mt-10">
              <Information project={project} />
              <div className="flex justify-center flex-col">
                <Image
                  src={project.detailsImg}
                  alt={project.project}
                  width={1400}
                  height={1400}
                />
                <div className="my-10 space-y-6 text-sm leading-6">
                  {project.description.map((section) => (
                    <div key={section.id}>
                      <h3 className="font-bold mb-2 text-lg">
                        {section.title}:
                      </h3>
                      <p className="whitespace-pre-line">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center mb-10">
                  <p className="mb-5 font-bold text-xl text-center">
                    ¿Listo para trabajar con nosotros? ¡Contáctanos abajo y
                    hagamos realidad tu proyecto!
                  </p>
                  <Link
                    href="#"
                    className="inline py-3 px-5 bg-black text-xs rounded-full text-white hover:bg-border-button transition duration-300 ease-in-out text-center"
                  >
                    Pónganse en contacto
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
