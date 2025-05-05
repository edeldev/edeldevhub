import Link from "next/link";
import { Container } from "../Container";
import { InfiniteMovingCards } from "../ui";
import { TESTIMONIALS } from "@/utils/testimonials";
import { Heading } from "../Heading";

export const Testimonials = () => {
  return (
    <Container>
      <Heading
        title="Testimonios"
        subtitle="Experiencias que hablan por sí solas."
      />
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </div>
      <Link
        href="#"
        className="py-3 px-5 bg-white text-sm rounded-full text-black font-medium hover:bg-gray-300 transition duration-300 ease-in-out text-center self-center"
      >
        ¿Quieres resultados como estos? Hablemos.
      </Link>
    </Container>
  );
};
