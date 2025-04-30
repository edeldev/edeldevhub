import { Fragment } from "react";
import { HomePage, Services, Testimonials } from "@/components";

export default function Home() {
  return (
    <Fragment>
      <HomePage />
      <Services />
      <Testimonials />
    </Fragment>
  );
}
