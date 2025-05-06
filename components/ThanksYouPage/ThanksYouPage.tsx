import Link from "next/link";
import { IconProgressCheck } from "@tabler/icons-react";

export const ThanksYouPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="min-h-[calc(100vh-40px)] flex flex-col items-center justify-center gap-5">
        <IconProgressCheck size={150} stroke={1} className="text-cyan-500" />

        <h3 className="text-4xl font-bold">¡Gracias!</h3>
        <div className="w-full max-w-2xl text-center">
          <p className="mb-5 text-body">
            Gracias por contactarnos. Agradecemos que se haya tomado el tiempo
            de escribirnos. Un miembro de nuestro equipo revisará su solicitud y
            se comunicará con usted a la brevedad.
          </p>
          <p className="text-body">
            Si tiene alguna consulta urgente o necesita asistencia adicional, no
            dude en escribirnos a{" "}
            <Link
              href="mailto:edeldev25@gmail.com"
              className="text-cyan-500 cursor-pointer transition duration-300 ease-in-out hover:text-cyan-600"
            >
              edeldev25@gmail.com.
            </Link>{" "}
            Estaremos encantados de ayudarle.
          </p>
        </div>
      </div>
    </div>
  );
};
