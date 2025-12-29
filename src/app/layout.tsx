import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "PLEIONES | Management de projets complexes",
    template: "%s | PLEIONES",
  },
  description:
    "PLEIONES est un cabinet de management de projets complexes, digitalisation, ERP et accompagnement aux certifications internationales PMP® et PMI-ACP® en Afrique.",
  keywords: [
    "management de projets",
    "projets complexes",
    "PMP",
    "PMI-ACP",
    "Agile",
    "Scrum",
    "ERP",
    "cabinet conseil Afrique",
  ],
  authors: [{ name: "Coach Serge N’GUE" }],
  creator: "PLEIONES",
  metadataBase: new URL("https://pleionesafrica.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* SEO international */}
        <link
          rel="alternate"
          href="https://pleionesafrica.com"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://pleionesafrica.com/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://pleionesafrica.com"
          hrefLang="x-default"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
