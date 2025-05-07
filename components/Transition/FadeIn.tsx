"use client";
import { motion } from "framer-motion";
import { IFadeIn } from "./types";

export const FadeIn = ({ children, duration = 0.2, delay = 0 }: IFadeIn) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
