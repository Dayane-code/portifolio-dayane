import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAYANE STUDIO | Desenvolvimento Web, IA & Automação",
  description:
    "Portfólio profissional de Dayane — desenvolvimento de sites, landing pages, inteligência artificial, automação de processos e identidade visual.",

  keywords: [
    "Dayane Studio",
    "Dayane",
    "desenvolvimento web",
    "criação de sites",
    "landing pages",
    "inteligência artificial",
    "automação",
    "automação de processos",
    "identidade visual",
    "portfólio",
  ],

  authors: [
    {
      name: "Dayane de Jesus",
    },
  ],

  creator: "Dayane de Jesus",

  openGraph: {
    title: "DAYANE STUDIO | Desenvolvimento Web, IA & Automação",
    description:
      "Desenvolvimento web, inteligência artificial, automação e soluções digitais.",
    type: "website",
    locale: "pt_BR",
    siteName: "DAYANE STUDIO",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}