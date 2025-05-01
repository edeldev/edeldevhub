import { Fragment } from "react";
import { IInput } from "./types";

export const Input = ({ id, type = "text", placeholder }: IInput) => (
  <Fragment>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className="bg-container border border-border p-3 rounded-lg focus:outline-none focus:border-focus-input transition"
    />
  </Fragment>
);
