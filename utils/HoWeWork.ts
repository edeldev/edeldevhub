import { TStep } from "@/interface/step";

export const STEPS: TStep[] = [
  {
    id: "01",
    title: "Contacto",
    description: "Nos envías un resumen detallado del proyecto.",
    color: "amber",
  },
  {
    id: "02",
    title: "Presupuesto",
    description:
      "Analizamos tu proyecto en profundidad y te enviamos una propuesta detallada con el presupuesto y el alcance del trabajo.",
    color: "fuchsia",
  },
  {
    id: "03",
    title: "Inicio",
    description:
      "Una vez aprobado el presupuesto, te solicitaremos toda la información necesaria para comenzar con el desarrollo del proyecto.",
    color: "emerald",
  },
  {
    id: "04",
    title: "Feedback",
    description:
      "Durante el proceso, te mantendremos al tanto del progreso mediante actualizaciones periódicas para asegurar que el resultado cumpla con tus expectativas.",
    color: "gray",
  },
  {
    id: "05",
    title: "Entrega",
    description:
      "Finalizamos y entregamos el proyecto en tiempo y forma, con un resultado que no solo cumple, sino que supera lo esperado.",
    color: "cyan",
  },
];
