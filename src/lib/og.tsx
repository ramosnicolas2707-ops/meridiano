import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Imagen de Open Graph generada en tiempo de build con next/og.
 * Reproduce el sistema del sitio: fondo carbón, costura de brasa a la izquierda,
 * jerarquía tipográfica y el precio desde, cuando lo hay.
 */
export function renderOg({
  kicker,
  title,
  price,
}: {
  kicker: string;
  title: string;
  price?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0A0A0A",
          color: "#EDEAE3",
          padding: "72px",
        }}
      >
        {/* La costura. */}
        <div
          style={{
            width: "6px",
            backgroundColor: "#FF5C1A",
            marginRight: "48px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FF5C1A",
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 68,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                maxWidth: 900,
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, letterSpacing: "-0.01em" }}>
                {site.name}
              </div>
              <div style={{ fontSize: 22, color: "#8A8A85", marginTop: 8 }}>
                {`${site.address.city}, ${site.address.country} · Latinoamérica`}
              </div>
            </div>
            {price ? (
              <div style={{ fontSize: 30, color: "#FF5C1A" }}>{price}</div>
            ) : (
              <div style={{ fontSize: 22, color: "#8A8A85" }}>{site.domain}</div>
            )}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
