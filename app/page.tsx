import { Fragment } from "react";
import {
  HomePage,
  Responsive,
  Services,
  Testimonials,
  Features,
} from "@/components";

export default function Home() {
  return (
    <Fragment>
      <HomePage />
      <Services />
      <Testimonials />
      <Responsive />
      <Features />
    </Fragment>
  );
}
