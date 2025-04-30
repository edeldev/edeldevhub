import { InfiniteSlider } from "@/components/ui";
import { ICON_COMPONENTS, TECHNOLOGIES } from "@/utils/technologies";

export const Technologies = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-10 md:mt-0">
      <p className="text-[#999999]">Tecnologías que usamos</p>
      <InfiniteSlider gap={24} speed={40} className="pt-8 w-[300px] md:w-auto">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.id}>{ICON_COMPONENTS[tech.icon]}</div>
        ))}
      </InfiniteSlider>
    </div>
  );
};
