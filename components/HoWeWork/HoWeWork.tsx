import { cn } from "@/utils/cn";
import { Container } from "../Container";
import { STEPS } from "@/utils/HoWeWork";
import { Steps } from "./components";

export const HoWeWork = () => {
  return (
    <Container id="hoWeWork" className="scroll-mt-20">
      <div className="relative w-full bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black" />

        <h2 className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-6xl mb-10">
          ¿Cómo trabajamos?
        </h2>

        <div className="flex flex-col max-w-4xl mx-auto relative z-10 gap-4 md:gap-0">
          {STEPS.map((step, index) => (
            <Steps
              key={step.id}
              step={step}
              index={index}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
