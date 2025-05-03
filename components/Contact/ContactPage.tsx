import { ContactContent, ContactForm } from "./components";

export const ContactPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="min-h-[calc(100vh-40px)] grid grid-cols-1 lg:grid-cols-12 place-items-center gap-10 mt-20 lg:mt-0 w-full max-w-6xl mx-auto">
        <div className="col-span-6">
          <ContactContent />
        </div>
        <div className="col-span-6 w-full lg:w-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
