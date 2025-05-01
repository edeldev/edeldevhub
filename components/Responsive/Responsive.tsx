"use client";
import { useRef } from "react";
import Image from "next/image";
import { Container } from "../Container";
import { motion, useInView } from "framer-motion";
import RESPONSIVE from "@/public/RESPONSIVE.webp";
import Link from "next/link";

export const Responsive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container>
      <div className="bg-neutral-900 p-10 rounded-3xl shadow relative">
        <div className="flex justify-center items-center">
          <h3 className="hidden md:block absolute text-white uppercase font-bold text-xl sm:text-3xl md:text-5xl lg:text-9xl text-center">
            Totalmente Responsivo
          </h3>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 3 }}
            className="w-full max-w-4xl h-auto object-contain z-1 flex justify-center"
          >
            <Image
              src={RESPONSIVE}
              alt="Imagen de una página web en diferentes resoluciones"
            />
          </motion.div>
        </div>
        <div className="mt-10 md:mt-15 flex justify-center md:justify-between items-center flex-wrap text-center md:text-start gap-5">
          <div>
            <h3 className="font-medium text-lg">
              ¿Quieres un sitio web que convierta y sea responsivo? Comprueba
              los resultados.
            </h3>
            <p className="text-sm text-body mt-2">
              ¡Construyamos el tuyo a continuación!
            </p>
          </div>

          <Link
            href="#"
            className="bg-white text-center py-2 px-5 rounded-full text-black text-sm font-medium transition duration-300 ease-in-out hover:bg-gray-300"
          >
            Reserva una llamada
          </Link>
        </div>
      </div>
    </Container>
  );
};
