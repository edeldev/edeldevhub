import { Fragment } from "react";
import { IInput } from "./types";

export const Input = ({ id, name, type = "text", placeholder }: IInput) => (
  <Fragment>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="bg-container border border-border p-3 rounded-lg focus:outline-none focus:border-focus-input transition w-full"
    />
  </Fragment>
);
