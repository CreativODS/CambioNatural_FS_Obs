"use client";

export default function GatheringsHero({ children }) {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#0A6CFF] overflow-hidden flex items-center">
      {/* Textura */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/images/oceanos blanco.png"
          alt=""
          className="absolute top-1/2 right-[-18%] w-[30%] opacity-90"
        />
      </div>

      {/* Contenedor de contenido: ahora solo actúa como marco */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}