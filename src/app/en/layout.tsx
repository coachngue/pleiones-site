import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "PLEIONES Africa – Complex Project Management & Certifications",
  description:
    "PLEIONES Africa supports organizations and professionals in complex project management, digital transformation, and PMI certifications (PMP®, PMI-ACP®).",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang="en" />
      {children}
      <Footer lang="en" />
    </>
  );
}
