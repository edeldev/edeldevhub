import { SpotlightCard } from "@/components/ui";
import Image from "next/image";
import { ICardService } from "./types";

export const CardService = ({ service }: ICardService) => {
  return (
    <SpotlightCard className="custom-spotlight-card">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <h3 className="text-balance">{service.title}</h3>
        <p className="text-body text-sm text-balance">{service.caption}</p>
        <Image src={service.image} alt={service.caption} />
      </div>
    </SpotlightCard>
  );
};
