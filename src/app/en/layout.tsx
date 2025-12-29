import type { ReactNode } from "react";

export const metadata = {
  title: "PLEIONES – Project Management & Agile Expertise in Africa",
  description:
    "PLEIONES supports organizations and professionals in complex project management, digital transformation, and PMI certifications across Africa.",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
