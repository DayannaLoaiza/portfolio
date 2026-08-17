import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import {
  getPersonSchema,
  getProjectsSchema,
  getWebSiteSchema,
} from "@/lib/structured-data";
import "@/styles/reset.css";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/utilities.css";
import "@/styles/animations.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lindaloaiza.com"),
  // 59 caracteres: por encima de ~60 Google recorta el titulo en resultados.
  // "Developer" y "Tech Lead" se recuperan en la description y en el JSON-LD.
  title: {
    default: "Linda Dayanna Loaiza | Software Engineer · Full Stack · BIM",
    template: "%s | Linda Dayanna Loaiza",
  },
  description:
    "Software Engineer y Full Stack Developer. Construyo plataformas web para construcción (BIM · Autodesk APS), logística de última milla y banca. Remoto.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Tech Lead",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "BIM",
    "Autodesk Platform Services",
    "Forge Viewer",
    "AEC",
    "software para construcción",
    "Bogotá",
    "Colombia",
    "Remote Developer",
    "Desarrolladora Full Stack",
  ],
  authors: [{ name: "Linda Dayanna Loaiza" }],
  creator: "Linda Dayanna Loaiza",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://lindaloaiza.com",
    siteName: "Linda Dayanna Loaiza — Portfolio",
    title: "Linda Dayanna Loaiza | Software Engineer · Full Stack · BIM",
    description:
      "Software Engineer y Full Stack Developer. Plataformas web para construcción (BIM · Autodesk APS), logística de última milla y banca.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linda Dayanna Loaiza — Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linda Dayanna Loaiza | Software Engineer · Full Stack · BIM",
    description:
      "Software Engineer y Full Stack Developer. Construcción (BIM · Autodesk APS), logística y banca.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://lindaloaiza.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              getPersonSchema(),
              getWebSiteSchema(),
              getProjectsSchema(),
            ]),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="u-skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
