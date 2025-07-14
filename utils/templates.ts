import { TTemplateCategory } from "./types";
import TEMPLATE1 from "@/public/web-cotizacion.png";
import TEMPLATE1_1 from "@/public/template-1-1.png";
import TEMPLATE2 from "@/public/cotizacion-web-pricing.webp";
import TEMPLATE2_2 from "@/public/template2-2.webp";
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
      "Descripción breve del proyecto",
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
  {
    id: 2,
    slug: "cotizacion-web-completa",
    type: "pago",
    title: "Cotización Web Completa",
    caption: "Propuesta Web Integral para Potenciar tu Presencia Digital",
    img: TEMPLATE2,
    imgTemplateId: TEMPLATE2_2,
    price: "$100",
    discount: "$200",
    urlPreview:
      "https://drive.google.com/file/d/1r7uVE-rpdOTCEA3k0hu9oTs4AnSYWhZP/view?usp=sharing",
    urlPaid:
      "https://wa.me/8123697420/?text=Hola,%20quiero%20comprar%20la%20plantilla%20de%20cotización",
    colorPlantilla: "text-white",
    bgPlantilla: "bg-gradient-to-r from-[#8e2de2] to-[#f64f59]",
    hoverPlantilla: "hover:opacity-80",
    titleId: "Es hora de cerrar muchas ventas",
    resumeId:
      "Cotización profesional que incluye todo lo necesario para presentar tu proyecto web de manera clara, estratégica y persuasiva.",
    list: [
      "Descripción del proyecto",
      "¿Qué ofrecemos?",
      "¿Por qué trabajar con nosotros?",
      "Propuesta del proyecto",
      "Objetivos del proyecto",
      "Ventajas de tener una web profesional",
      "Condiciones y tiempo de entrega",
      "Métodos de pago",
      "Resumen de costo totales",
    ],
    descriptionId: [
      {
        id: 1,
        title: "Haz que tu propuesta se vea seria, profesional y confiable.",
        content:
          "Esta plantilla de cotización web está diseñada para ofrecer una presentación completa, ordenada y persuasiva, ideal para captar clientes exigentes y cerrar proyectos con claridad. No solo cotiza, vende tu valor.",
      },
      {
        id: 2,
        title: "Esta plantilla incluye:",
        content: `• Descripción del Proyecto: Explica brevemente de qué trata el sitio web que se desea construir o rediseñar.

• ¿Qué Ofrecemos?: Lista clara de servicios incluidos (diseño, desarrollo, SEO, mantenimiento, etc.).

• ¿Por Qué Trabajar Con Nosotros?: Diferenciadores como experiencia, soporte, personalización o resultados previos.

• Propuesta del Proyecto: Alcance del trabajo, funcionalidades específicas y estructura del sitio.

• Objetivos del Proyecto: Lo que se espera lograr (atraer más clientes, mejorar presencia, automatizar procesos, etc.).

• Ventajas de Tener una Web Profesional: Beneficios a corto y largo plazo como visibilidad, confianza, escalabilidad.

• Condiciones y Tiempo de Entrega: Fechas estimadas, revisiones incluidas, entregables y soporte.

• Métodos de Pago: Anticipo requerido, formas de pago disponibles y condiciones finales.

• Resumen de Costos Totales: Monto detallado, impuestos (si aplica).`,
      },
      {
        id: 3,
        title: "Instrucciones de uso",
        content: `Debes comprar la plantilla para poder editarla, posterior asegúrate de haber iniciado sesión en Canva y crea una copia en tu cuenta.`,
      },
    ],
  },
];
