import Link from "next/link";
import { Heading } from "@/components/Heading";

export const SectionHeading = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Heading
        title="Portafolio"
        subtitle="Cada proyecto es único. Aquí están algunos de mis trabajos."
      />
      <Link
        href="#"
        className="hidden md:inline-block border-1 border-border-button py-2 px-4 rounded-full text-body hover:bg-button-hover transition duration-300 ease-in-out"
      >
        Ver todo
      </Link>
    </div>
  );
};
