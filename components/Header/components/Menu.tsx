import { IconMenu, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { IMenu } from "./types";

export const Menu = ({ isOpen, setIsOpen }: IMenu) => {
  return (
    <button
      type="button"
      className="xl:hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconX />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
