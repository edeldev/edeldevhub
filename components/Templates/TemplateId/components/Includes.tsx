import { IIncludes } from "./types";

export const Includes = ({ template }: IIncludes) => {
  return (
    <div className="col-span-12 md:col-span-3">
      {template.type === "pago" ? (
        <h3 className="text-2xl font-semibold mb-5">Páginas</h3>
      ) : (
        <h3 className="text-2xl font-semibold mb-5">Incluye</h3>
      )}
      <ul className="list-disc pl-5">
        {template.list.map((list, index) => (
          <li key={index} className="text-body">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
