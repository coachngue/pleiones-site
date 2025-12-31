import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "PLEIONES AFRICA | Management de projets complexes",
  description:
    "PLEIONES AFRICA est un cabinet de conseil spécialisé en management de projets complexes, gouvernance, transformation digitale, ERP et certifications internationales PMI (PMP®, PMI-ACP®).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        {/* Header global */}
        <Header />

        {/* Contenu des pages */}
        <main className="flex-grow">{children}</main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
