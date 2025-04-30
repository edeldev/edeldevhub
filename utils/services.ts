import { IService } from "@/interface/service";
import IMAGE1 from "@/public/services/DESARROLLO.webp";
import IMAGE2 from "@/public/services/SEO.webp";
import IMAGE3 from "@/public/services/CONVER.webp";
import IMAGE4 from "@/public/services/RESPONSIVE.webp";

export const SERVICES: IService[] = [
  {
    id: 1,
    title: "Diseño y desarrollo de sitios webs personalizados",
    caption:
      "Creamos sitios web a medida que se alinean con la identidad de tu marca y los objetivos de tu negocio, garantizando una experiencia de usuario intuitiva, moderna y funcional.",
    image: IMAGE1,
  },
  {
    id: 2,
    title: "Optimización SEO para captación efectiva de leads",
    caption:
      "Aplicamos estrategias SEO on-page y técnicas de posicionamiento orgánico que incrementan tu visibilidad en buscadores, atrayendo tráfico calificado que se convierte en oportunidades de negocio reales.",
    image: IMAGE2,
  },
  {
    id: 3,
    title: "Optimización de la tasa de conversión (CRO)",
    caption:
      "Mejoramos la estructura, el diseño y los llamados a la acción de tu sitio para aumentar el porcentaje de visitantes que realizan acciones clave, como llenar formularios, agendar citas o concretar compras.",
    image: IMAGE3,
  },
  {
    id: 4,
    title: "Adaptabilidad móvil y velocidad de carga optimizada",
    caption:
      "Desarrollamos sitios completamente responsivos y rápidos, asegurando una experiencia fluida desde cualquier dispositivo, lo que mejora la retención de usuarios y el rendimiento general del sitio.",
    image: IMAGE4,
  },
];
