import { IProjects } from "@/interface/projects";
import PROJECT1 from "@/public/projects/project1.webp";
import PROJECT2 from "@/public/projects/project2.webp";
import PROJECT3 from "@/public/projects/project3.webp";
import PROJECT4 from "@/public/projects/project4.webp";

import ARQ from "@/public/details-project/ARQ.webp";
import ROPA from "@/public/details-project/ROPA.webp";
import UDEMY from "@/public/details-project/UDEMY.webp";
import DENTISTA from "@/public/details-project/DENTISTA.webp";
import { TCategorie } from "./types";

export const PROJECTS: IProjects[] = [
  {
    id: 1,
    project: "Sitio web de arquitectura",
    img: PROJECT1,
    detailsImg: ARQ,
    categories: ["Diseño UI/UX", "Desarrollo web"],
    chip: [
      { id: 1, title: "Diseño UI/UX" },
      { id: 2, title: "Desarrollo web" },
    ],
    description: [
      {
        id: 1,
        title: "Cliente",
        content:
          "Un estudio de arquitectura especializado en el diseño y construcción de casas modernas, personalizadas y sostenibles, enfocado en ofrecer soluciones habitacionales funcionales, estéticas y en armonía con el entorno.",
      },
      {
        id: 2,
        title: "Descripción del proyecto",
        content:
          "El cliente buscaba una presencia digital elegante y contemporánea que reflejara su enfoque innovador en el diseño arquitectónico de viviendas. El objetivo principal era desarrollar un sitio web visualmente impactante que transmitiera creatividad, precisión y sustentabilidad, utilizando una estética minimalista, paleta neutra y elementos interactivos como animaciones sutiles y desplazamiento con paralaje.",
      },
      {
        id: 3,
        title: "Desafios del diseño",
        content: `Transmisión de confianza y creatividad: Crear una identidad visual que proyectara profesionalismo, a la vez que destacara el estilo único y visionario del estudio.

Exposición de proyectos arquitectónicos: Diseñar una galería que permita apreciar en detalle cada proyecto, destacando planos, renders y fotografías de obras terminadas.

Navegación intuitiva: Garantizar una estructura clara para explorar servicios, procesos de diseño y proyectos destacados, sin saturar visualmente al visitante.

Diseño responsivo: Adaptar la experiencia para que sea impecable en dispositivos móviles, tabletas y escritorios, permitiendo que los usuarios exploren planos y galerías desde cualquier lugar.

Optimización visual y de rendimiento: Equilibrar el impacto visual con tiempos de carga rápidos y buenas prácticas SEO para atraer a clientes potenciales en su región.`,
      },
      {
        id: 4,
        title: "Solución del diseño",
        content: `Nuestro equipo diseñó y desarrolló un sitio web arquitectónico moderno, limpio y optimizado, con las siguientes características clave:

Estética minimalista con tonos tierra y neutros: La paleta refleja materiales naturales como piedra, concreto y madera, evocando sofisticación y conexión con el entorno.

Animaciones suaves y paralaje: Interacciones sutiles y desplazamientos con profundidad realzan la experiencia sin distraer del contenido visual.

Galería dinámica de proyectos: Un portafolio visualmente impactante que permite filtrar por tipo de proyecto, visualizar detalles técnicos y explorar imágenes en alta calidad.

Arquitectura de información clara: Navegación fluida con CTAs visibles para contactar al estudio, agendar consultas o descargar portafolios.

SEO y velocidad optimizados: Estructura optimizada para buscadores, tiempos de carga rápidos y metadatos bien configurados para maximizar la visibilidad en su mercado objetivo.`,
      },
      {
        id: 5,
        title: "Resultados",
        content: `Presencia digital profesional que transmite el estilo y la filosofía del estudio desde el primer vistazo.

Mayor interacción de los usuarios, con navegación prolongada por los proyectos y menor tasa de rebote.

Aumento en solicitudes de contacto y consultas gracias a CTAs claros y una navegación centrada en el usuario.

Mejor posicionamiento en buscadores locales, atrayendo clientes interesados en diseño residencial de alta calidad.`,
      },
    ],
  },
  {
    id: 2,
    project: "E-commerce de ropa",
    img: PROJECT2,
    detailsImg: ROPA,
    categories: ["Diseño UI/UX", "Desarrollo web"],
    chip: [
      { id: 1, title: "Diseño UI/UX" },
      { id: 2, title: "Desarrollo web" },
    ],
    description: [
      {
        id: 1,
        title: "Cliente",
        content:
          "Una tienda de ropa online especializada en ofrecer una amplia variedad de prendas de alta calidad y diseños modernos, dirigida a un público joven y consciente de las tendencias actuales de moda.",
      },
      {
        id: 2,
        title: "Descripción del proyecto",
        content:
          "El cliente necesitaba desarrollar un sitio web atractivo, fácil de usar y optimizado para la venta en línea. El objetivo principal era crear una plataforma de e-commerce que permita a los usuarios navegar, seleccionar y comprar ropa con una experiencia fluida y agradable, además de ofrecer una presentación visual que destaque por su estilo y calidad.",
      },
      {
        id: 3,
        title: "Desafíos del diseño",
        content: `Experiencia de compra intuitiva: Crear una navegación sencilla y eficiente para que los usuarios puedan filtrar y seleccionar productos por categorías, tallas y colores de manera rápida y sin confusión.
    
    Optimización para dispositivos móviles: Asegurar que la plataforma sea completamente responsiva, permitiendo a los usuarios realizar compras cómodamente desde teléfonos y tabletas.
    
    Presentación visual atractiva: Mostrar cada prenda con imágenes de alta calidad y descripciones detalladas, manteniendo un equilibrio entre diseño atractivo y funcionalidad.
    
    Carrito de compras eficiente: Implementar un sistema de carrito de compras y checkout rápido, con opciones de pago seguras y facilidad para modificar pedidos antes de finalizar la compra.
    
    Optimización de rendimiento y SEO: Garantizar tiempos de carga rápidos y mejorar la visibilidad en motores de búsqueda para atraer a más clientes potenciales y mejorar el ranking en el mercado competitivo.`,
      },
      {
        id: 4,
        title: "Solución del diseño",
        content: `Desarrollamos un sitio web de e-commerce elegante y funcional con las siguientes características clave:
    
    Diseño minimalista y moderno: Usamos una paleta de colores limpia y moderna para resaltar los productos, con una tipografía legible y una disposición intuitiva.
    
    Filtros de productos avanzados: Los usuarios pueden filtrar productos por categoría, talla, color, precio y tendencias para encontrar rápidamente lo que buscan.
    
    Galería de productos de alta calidad: Cada prenda se presenta con imágenes de alta resolución y una descripción detallada, destacando sus características, materiales y estilo.
    
    Proceso de compra fluido: Un sistema de carrito de compras simple y un proceso de pago optimizado con múltiples opciones de pago y seguridad.
    
    Responsive design: La tienda se adapta perfectamente a todos los dispositivos, desde ordenadores hasta smartphones, garantizando una experiencia de compra sin interrupciones.
    
    SEO y rendimiento optimizados: La estructura del sitio está diseñada para mejorar el SEO, asegurando tiempos de carga rápidos y un fácil acceso a productos populares.`,
      },
      {
        id: 5,
        title: "Resultados",
        content: `Incremento en las ventas, con una tasa de conversión mejorada gracias a la experiencia de compra optimizada y la facilidad para navegar por los productos.
    
    Reducción en la tasa de abandono del carrito, facilitando el proceso de compra mediante un flujo simple y seguro.
    
    Aumento en la satisfacción del cliente, con un tiempo de permanencia más largo en el sitio y mayor interacción en las páginas de productos.
    
    Mayor visibilidad en motores de búsqueda, resultando en un incremento de tráfico orgánico y mayor adquisición de clientes potenciales.`,
      },
    ],
  },
  {
    id: 3,
    project: "Clon de Udemy",
    img: PROJECT3,
    detailsImg: UDEMY,
    categories: ["Diseño UI/UX", "Desarrollo web"],
    chip: [
      { id: 1, title: "Diseño UI/UX" },
      { id: 2, title: "Desarrollo web" },
    ],
    description: [
      {
        id: 1,
        title: "Cliente",
        content:
          "Una startup tecnológica enfocada en la educación digital, cuyo objetivo es democratizar el acceso al conocimiento mediante una plataforma intuitiva, accesible y de alta calidad que permita a expertos crear y vender cursos online en múltiples categorías.",
      },
      {
        id: 2,
        title: "Descripción del proyecto",
        content:
          "El cliente necesitaba desarrollar un sitio web robusto que funcionara como una plataforma de e-learning estilo Udemy. El objetivo era ofrecer una experiencia de usuario envolvente tanto para estudiantes como para instructores, con una interfaz amigable, herramientas de enseñanza efectivas y funcionalidades de e-commerce integradas.",
      },
      {
        id: 3,
        title: "Desafíos del diseño",
        content: `Experiencia dual (instructor/estudiante): Diseñar flujos diferenciados pero coherentes para los dos tipos de usuarios, permitiendo que cada uno cumpla sus objetivos sin fricción.
    
    Gestión compleja de contenido: Crear una interfaz clara para navegar entre miles de cursos, categorías, niveles y formatos sin generar sobrecarga cognitiva.
    
    Reproducción de video y seguimiento: Desarrollar una experiencia audiovisual de alta calidad, con seguimiento del progreso, marcadores y subtítulos.
    
    E-commerce educativo: Integrar carrito de compra, métodos de pago seguros, descuentos y validación de cupones sin comprometer la velocidad.
    
    Accesibilidad y rendimiento: Garantizar tiempos de carga bajos, diseño responsive y cumplimiento de buenas prácticas de accesibilidad web.`,
      },
      {
        id: 4,
        title: "Solución del diseño",
        content: `Diseñamos una plataforma de e-learning intuitiva y potente con funcionalidades clave para facilitar la enseñanza, el aprendizaje y la monetización del conocimiento:
    
    UI moderna y accesible: Interfaz clara con uso estratégico de colores, iconografía intuitiva y tipografías legibles para facilitar la navegación en todo tipo de dispositivos.
    
    Buscador avanzado y filtros dinámicos: Sistema de búsqueda robusto con filtros por nivel, duración, precio, idioma, puntuación y categoría.
    
    Reproductor de video integrado: Video player personalizado con opciones de velocidad, marcadores, modo noche, subtítulos y pantalla completa.
    
    Panel de instructor: Dashboard para crear, estructurar y gestionar cursos con editor de lecciones, estadísticas de rendimiento y sistema de preguntas y respuestas.
    
    Sistema de reseñas y valoraciones: Estudiantes pueden puntuar cursos y dejar comentarios visibles para otros usuarios, aumentando la confianza y la conversión.
    
    Proceso de compra optimizado: Checkout rápido, múltiples métodos de pago y sección de “Mi aprendizaje” para acceder a cursos adquiridos con seguimiento del progreso.`,
      },
      {
        id: 5,
        title: "Resultados",
        content: `Lanzamiento exitoso de la plataforma con más de 100 cursos activos durante los primeros 3 meses.
    
    Aumento constante en la captación de usuarios, gracias a una navegación fluida, experiencia visual atractiva y buena visibilidad orgánica.
    
    Elevado tiempo de permanencia por sesión, impulsado por el diseño del reproductor, recomendaciones personalizadas y acceso rápido a contenidos comprados.
    
    Feedback positivo de instructores, destacando la facilidad para subir y gestionar sus cursos sin conocimientos técnicos.`,
      },
    ],
  },
  {
    id: 4,
    project: "Sitio web de Dentista",
    img: PROJECT4,
    detailsImg: DENTISTA,
    categories: ["Diseño UI/UX"],
    chip: [{ id: 1, title: "Diseño UI/UX" }],
    description: [
      {
        id: 1,
        title: "Cliente",
        content:
          "Una clínica dental moderna que ofrece servicios odontológicos integrales, enfocados en la prevención, el diagnóstico y el tratamiento de problemas bucales. Su misión es brindar atención profesional y cercana, utilizando tecnología de punta para garantizar la salud y estética dental de sus pacientes.",
      },
      {
        id: 2,
        title: "Descripción del proyecto",
        content:
          "La clínica necesitaba una página web clara, profesional y accesible, que reflejara la confianza y calidad de sus servicios. El objetivo principal era facilitar la reserva de citas, ofrecer información detallada sobre los tratamientos y generar cercanía con los pacientes mediante un diseño moderno y humanizado.",
      },
      {
        id: 3,
        title: "Desafíos del diseño",
        content: `Accesibilidad y navegación intuitiva: Organizar la información de manera clara para que los usuarios encuentren fácilmente los tratamientos, el equipo médico y los métodos de contacto.
        
        Sistema de citas online: Implementar una herramienta fácil de usar que permita agendar citas desde cualquier dispositivo, reduciendo la dependencia de llamadas telefónicas.
        
        Diseño que inspire confianza: Crear un entorno visual limpio y profesional, transmitiendo seguridad, experiencia y cercanía al usuario.
        
        Optimización para móviles: Asegurar una experiencia fluida y rápida desde smartphones, dado que una gran parte de los usuarios accede desde dispositivos móviles.
        
        Informar sin saturar: Presentar los servicios y tratamientos con un equilibrio entre detalle médico y lenguaje claro para el público general.`,
      },
      {
        id: 4,
        title: "Solución del diseño",
        content: `Desarrollamos un sitio web moderno, funcional y orientado al paciente, con las siguientes características clave:
        
        Interfaz clara y profesional: Utilizamos una paleta de colores suaves y elementos visuales que transmiten limpieza, salud y confianza.
        
        Reservas online integradas: Añadimos un sistema de citas intuitivo, permitiendo seleccionar tipo de tratamiento, profesional y horario con unos pocos clics.
        
        Páginas de tratamiento informativas: Cada servicio cuenta con una página dedicada que explica el procedimiento, beneficios y cuidados, con imágenes ilustrativas.
        
        Responsive design: El sitio se adapta perfectamente a todos los dispositivos, garantizando que los pacientes puedan agendar o informarse en cualquier momento.
        
        Optimización SEO y rendimiento: El sitio está estructurado para ser fácilmente indexado por buscadores, con tiempos de carga rápidos y jerarquía de contenidos clara.`,
      },
      {
        id: 5,
        title: "Resultados",
        content: `Aumento significativo en el número de citas reservadas online, reduciendo la carga de trabajo del personal administrativo.
        
        Mejor experiencia del usuario, reflejada en una mayor duración de la visita al sitio y menor tasa de rebote.
        
        Incremento en la confianza del paciente gracias a una presentación profesional y accesible de los servicios.
        
        Mayor visibilidad local en buscadores, atrayendo nuevos pacientes mediante búsquedas relacionadas con tratamientos dentales.`,
      },
    ],
  },
];

export const CATEGORIES: TCategorie = [
  "Todo",
  "Diseño UI/UX",
  "Desarrollo web",
];
