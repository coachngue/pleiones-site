import { ReactNode } from "react";

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en" className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
