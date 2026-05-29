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
        flex 
        items-start 
        justify-start 
        overflow-hidden
        py-24
        px-6
        md:px-16
      "
    >

      <div
        className="
          absolute
          top-0
          right-0
          translate-x-[15%]
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

      <div
        className="
          relative 
          z-10
          text-left 
          text-white
          max-w-5xl 
          w-full 
          mt-[12vh] 
          text-[1.8rem]
          md:text-[2.5rem]
          leading-[1.2]
          font-inter
        "
      >
        {children}
      </div>
    </section>
  );
}