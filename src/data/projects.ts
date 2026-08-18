/**
 * Portafolio.
 *
 * IMPORTANTE: los casos están anonimizados a propósito hasta tener autorización
 * escrita de cada cliente. Al reemplazarlos por casos reales, cambia también
 * `image` y `alt` a la vez: el alt debe describir la captura real, no el proyecto.
 * Las imágenes en /public/proyectos son marcadores de posición.
 */

export type Project = {
  slug: string;
  /** Nombre del cliente o descripción anonimizada. */
  name: string;
  sector: string;
  city: string;
  year: number;
  /** Slug del servicio al que pertenece. */
  service: string;
  serviceLabel: string;
  /** Una frase autocontenida sobre qué se construyó. */
  summary: string;
  challenge: string;
  outcome: string;
  /** Cifras del proyecto. Se muestran como lista de definiciones. */
  metrics: { label: string; value: string }[];
  stack: string[];
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "perfumeria-catalogo-700",
    name: "Perfumería con catálogo de más de 700 referencias",
    sector: "Perfumería y cosmética",
    city: "Bogotá, Colombia",
    year: 2025,
    service: "ecommerce",
    serviceLabel: "E-commerce",
    summary:
      "Tienda online con más de 700 referencias de perfumería, con variantes de presentación y filtros combinables por marca, familia olfativa y tamaño.",
    challenge:
      "El catálogo anterior tardaba más de 8 segundos en mostrar una categoría y el buscador no encontraba nada si el cliente escribía mal el nombre de la marca.",
    outcome:
      "Catálogo estático con filtros que responden sin recargar la página y buscador tolerante a errores de tipeo. La categoría más pesada del sitio pasó a cargar en menos de 2 segundos.",
    metrics: [
      { label: "Referencias en catálogo", value: "700+" },
      { label: "Carga de categoría", value: "< 2 s" },
      { label: "Pasarela integrada", value: "Wompi" },
    ],
    stack: ["Next.js", "TypeScript", "Wompi", "Vercel"],
    image: "/proyectos/perfumeria.png",
    alt: "Captura de la página de categoría de la tienda de perfumería, con la retícula de productos y el panel de filtros por marca y familia olfativa.",
  },
  {
    slug: "moda-variantes-whatsapp",
    name: "Marca de ropa con cierre de pedido por WhatsApp",
    sector: "Moda",
    city: "Medellín, Colombia",
    year: 2025,
    service: "ecommerce",
    serviceLabel: "E-commerce",
    summary:
      "Tienda online con variantes de talla y color e inventario por variante, donde el comprador puede pagar con pasarela o cerrar el pedido por WhatsApp con el carrito ya armado.",
    challenge:
      "La mayoría de las ventas se cerraban por WhatsApp, pero el equipo tenía que reescribir a mano cada pedido y se perdían tallas.",
    outcome:
      "El botón de WhatsApp arma el mensaje con productos, tallas, colores y total. El equipo dejó de transcribir pedidos.",
    metrics: [
      { label: "Variantes gestionadas", value: "1.200+" },
      { label: "Cierre de pedido", value: "Pasarela y WhatsApp" },
      { label: "Tiempo de entrega", value: "6 semanas" },
    ],
    stack: ["Next.js", "TypeScript", "Mercado Pago", "WhatsApp Business"],
    image: "/proyectos/moda.png",
    alt: "Captura de la ficha de producto de la marca de ropa, con el selector de talla y color y el botón de cierre por WhatsApp.",
  },
  {
    slug: "restaurante-menu-ar",
    name: "Restaurante de cortes con menú en realidad aumentada",
    sector: "Restaurantes",
    city: "Bogotá, Colombia",
    year: 2025,
    service: "software-restaurantes",
    serviceLabel: "Software para restaurantes",
    summary:
      "Menú con realidad aumentada de 15 platos modelados en 3D, que el comensal ve a escala real sobre su mesa desde el navegador, sin instalar ninguna aplicación.",
    challenge:
      "Los clientes pedían mal el tamaño de las porciones y devolvían platos. La carta impresa se reimprimía cada vez que subía un precio.",
    outcome:
      "El comensal escanea el QR y ve el corte en 3D sobre el mantel antes de pedir. Los precios se cambian desde el panel y se ven al instante en todas las mesas.",
    metrics: [
      { label: "Platos modelados en 3D", value: "15" },
      { label: "Apps a descargar", value: "0" },
      { label: "Sistemas", value: "iOS y Android" },
    ],
    stack: ["Next.js", "WebXR", "USDZ / GLB", "Quick Look"],
    image: "/proyectos/restaurante.png",
    alt: "Captura del menú con realidad aumentada mostrando un corte de carne en 3D sobre la mesa del comensal, visto desde la cámara del celular.",
  },
  {
    slug: "arquitectura-sitio-corporativo",
    name: "Estudio de arquitectura con sitio corporativo y blog",
    sector: "Arquitectura",
    city: "Ciudad de México, México",
    year: 2024,
    service: "paginas-web",
    serviceLabel: "Páginas web",
    summary:
      "Sitio corporativo de seis páginas con blog editable y fichas de proyecto, construido con renderizado estático y datos estructurados de organización.",
    challenge:
      "El sitio anterior era una galería en la que las fotos pesaban 6 MB cada una y ninguna página tenía título propio en Google.",
    outcome:
      "Imágenes servidas en AVIF con tamaños por dispositivo, títulos y descripciones escritos a mano página por página, y un blog que el equipo publica sin ayuda.",
    metrics: [
      { label: "Páginas", value: "6 + blog" },
      { label: "Peso medio de imagen", value: "< 200 kB" },
      { label: "Tiempo de entrega", value: "5 semanas" },
    ],
    stack: ["Next.js", "TypeScript", "next/image", "Vercel"],
    image: "/proyectos/arquitectura.png",
    alt: "Captura de la portada del sitio del estudio de arquitectura, con la retícula de proyectos y el encabezado tipográfico.",
  },
  {
    slug: "distribuidora-landing-mantenimiento",
    name: "Distribuidora industrial con landing y mantenimiento mensual",
    sector: "Distribución industrial",
    city: "Cali, Colombia",
    year: 2024,
    service: "mantenimiento",
    serviceLabel: "Mantenimiento",
    summary:
      "Landing page de cinco secciones con formulario y WhatsApp, más plan de mantenimiento mensual con hosting, copias de seguridad y horas de cambios incluidas.",
    challenge:
      "La empresa cambiaba precios de lista cada mes y no tenía a quién pedirle el ajuste. El sitio quedaba desactualizado durante semanas.",
    outcome:
      "Los cambios se piden por WhatsApp y quedan hechos el mismo día dentro de las horas del plan. El monitoreo avisa antes que el cliente si algo se cae.",
    metrics: [
      { label: "Plan contratado", value: "Activo" },
      { label: "Tiempo de respuesta", value: "< 24 h" },
      { label: "Monitoreo", value: "cada 5 min" },
    ],
    stack: ["Next.js", "Vercel", "Monitoreo de disponibilidad"],
    image: "/proyectos/distribuidora.png",
    alt: "Captura de la landing page de la distribuidora industrial, con la sección de categorías de producto y el formulario de contacto.",
  },
];
