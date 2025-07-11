import { TTemplateCategory } from "./types";
import TEMPLATE1 from "@/public/web-cotizacion.png";
import TEMPLATE1_1 from "@/public/template-1-1.png";
import { TTemplate } from "@/interface/template";

export const TEMPLATE_CATEGORIES: TTemplateCategory[] = [
  "todo",
  "gratis",
  "pago",
];

export const TEMPLATES: TTemplate[] = [
  {
    id: 1,
    slug: "cotizacion-web",
    type: "gratis",
    title: "Cotización Web",
    caption: "Ideal para freelancers y agencias",
    img: TEMPLATE1,
    imgTemplateId: TEMPLATE1_1,
    urlPreview:
      "https://www.canva.com/design/DAGrfwg_wDs/nwwVzQcM4akE9aazMTL40w/edit?utm_content=DAGrfwg_wDs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    urlPaid:
      "https://www.canva.com/design/DAGrfwg_wDs/nwwVzQcM4akE9aazMTL40w/edit?utm_content=DAGrfwg_wDs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    colorPlantilla: "text-white",
    bgPlantilla: "bg-gradient-to-r from-[#8e2de2] to-[#f64f59]",
    hoverPlantilla: "hover:opacity-80",
    titleId: "Impresiona desde el primer vistazo",
    resumeId:
      "Plantilla profesional para presentar presupuestos web de forma clara, visual y convincente.",
    list: [
      "Datos del cliente",
      "Descripción breve del prpyecto",
      "Cotización desglosada",
      "Terminos y condiciones",
      "Formas de pago",
      "Total general",
    ],
    descriptionId: [
      {
        id: 1,
        title: "Impresiona, convence y cierra más ventas",
        content:
          "Esta plantilla de cotización profesional está diseñada para ayudarte a presentar tus servicios web de forma clara, elegante y persuasiva. Ideal para freelancers, agencias o empresas tecnológicas, te permitirá impactar positivamente a tus clientes desde el primer contacto.",
      },
      {
        id: 2,
        title: "Esta plantilla incluye:",
        content: `• Datos completos del cliente, para una presentación personalizada.  
• Descripción breve del proyecto, que contextualiza los servicios ofrecidos.  
• Cotización desglosada, con conceptos, cantidades, precios unitarios y subtotales.  
• Total general, claramente visible para evitar confusiones.  
• Términos y condiciones, que detallan tiempos, entregables y límites de servicio.  
• Formas de pago, incluyendo anticipos, plazos y métodos disponibles.`,
      },
      {
        id: 3,
        title: "Instrucciones de uso",
        content: `Para editar la plantilla, asegúrate de haber iniciado sesión en Canva y crea una copia en tu cuenta.`,
      },
    ],
  },
];
