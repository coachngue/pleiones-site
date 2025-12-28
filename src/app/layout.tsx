import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "PLEIONES | Management de projets complexes – PMP® & PMI-ACP®",
    template: "%s | PLEIONES",
  },
  description:
    "PLEIONES est un cabinet de management de projets complexes, digitalisation et accompagnement aux certifications internationales PMP®, PMI-ACP®, Agile & Scrum en Afrique de l’Ouest.",
  keywords: [
    "management de projets complexes",
    "cabinet PMP",
    "PMI-ACP",
    "consultant projets IT Afrique",
    "PMO Afrique de l’Ouest",
    "ERP Afrique",
    "certification PMP Côte d’Ivoire",
    "Agile Scrum Afrique",
  ],
  authors: [{ name: "PLEIONES – Coach Serge N'GUE" }],
  creator: "PLEIONES",
  metadataBase: new URL("https://pleiones-site.vercel.app"),
  openGraph: {
    title: "PLEIONES – Management de projets complexes | PMP® & PMI-ACP®",
    description:
      "Cabinet spécialisé en projets complexes, transformation digitale, ERP et certifications PMP® & PMI-ACP® en Afrique.",
    url: "https://pleiones-site.vercel.app",
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
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
