import { IContainer } from "./types";

export const Container = ({ id, children, className }: IContainer) => {
  return (
    <section
      id={id}
      className={`container mx-auto py-10 px-4 flex flex-col gap-10 ${className}`}
    >
      {children}
    </section>
  );
};
