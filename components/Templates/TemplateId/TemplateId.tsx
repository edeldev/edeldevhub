import { ITemplateId } from "./types";
import Image from "next/image";
import { DescriptionId, Includes, TitleId } from "./components";

export const TemplateId = ({ template }: ITemplateId) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <TitleId template={template} />

        <div>
          <Image
            src={template.imgTemplateId}
            alt={template.caption}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-black via-neutral-800 to-black my-5"></div>

      <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 justify-center">
        <DescriptionId template={template} />
        <Includes template={template} />
      </div>
    </>
  );
};
