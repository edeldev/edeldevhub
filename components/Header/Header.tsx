"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Navbar } from "./components";
import { NAV_LINK } from "@/utils/nav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="fixed z-40 w-full p-2 md:px-10 md:py-5">
      <div className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] mx-auto border border-border bg-header/70 backdrop-blur-md py-4 px-5 rounded-2xl xl:rounded-full">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex flex-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C5C5C5] transition duration-300 ease-in-out"
            >
              EdelDev
            </Link>
          </div>

          <nav className="hidden xl:block">
            <ul className="flex gap-1">
              {NAV_LINK.map((nav) => (
                <li key={nav.id} className="relative">
                  {pathname === nav.link && (
                    <span className="absolute w-1 h-1 rounded-full bg-body -bottom-3 left-1/2 transform -translate-1/2" />
                  )}
                  <Link
                    href={nav.link}
                    className="py-2 px-5 rounded-full hover:bg-hover-nav transition duration-300 ease-in-out"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden xl:flex flex-1 justify-end">
            <Link
              href="https://wa.me/8123697420/?text=Quiero,%20cotizar%20un%20proyecto"
              target="_blank"
              className="bg-white text-center py-2 px-5 rounded-full text-black text-sm font-medium transition duration-300 ease-in-out hover:bg-gray-300"
            >
              Cotiza tu proyecto
            </Link>
          </div>

          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Navbar setIsOpen={setIsOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
