import { Buttons } from "./Buttons";
import { IDescription } from "./types";

export const DescriptionId = ({ template }: IDescription) => {
  return (
    <div className="col-span-12 md:col-span-9 space-y-5 max-w-3xl mx-auto">
      {template.descriptionId.map((description) => (
        <div key={description.id} className="space-y-5 whitespace-pre-line">
          <h2 className="text-4xl font-semibold">{description.title}</h2>
          <p className="text-body">{description.content}</p>
        </div>
      ))}

      <div className="mt-10">
        <Buttons template={template} />
      </div>
    </div>
  );
};
