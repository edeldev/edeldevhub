"use client";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/utils/faq";
import { IconCaretDownFilled } from "@tabler/icons-react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fragment>
      <h2 className="font-semibold text-2xl">Preguntas frecuentes</h2>
      <p className="text-sm text-body mt-2 mb-10">
        ¿Aún tienes preguntas? Tenemos las respuestas.
      </p>
      <div className="space-y-4">
        {FAQ.map((faq, index) => (
          <div key={faq.id} className="bg-container rounded-xl overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-base font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconCaretDownFilled size={15} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <div className="py-4 text-body">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
