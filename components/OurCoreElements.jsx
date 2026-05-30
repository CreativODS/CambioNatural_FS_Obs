"use client";
import React from "react";

export default function OurCoreElements({ children }) {
  return (
    <section className="w-full bg-white text-black py-40">
      
      {/* Título */}
      <div className="main-grid w-full mb-32">
        <h2 className="col-span-5 font-dela text-3xl md:text-4xl uppercase tracking-normal">
          Our Core Elements
        </h2>
      </div>

      <div
        className="
          w-full 
          flex 
          flex-col 
          gap-y-44

          [&>div]:main-grid
          [&>div]:w-full
          [&>div]:items-center

          {/* Texto ocupa columnas 1, 2 y 3 */}
          [&>div:nth-child(odd)>div]:col-span-5
          md:[&>div:nth-child(odd)>div]:col-start-1
          md:[&>div:nth-child(odd)>div]:col-span-3

          [&>div:nth-child(odd)>div:has(img)]:col-span-5
          md:[&>div:nth-child(odd)>div:has(img)]:col-start-4
          md:[&>div:nth-child(odd)>div:has(img)]:col-span-2

          md:[&>div:nth-child(even)>div:has(img)]:col-start-1
          md:[&>div:nth-child(even)>div:has(img)]:col-span-2
          md:[&>div:nth-child(even)>div:has(img)]:row-start-1

          md:[&>div:nth-child(even)>div:not(:has(img))]:col-start-3
          md:[&>div:nth-child(even)>div:not(:has(img))]:col-span-3

          [&>div_img]:w-full
          [&>div_img]:aspect-[4/3]
          [&>div_img]:object-cover
          [&>div_img]:rounded-2xl
          
          {/* text */}
          [&>div>div>span:first-child]:block
          [&>div>div>span:first-child]:font-dela
          [&>div>div>span:first-child]:text-2xl
          md:[&>div>div>span:first-child]:text-3xl
          [&>div>div>span:first-child]:text-black
          [&>div>div>span:first-child]:leading-relaxed
          [&>div>div>span:first-child]:mb-6

          {/* Siguientes spans = Cuerpo en Font Inter */}
          [&>div>div>span:not(:first-child)]:block
          [&>div>div>span:not(:first-child)]:font-inter
          [&>div>div>span:not(:first-child)]:text-3xl
          md:[&>div>div>span:not(:first-child)]:text-4xl
          [&>div>div>span:not(:first-child)]:leading-relaxed
        "
      >
        {children}
      </div>
    </section>
  );
}
