import Link from "next/link";
import { IconStarFilled } from "@tabler/icons-react";

export const HeroContent = () => {
  return (
    <div className="relative  mx-auto w-full max-w-7xl p-4 pt-40 md:pt-30 flex flex-col gap-8">
      <div className="border border-border bg-header mx-auto rounded-full flex items-center text-body gap-2 py-2 px-4 flex-wrap justify-center">
        {[...Array(5)].map((_, i) => (
          <IconStarFilled key={i} size={15} />
        ))}
        <p className="text-[.8rem]">+50 personas lo amaron</p>
      </div>

      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl text-balance">
        Creamos Sitios Webs Profesionales Que Convierten
      </h1>
      <p className="mx-auto max-w-lg text-center text-lg font-normal text-body text-balance leading-6">
        Sitios Web Personalizados y Optimizados para SEO, Velocidad y Conversión
        — Atrae Más Clientes y Aumenta tus Ventas. ¡Dale un vistazo a tu próxima
        web!.
      </p>
      <div className="flex gap-5 justify-center flex-wrap">
        <Link
          href="#"
          className="py-2 px-5 border border-border-button rounded-full text-body hover:bg-button-hover transition duration-300 ease-in-out w-full sm:w-auto text-center"
        >
          Cotizar página web
        </Link>
        <Link
          href="/projects"
          className="py-2 px-5 bg-white rounded-full text-black font-medium hover:bg-gray-300 transition duration-300 ease-in-out w-full sm:w-auto text-center"
        >
          Ver proyectos
        </Link>
      </div>
    </div>
  );
};
