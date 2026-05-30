"use client";
import React from "react";

export default function OurEcoSystem({ children }) {
  return (
    <section className="w-full bg-white text-black py-32">
      {/* Rretícula global de 5 columnas */}
      <div 
        className="
          main-grid 
          w-full 
          gap-y-16 
          items-start

          {/* ELEMENTO 1 */}
          [&>*:nth-child(1)]:col-span-5
          md:[&>*:nth-child(1)]:col-span-2
          [&>*:nth-child(1)]:space-y-3

          {/* Etiquetas de título internas */}
          [&_strong]:font-dela
          [&_strong]:text-2xl
          md:[&_strong]:text-3xl
          [&_strong]:text-black
          [&_strong]:block
          [&_strong]:tracking-normal

          [&_span]:font-inter
          [&_span]:text-2xl
          [&_span]:text-black
          [&_span]:block

          {/* Texto de Integrantes */}
          [&>*:nth-child(2)]:col-span-5
          md:[&>*:nth-child(2)]:col-start-3
          md:[&>*:nth-child(2)]:col-span-3
          
          [&>*:nth-child(2)]:font-inter
          [&>*:nth-child(2)]:text-xl
          md:[&>*:nth-child(2)]:text-2xl
          [&>*:nth-child(2)]:leading-relaxed
          [&>*:nth-child(2)]:text-black

          {/* Logotipos */}
          [&>*:nth-child(n+3)]:col-span-5
          sm:[&>*:nth-child(n+3)]:col-span-2
          md:[&>*:nth-child(n+3)]:col-span-1
          [&>*:nth-child(n+3)]:flex
          [&>*:nth-child(n+3)]:justify-center
          [&>*:nth-child(n+3)]:items-center
          [&>*:nth-child(n+3)]:w-full

          md:[&>*:nth-child(3)]:mt-20

          {/* Size image controls */}
          [&>*:nth-child(n+3)_img]:h-[60px]
          [&>*:nth-child(n+3)_img]:w-full
          [&>*:nth-child(n+3)_img]:object-contain
        "
      >
        {children}
      </div>
    </section>
  );
}
