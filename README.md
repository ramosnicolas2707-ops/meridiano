# Meridiano

Sitio de **Meridiano**, estudio de desarrollo web y software con sede en Bogotá, Colombia, que atiende clientes en Latinoamérica.

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · 100% estático (SSG).

---

## Arrancar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

Otros comandos:

```bash
npm run build      # compila y prerenderiza las 19 rutas
npm run start      # sirve el build de producción
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

Requiere Node 18.18 o superior (probado con Node 24). La primera compilación descarga las fuentes Fraunces y Archivo desde Google Fonts y las deja dentro del build: en tiempo de ejecución el sitio no hace ninguna petición a dominios externos.

---

## Editar contenido y precios

**Todos los textos, precios, planes y preguntas frecuentes están en `/src/data`.** No hay ningún precio escrito dentro de un componente. Para cambiar el sitio no hace falta tocar JSX.

| Archivo | Qué contiene |
|---|---|
| `src/data/site.ts` | Nombre, dominio, correo, WhatsApp, ciudad, países atendidos, redes y condiciones comerciales (anticipo, revisiones, moneda). |
| `src/data/services.ts` | Los cuatro servicios completos: `h1`, resumen, planes con precio, qué incluye, qué **no** incluye, para quién es, FAQ y metadatos. |
| `src/data/home.ts` | Hero y bifurcación, cifras de solvencia, sección de realidad aumentada, proceso de trabajo, FAQ del home y CTA final. |
| `src/data/projects.ts` | Casos del portafolio. |

### Cambiar un precio

Edita el plan en `src/data/services.ts`. El nuevo importe aparece automáticamente en la tarjeta del plan, en la tabla de precios, en la tarjeta del home, en el JSON-LD de `Service`/`Offer` y en la imagen de Open Graph.

**Recuerda actualizar también `public/llms.txt` a mano**: es un archivo de texto plano y no se genera desde los datos.

### Añadir un servicio

1. Añade una entrada al array `services` de `src/data/services.ts`.
2. Crea `src/app/servicios/<slug>/page.tsx` y `opengraph-image.tsx` copiando cualquiera de los existentes y cambiando el slug.
3. Añádelo a `nav` en `src/data/site.ts`.

El `sitemap.xml` lo recoge solo, porque se genera desde `serviceSlugs`.

### Antes de publicar: reemplazar los marcadores de posición

- `site.url`, `site.domain`, correo y número de WhatsApp en `src/data/site.ts`.
- Las URLs de redes sociales (alimentan `sameAs` del JSON-LD).
- Las imágenes de `public/proyectos/*.png` son marcadores generados: son degradados abstractos, no capturas reales. Sustitúyelas por capturas de verdad **y actualiza el `alt` correspondiente en `src/data/projects.ts`** — el alt debe describir la imagen real.
- Los casos del portafolio están anonimizados a la espera de autorización de cada cliente.

---

## Despliegue en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel: **Add New → Project → Import**. Vercel detecta Next.js sin configuración.
3. Framework preset: Next.js. Build command `next build`. Output: por defecto.
4. No hacen falta variables de entorno: el sitio no consume ninguna API.
5. Deploy.

### Dominio

En **Settings → Domains** agrega el dominio y sigue las instrucciones de DNS. Después actualiza `site.url` en `src/data/site.ts` y vuelve a desplegar: de ahí salen las URLs canónicas, el `sitemap.xml`, el `robots.txt` y las URLs absolutas del JSON-LD.

### Despliegue en otro proveedor

El sitio es completamente estático. Con `output: "export"` en `next.config.ts` puedes generar HTML plano para cualquier hosting, pero perderías la optimización de imágenes de `next/image` (habría que añadir `images.unoptimized: true`). En Vercel no hace falta.

---

## Qué trae de SEO

- Metadata API en cada página, con `title` y `description` escritos a mano, distintos en cada ruta.
- URLs canónicas en todas las páginas.
- Open Graph y Twitter Cards con imagen generada en build por `next/og` (`opengraph-image.tsx` por ruta).
- `sitemap.ts` y `robots.ts` generados por código.
- JSON-LD: `Organization` + `LocalBusiness` + `ProfessionalService` y `WebSite` en el layout raíz; `Service` con `AggregateOffer` y precio en cada página de servicio; `FAQPage` donde hay preguntas frecuentes; `BreadcrumbList` en las páginas internas.
- Un solo `<h1>` por página y jerarquía de encabezados sin saltos.
- Imágenes con `next/image`, servidas en AVIF con respaldo WebP.
- Fuentes autoalojadas con `next/font`, sin peticiones externas bloqueantes.

### Visibilidad en buscadores con IA

- `public/llms.txt` con el resumen del negocio, los servicios y todos los precios en texto plano.
- `robots.txt` permite explícitamente GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot y meta-externalagent.
- Precios y alcances en `<table>` semánticas reales, con `caption`, `th` y `scope`.
- Preguntas frecuentes en acordeón `<details>` nativo: el texto de las respuestas está siempre en el HTML, abierto o cerrado.
- Cada respuesta está redactada para leerse fuera de contexto, con sujeto y cifra dentro de la propia frase.

---

## Accesibilidad y rendimiento

- Contraste AA sobre fondo negro en todos los tonos de la paleta (el más ajustado es `--niebla` sobre `--humo`, a 4.9:1).
- Foco de teclado visible en todos los elementos interactivos, con contorno de 2 px en color acento.
- `prefers-reduced-motion` respetado: se apaga el movimiento, nunca el contenido. Los elementos revelados por scroll se renderizan visibles y quietos.
- Enlace «Saltar al contenido» al inicio del `body`.
- Layout responsive verificado hasta 375 px.
- Todas las rutas se prerenderizan estáticas; no hay JavaScript bloqueante en el primer render.

---

## Estructura

```
src/
├── app/
│   ├── layout.tsx            fuentes, metadatos base, JSON-LD de organización
│   ├── page.tsx              home
│   ├── globals.css           paleta, tipografía y utilidades (empieza con la justificación del sistema)
│   ├── sitemap.ts / robots.ts
│   ├── opengraph-image.tsx
│   ├── servicios/<slug>/     cuatro páginas de servicio
│   ├── proyectos/ contacto/ not-found.tsx
├── components/               UI; ver HeroFork.tsx y ScrollSeam.tsx para el elemento de firma
├── data/                     todo el contenido editable
└── lib/                      helpers de metadatos, JSON-LD, formato de precio y OG
```

### El elemento de firma: la costura

El hero es una sola pregunta a pantalla completa partida en dos por una línea de brasa (`src/components/HeroFork.tsx`). Al acercar el cursor a un lado, ese lado crece y el otro cede. Al salir del hero la línea se desvanece justo mientras la barra de progreso (`src/components/ScrollSeam.tsx`) entra desde la misma posición y se va al margen izquierdo, donde acompaña el resto del scroll. La misma línea reaparece como filete izquierdo de cada encabezado de sección (`.costura-filete`) y como regla de las tablas de precios.
