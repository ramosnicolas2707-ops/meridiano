import { stats } from "@/data/home";
import { Reveal } from "./Reveal";

/**
 * Cifras de solvencia técnica.
 *
 * Sin contadores animados a propósito: el número ya es el argumento y animarlo
 * lo convierte en efecto. Se revelan y se quedan quietos.
 *
 * La lista es un <dl> real (término = qué se mide, definición = cuánto), con el
 * orden visual invertido por flexbox para que la cifra vaya arriba.
 */
export function Stats() {
  return (
    // La retícula se dibuja con bordes en cada celda, no con un fondo claro bajo
    // separadores: si el fondo fuera el que se ve por los huecos, aparecería un
    // bloque claro mientras las tarjetas todavía no se han revelado.
    <dl className="grid border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 0.07}
          className="flex h-full flex-col border-b border-r border-hairline bg-carbon p-7 lg:p-8"
        >
          <dt className="order-2 mt-4 text-sm font-medium text-tiza">
            {stat.label}
          </dt>
          <dd className="tnum order-1 font-display text-5xl leading-none text-brasa lg:text-6xl">
            {stat.value}
          </dd>
          <dd className="order-3 mt-3 text-sm leading-relaxed text-niebla">
            {stat.detail}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
