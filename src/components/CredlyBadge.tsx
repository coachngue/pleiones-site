"use client";

import { useEffect, useRef } from "react";

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

export default function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
}: CredlyBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = `
      <div
        data-iframe-width="${width}"
        data-iframe-height="${height}"
        data-share-badge-id="${badgeId}"
        data-share-badge-host="https://www.credly.com">
      </div>
    `;

    // Charger le script Credly UNE SEULE FOIS
    if (!document.getElementById("credly-script")) {
      const script = document.createElement("script");
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.id = "credly-script";
      document.body.appendChild(script);
    }
  }, [badgeId, width, height]);

  return <div ref={containerRef} />;
}
