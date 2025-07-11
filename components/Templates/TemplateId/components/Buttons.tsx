import Link from "next/link";
import { IButton } from "./types";

export const Buttons = ({ template }: IButton) => {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={template.urlPreview}
        target="_blank"
        className="py-2 px-5 border border-border-button rounded-full text-body hover:bg-button-hover transition duration-300 ease-in-out w-full sm:w-auto text-center"
      >
        Vista previa
      </Link>
      {template.type === "pago" ? (
        <Link
          href={template.urlPaid}
          target="_blank"
          className={`py-2 px-5 ${template.bgPlantilla} rounded-full ${template.colorPlantilla} ${template.hoverPlantilla} transition duration-300 ease-in-out w-full sm:w-auto text-center`}
        >
          Comprar por {template.price}
        </Link>
      ) : (
        <Link
          href={template.urlPaid}
          target="_blank"
          className={`py-2 px-5 ${template.bgPlantilla} rounded-full ${template.colorPlantilla} ${template.hoverPlantilla} transition duration-300 ease-in-out w-full sm:w-auto text-center`}
        >
          Consíguelo gratis
        </Link>
      )}
    </div>
  );
};
