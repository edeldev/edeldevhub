import { IconStarFilled } from "@tabler/icons-react";
import { Buttons } from "./Buttons";
import { ITitleId } from "./types";

export const TitleId = ({ template }: ITitleId) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-body text-sm">
        {template.title} - {template.caption}
      </span>
      <h1 className="text-5xl font-semibold">{template.titleId}</h1>
      <p className="text-body">{template.resumeId}</p>

      <Buttons template={template} />
      <div className="flex justify-center md:justify-start gap-2 items-center mb-5 md:mb-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <IconStarFilled key={index} size={20} className="text-yellow-400" />
        ))}
        {template.type === "pago" ? (
          <span>+40 comprarón</span>
        ) : (
          <span>+100 descargas</span>
        )}
      </div>
    </div>
  );
};
