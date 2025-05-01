import { Fragment } from "react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { Input } from "@/components/Input";

export const Form = () => {
  return (
    <Fragment>
      <h2 className="text-2xl font-semibold">¿Listo para crecer? ¡Hablemos!</h2>
      <p className="text-body text-sm mt-3">
        Reserva una llamada de estrategia gratuita y te contactaremos en menos
        de 12 horas.
      </p>
      <form className="flex flex-col gap-5 mt-10">
        <Input id="name" placeholder="Nombre" />

        <Input id="email" type="email" placeholder="Correo electrónico" />

        <div className="relative">
          <label htmlFor="service" className="sr-only">
            Servicio
          </label>
          <select
            id="service"
            name="service"
            className="appearance-none bg-container border border-border p-3 pr-10 rounded-lg w-full focus:outline-none focus:border-focus-input transition"
          >
            <option value="">Servicio</option>
            <option value="web">Desarrollo web</option>
            <option value="seo">Posicionamiento SEO</option>
            <option value="ads">Publicidad en redes</option>
          </select>
          <IconCaretDownFilled
            size={15}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        <Input id="budget" placeholder="Presupuesto" />

        <label htmlFor="message" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Cuéntanos tu proyecto"
          className="bg-container border border-border p-3 rounded-lg focus:outline-none focus:border-focus-input transition resize-none"
        />

        <button
          type="submit"
          className="bg-white text-black font-semibold py-3 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
        >
          Enviar solicitud
        </button>
      </form>
    </Fragment>
  );
};
