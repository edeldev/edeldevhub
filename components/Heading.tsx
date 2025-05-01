import { IHeading } from "./types";

export const Heading = ({ title, subtitle }: IHeading) => (
  <div>
    <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent">
      {title}
    </h2>
    <p className="text-body text-base mt-3">{subtitle}</p>
  </div>
);
