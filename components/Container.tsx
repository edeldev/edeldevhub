import { IContainer } from "./types";

export const Container = ({ children, className }: IContainer) => {
  return (
    <section
      className={`container mx-auto py-10 px-4 flex flex-col gap-10 ${className}`}
    >
      {children}
    </section>
  );
};
