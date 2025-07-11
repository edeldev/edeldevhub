"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TEMPLATE_CATEGORIES, TEMPLATES } from "@/utils/templates";
import { Template } from "../Template";
import { TTemplateCategory } from "@/utils/types";

export const FilterTemplate = () => {
  const [active, setActive] = useState<TTemplateCategory>("todo");

  const filteredTemplates =
    active === "todo"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.type.includes(active));

  return (
    <div className="mt-20">
      <div className="flex flex-wrap justify-between items-center gap-5 md:gap-0 mb-10 md:mb-0">
        <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-300 bg-clip-text md:py-8 text-2xl font-bold text-transparent sm:text-4xl">
          Todas las plantillas <span>({filteredTemplates.length})</span>
        </h2>

        <ul className="flex gap-4">
          {TEMPLATE_CATEGORIES.map((chip) => {
            const isActive = active === chip;

            return (
              <motion.li
                key={chip}
                onClick={() => setActive(chip)}
                className={`${
                  isActive
                    ? "bg-white hover:bg-gray-300 text-black"
                    : "border border-border-button text-body hover:bg-button-hover"
                } capitalize py-2 px-5 cursor-pointer rounded-full font-medium transition duration-300 ease-in-out w-full sm:w-auto text-center`}
                {...(!isActive && {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                })}
              >
                {chip}
              </motion.li>
            );
          })}
        </ul>
      </div>

      <Template filteredTemplates={filteredTemplates} />
    </div>
  );
};
