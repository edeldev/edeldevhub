import { Container } from "../Container";
import { Faq, Form, WhyWithUs } from "./components";

export const Features = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-neutral-900 p-10 rounded-3xl shadow">
            <WhyWithUs />
          </div>
          <div className="mt-5 bg-neutral-900 p-10 rounded-3xl shadow">
            <Faq />
          </div>
        </div>

        <div className="bg-neutral-900 p-10 rounded-3xl shadow col-span-12 lg:col-span-4 h-fit">
          <Form />
        </div>
      </div>
    </Container>
  );
};
