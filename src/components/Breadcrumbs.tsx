import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * Migas de pan visibles. El mismo array alimenta el JSON-LD de BreadcrumbList,
 * así que lo que ve la persona y lo que lee el buscador nunca se desincronizan.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Ruta de navegación">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-niebla">
        {items.map((item, i) => {
          const ultimo = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {ultimo ? (
                <span aria-current="page" className="text-tiza">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="enlace-costura text-niebla hover:text-tiza">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-brasa">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
