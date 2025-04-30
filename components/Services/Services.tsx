import { SERVICES } from "@/utils/services";
import { CardService } from "./components";
import { Container } from "../Container";

export const Services = () => {
  return (
    <Container className="mt-10">
      <div>
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent">
          ¿Qué hacemos?
        </h2>
        <p className="text-body text-base mt-3">
          Sitios web diseñados para el crecimiento y las conversiones.
        </p>
      </div>
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
