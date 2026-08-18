/**
 * Formato de precios en convención latinoamericana: punto como separador de miles.
 * $1.100, no $1,100. Todos los importes del sitio pasan por aquí.
 */
export const usd = (amount: number) => `$${amount.toLocaleString("es-CO")}`;

/** Sufijo legible del ciclo de cobro. */
export const billingLabel = (billing: "unico" | "mes") =>
  billing === "mes" ? "/mes" : "";

/** Texto accesible del precio, para lectores de pantalla y para el atributo title. */
export const priceAria = (amount: number, billing: "unico" | "mes") =>
  billing === "mes"
    ? `${amount} dólares al mes`
    : `${amount} dólares, pago único`;
