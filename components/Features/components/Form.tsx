"use client";
import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS configuration.");
      toast.error("Hubo un error al enviar el mensaje");
      return;
    }

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = formData.get("user_email") as string;

    if (!validateEmail(email)) {
      toast.error("Ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
      () => {
        setLoading(false);
        toast.success("¡Mensaje enviado exitosamente!");

        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      },
      (error) => {
        setLoading(false);
        console.error("Error al enviar:", error);
        toast.error("Hubo un error al enviar el mensaje");
      }
    );
  };

  return (
    <Fragment>
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-semibold">¿Listo para crecer? ¡Hablemos!</h2>
      <p className="text-body text-sm mt-3">
        Reserva una llamada de estrategia gratuita y te contactaremos en menos
        de 12 horas.
      </p>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 mt-10"
      >
        <Input id="name" name="user_name" placeholder="Nombre" />

        <Input
          id="email"
          name="user_email"
          type="email"
          placeholder="Correo electrónico"
        />

        <div className="relative">
          <label htmlFor="service" className="sr-only">
            Servicio
          </label>
          <select
            id="service"
            name="user_service"
            required
            className="appearance-none bg-container border border-border p-3 pr-10 rounded-lg w-full focus:outline-none focus:border-focus-input transition"
          >
            <option value="">Servicio</option>
            <option value="landing">LandingPage</option>
            <option value="portafolio">Portafolio Personal</option>
            <option value="multipagina">Multipágina</option>
          </select>
          <IconCaretDownFilled
            size={15}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        <div className="relative">
          <label htmlFor="budget" className="sr-only">
            Presupuesto
          </label>
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-body bg-border py-1 px-2 rounded-lg text-sm">
            USD
          </span>
          <input
            id="budget"
            name="user_budget"
            type="number"
            placeholder="Presupuesto"
            required
            className="bg-container border border-border py-3 pr-3 pl-15 rounded-lg focus:outline-none focus:border-focus-input transition w-full"
          />
        </div>

        <label htmlFor="message" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="message"
          name="user_message"
          rows={5}
          placeholder="Cuéntanos tu proyecto"
          required
          className="bg-container border border-border p-3 rounded-lg focus:outline-none focus:border-focus-input transition resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`font-semibold py-3 cursor-pointer rounded-lg transition duration-300 ease-in-out ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>
      </form>
    </Fragment>
  );
};
