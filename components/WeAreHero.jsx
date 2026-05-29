"use client";
import React from "react";
import Image from "next/image";

export default function WeAreHero({ children }) {  
  return (
    <section
      className="
        relative 
        w-full 
        h-auto 
        min-h-[75vh]
        bg-[#F90068]
        overflow-hidden
        py-24
      "
 >
<div
        className="
          absolute
          top-0
          left-0
          -translate-x-[40%]
          -translate-y-[25%]
          w-[45%]
          max-w-[800px]
          pointer-events-none
          select-none
          z-0
        "
      >
 <Image
          src="/assets/images/puntitos blanco.png"
          alt="Decoración puntitos"
          width={720}
          height={720}
          className="w-full h-auto object-contain opacity-80"
          priority
        />
      </div>

<div className="main-grid relative z-10 w-full h-full mt-[12vh]">
        <div
          className="
            col-span-5 
            md:col-start-2 
            md:col-span-4
            text-left 
            text-white
            text-[1.8rem]
            md:text-[2.3rem]
            leading-[1.3]
            font-inter
            
            [&_.font-dela]:text-[1.6rem]
            md:[&_.font-dela]:text-[2.6rem]
            [&_.font-dela]:leading-[1.1]
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}