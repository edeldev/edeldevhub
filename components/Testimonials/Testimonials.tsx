import Link from "next/link";
import { Container } from "../Container";
import { InfiniteMovingCards } from "../ui";
import { TESTIMONIALS } from "@/utils/testimonials";

export const Testimonials = () => {
  return (
    <Container>
      <div>
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent">
          Testimonios
        </h2>
        <p className="text-body text-base mt-3">
          Experiencias que hablan por sí solas.
        </p>
      </div>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </div>
      <Link
        href="#"
        className="py-2 px-5 bg-white text-sm rounded-full text-black font-medium hover:bg-gray-300 transition duration-300 ease-in-out text-center self-center"
      >
        ¿Quieres resultados como estos? Hablemos.
      </Link>
    </Container>
  );
};
