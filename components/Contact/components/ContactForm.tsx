export const ContactForm = () => {
  return (
    <div className="bg-neutral-900 p-8 rounded-3xl shadow">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Edel Ballesteros"
              className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="edeldev25@gmail.com"
              className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-1" htmlFor="subject">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Pregunta sobre plantilla"
            className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-white mb-1" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Pregunta lo que quieras..."
            className="w-full rounded-lg bg-neutral-800 text-white px-4 py-2 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black font-medium px-6 py-2 rounded-full w-full hover:bg-neutral-200 transition cursor-pointer"
        >
          Entregar
        </button>
      </form>
    </div>
  );
};
