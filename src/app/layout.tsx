import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "PLEIONES | Management de projets complexes • Agile • ERP • PMP",
  description:
    "PLEIONES est un cabinet de conseil en management de projets complexes, transformation digitale, ERP et accompagnement aux certifications PMI (PMP®, PMI-ACP®, Agile & Scrum) en Côte d’Ivoire et en Afrique de l’Ouest.",
  keywords: [
    "management de projets",
    "projets complexes",
    "PMP Côte d’Ivoire",
    "PMI-ACP",
    "Agile Scrum Afrique",
    "ERP Afrique",
    "cabinet de conseil IT",
    "transformation digitale",
    "PMO Afrique",
    "PLEIONES",
  ],
  authors: [{ name: "Coach Serge N'GUE" }],
  creator: "PLEIONES",
  metadataBase: new URL("https://pleiones-site.vercel.app"),
  openGraph: {
    title: "PLEIONES | Management de projets complexes",
    description:
      "Cabinet de conseil en management de projets complexes, Agile, ERP et certifications PMI en Afrique.",
    siteName: "PLEIONES",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-50 text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
