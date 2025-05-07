import { Fragment } from "react";
import {
  HomePage,
  Responsive,
  Services,
  Testimonials,
  Features,
  Projects,
  HoWeWork,
  FadeIn,
} from "@/components";

export default function Home() {
  return (
    <Fragment>
      <FadeIn>
        <HomePage />
      </FadeIn>
      <Services />
      <Testimonials />
      <Responsive />
      <Features />
      <HoWeWork />
      <Projects />
    </Fragment>
  );
}
