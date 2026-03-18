import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { getPersonSchema, getWebSiteSchema } from "@/lib/structured-data";
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
  title: {
    default: "Linda Loaiza | Full Stack Developer & Tech Lead",
    template: "%s | Linda Loaiza",
  },
  description:
    "Full Stack Developer & Tech Lead desde Bogotá, Colombia. Especializada en React, Next.js, Node.js, TypeScript y arquitectura cloud. Disponible para trabajo remoto.",
  keywords: [
    "Full Stack Developer",
    "Tech Lead",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Bogotá",
    "Colombia",
    "Remote Developer",
    "Desarrolladora Full Stack",
  ],
  authors: [{ name: "Linda Loaiza" }],
  creator: "Linda Loaiza",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://lindaloaiza.com",
    siteName: "Linda Loaiza — Portfolio",
    title: "Linda Loaiza | Full Stack Developer & Tech Lead",
    description:
      "Full Stack Developer & Tech Lead desde Bogotá, Colombia. Especializada en React, Next.js, Node.js y arquitectura cloud.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linda Loaiza — Full Stack Developer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linda Loaiza | Full Stack Developer & Tech Lead",
    description:
      "Full Stack Developer & Tech Lead desde Bogotá, Colombia.",
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
            __html: JSON.stringify([getPersonSchema(), getWebSiteSchema()]),
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
