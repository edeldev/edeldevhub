import Link from "next/link";

export const ProjectContent = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-5">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl font-bold">
          Algunos proyectos que hemos realizado.
        </h2>
        <p className="text-sm text-body mt-5 leading-snug ">
          Te presentamos una muestra representativa de los trabajos que hemos
          llevado a cabo. Esta presentación presenta solo algunos ejemplos de
          nuestro extenso portafolio, así como la versatilidad de nuestro equipo
          y nuestro firme compromiso con la calidad en cada proyecto.
        </p>
      </div>
      <Link
        href="https://wa.me/8123697420/?text=Hola,%20quiero%20un%20proyecto"
        target="_blank"
        className="bg-white text-center py-3 px-5 rounded-full text-black text-sm font-medium transition duration-300 ease-in-out hover:bg-gray-300"
      >
        Pónganse en contacto
      </Link>
    </div>
  );
};
