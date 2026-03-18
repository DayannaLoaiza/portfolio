import { Button } from "@/components/atoms/Button/Button";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "var(--color-accent)" }}>404</h1>
      <p style={{ color: "var(--color-text-muted)" }}>
        Página no encontrada
      </p>
      <Button href="/">← Volver al inicio</Button>
    </main>
  );
}
