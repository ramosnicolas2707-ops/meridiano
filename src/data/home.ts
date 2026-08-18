/**
 * Contenido del home. La bifurcación del hero es lo primero y lo más importante.
 */

import type { Faq } from "./services";

export const hero = {
  kicker: "Estudio de desarrollo · Bogotá, Colombia",
  /** El h1 es literalmente la pregunta que el sitio resuelve. */
  h1: "¿Necesitas una página web o una tienda online?",
  sub: "Meridiano construye las dos. Elige por dónde empezar y verás alcance, tiempos y precio en la misma página.",
  scrollHint: "O sigue bajando para ver el resto",
};

/** Los dos caminos del hero. El orden importa: izquierda es el caso más simple. */
export const fork = [
  {
    side: "left" as const,
    eyebrow: "Quiero que me encuentren",
    title: "Una página web",
    detail: "Para mostrar lo que haces y recibir mensajes.",
    priceFrom: 450,
    href: "/servicios/paginas-web",
    cta: "Ver planes de páginas web",
  },
  {
    side: "right" as const,
    eyebrow: "Quiero vender en línea",
    title: "Una tienda online",
    detail: "Para cobrar con pasarela y manejar catálogo.",
    priceFrom: 1400,
    href: "/servicios/ecommerce",
    cta: "Ver planes de e-commerce",
  },
];

/** Cifras verificables. Ninguna se anima con contador: el número ya es el argumento. */
export const stats = [
  {
    value: "700+",
    label: "productos en un solo catálogo",
    detail:
      "Con variantes de talla, color y presentación, filtros combinables y buscador tolerante a errores de tipeo.",
  },
  {
    value: "4",
    label: "pasarelas de pago integradas",
    detail: "Wompi, Mercado Pago, PayU y Stripe, en producción y con transacciones reales.",
  },
  {
    value: "< 2 s",
    label: "de carga objetivo en 4G",
    detail:
      "Todo se entrega estático y desde CDN. El reporte de PageSpeed Insights va dentro de la entrega.",
  },
  {
    value: "0",
    label: "aplicaciones que descargar",
    detail:
      "El menú con realidad aumentada corre en el navegador del comensal. Escanea el QR y ve el plato en 3D sobre su mesa.",
  },
];

export const proof = {
  title: "Lo que ya está construido y funcionando",
  intro:
    "No hay forma elegante de decir esto: la solvencia técnica se demuestra con cosas que ya están en producción.",
};

export const servicesIntro = {
  kicker: "Qué hacemos",
  title: "Cuatro servicios. Precio visible en cada uno.",
  intro:
    "Cada página de servicio dice qué incluye, para quién es, cuánto cuesta y qué no está incluido. Sin cotizaciones sorpresa.",
};

export const arSection = {
  kicker: "El diferenciador",
  title: "El plato sale de la mesa",
  body: [
    "El comensal escanea el código QR, elige un plato y lo ve en 3D a tamaño real sobre su propia mesa. No descarga ninguna aplicación: funciona en el navegador, con WebXR en Android y Quick Look en iOS.",
    "Ningún estudio de la región lo está ofreciendo hoy. Nosotros lo cobramos desde 900 USD de implementación más 90 USD al mes.",
  ],
  cta: "Ver menús con realidad aumentada",
  href: "/servicios/software-restaurantes",
  /** Se muestran como pasos numerados sobre la escena en perspectiva. */
  steps: [
    { n: "01", text: "Escanea el QR de la mesa con la cámara" },
    { n: "02", text: "Se abre el menú en el navegador, sin instalar nada" },
    { n: "03", text: "Toca un plato y aparece en 3D sobre el mantel" },
  ],
};

/**
 * Proceso. Va en el sitio porque cada paso trae información contractual concreta
 * (anticipo, revisiones, quién entrega qué). Un proceso genérico de cuatro pasos
 * no aportaría nada y no estaría aquí.
 */
export const process = {
  kicker: "Cómo trabajamos",
  title: "El orden importa porque define quién debe qué, y cuándo",
  steps: [
    {
      n: "01",
      title: "Llamada de 30 minutos",
      body: "Revisamos qué necesitas y si Meridiano es el estudio correcto. Si no lo es, lo decimos ahí mismo.",
      you: "Traes: ejemplos de sitios que te gustan y los que no.",
    },
    {
      n: "02",
      title: "Propuesta cerrada y anticipo",
      body: "Recibes alcance, precio y fecha por escrito. El proyecto arranca cuando entra el 50% de anticipo.",
      you: "Pagas: 50% del total. El saldo va contra entrega.",
    },
    {
      n: "03",
      title: "Diseño y dos rondas de ajustes",
      body: "Te mostramos el diseño antes de programar nada. Tienes dos rondas de cambios incluidas; las siguientes se facturan a 30 USD la hora.",
      you: "Entregas: textos, fotos y logo en alta resolución.",
    },
    {
      n: "04",
      title: "Desarrollo y pruebas",
      body: "Programación, pruebas en celular real y transacciones de prueba en la pasarela si el proyecto las lleva.",
      you: "Revisas: un enlace de vista previa desde tu propio teléfono.",
    },
    {
      n: "05",
      title: "Publicación y capacitación",
      body: "Publicamos, configuramos dominio y analítica, y te entregamos el reporte de velocidad y la capacitación grabada.",
      you: "Recibes: accesos, código fuente y video de 30 minutos.",
    },
  ],
};

export const homeFaq: Faq[] = [
  {
    q: "¿Qué hace Meridiano exactamente?",
    a: "Meridiano es un estudio de desarrollo web con sede en Bogotá, Colombia, que construye cuatro cosas: páginas web a medida, tiendas online, menús digitales con realidad aumentada para restaurantes, y mantenimiento mensual de sitios ya publicados. Atiende clientes en toda Latinoamérica de forma remota.",
  },
  {
    q: "¿Necesito una página web o una tienda online?",
    a: "Si tu objetivo es que te encuentren y te escriban, necesitas una página web, desde 450 USD. Si vas a cobrar en línea, manejar catálogo y stock, necesitas una tienda online, desde 1.400 USD. Si vendes por WhatsApp y quieres probar primero, empieza por la página web.",
  },
  {
    q: "¿Cuánto cuesta trabajar con Meridiano?",
    a: "Los precios van desde 450 USD por una landing page hasta 3.500 USD por un e-commerce a medida. El menú digital para restaurantes cuesta 350 USD y el menú con realidad aumentada desde 900 USD. El mantenimiento mensual va de 35 a 150 USD. Todos los precios están publicados en el sitio, sin necesidad de pedir cotización.",
  },
  {
    q: "¿Cómo se paga un proyecto?",
    a: "Con 50% de anticipo para iniciar y 50% contra entrega, antes de publicar. Los precios están en dólares estadounidenses y se puede pagar en pesos colombianos a la TRM del día.",
  },
  {
    q: "¿Cuántas rondas de cambios incluye un proyecto?",
    a: "Dos rondas de revisión sobre el diseño entregado. Las rondas adicionales se facturan a 30 USD la hora, informadas antes de ejecutarlas.",
  },
  {
    q: "¿Meridiano trabaja con clientes fuera de Colombia?",
    a: "Sí. Meridiano trabaja de forma remota con negocios en México, Chile, Perú, Argentina, Ecuador, Costa Rica y Panamá. Las reuniones se hacen por videollamada y la facturación es en dólares.",
  },
  {
    q: "¿Con qué tecnología se construyen los sitios?",
    a: "Con Next.js y TypeScript, desplegados en Vercel con renderizado estático. No se usa WordPress ni constructores visuales, porque el objetivo es carga bajo 2 segundos y control total del código, que queda en manos del cliente.",
  },
  {
    q: "¿Quién es el dueño del código y del dominio?",
    a: "El cliente. El dominio y el hosting se compran a nombre del cliente con sus propios datos, y el código fuente se entrega al publicar. Meridiano no retiene accesos como forma de retención.",
  },
];

export const finalCta = {
  kicker: "Siguiente paso",
  title: "Cuéntanos qué necesitas construir",
  body: "Respondemos en menos de 24 horas hábiles con alcance, precio y fecha. Si tu proyecto no es para nosotros, te lo decimos en la primera llamada.",
  primary: "Escribir por WhatsApp",
  secondary: "Escribir un correo",
};
