"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE2_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS configuration.");
      toast.error("Hubo un error al enviar el mensaje");
      return;
    }

    if (!form.current) return;

    const formData = new FormData(form.current);
    const email = formData.get("email") as string;

    if (!validateEmail(email)) {
      toast.error("Ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
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
    <div className="bg-neutral-900 p-8 rounded-3xl shadow">
      <Toaster position="top-center" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Edel Ballesteros"
              className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="edeldev25@gmail.com"
              className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-1" htmlFor="subject">
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Agrega el asunto"
            className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-1" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Pregunta lo que quieras..."
            className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black font-medium px-6 py-2 rounded-full w-full hover:bg-neutral-200 transition cursor-pointer"
        >
          {loading ? "Enviando..." : "Entregar"}
        </button>
      </form>
    </div>
  );
};
