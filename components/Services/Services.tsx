import { SERVICES } from "@/utils/services";
import { CardService } from "./components";
import { Container } from "../Container";
import { Heading } from "../Heading";

export const Services = () => {
  return (
    <Container className="mt-10">
      <Heading
        title="¿Qué hacemos?"
        subtitle="Sitios web diseñados para el crecimiento y las conversiones."
      />

      <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-5">
        {SERVICES.map((service) => (
          <div key={service.id} className="col-span-3">
            <CardService service={service} />
          </div>
        ))}
      </div>
    </Container>
  );
};
