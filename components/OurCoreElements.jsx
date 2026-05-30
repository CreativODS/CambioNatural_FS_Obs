export default function OurCoreElements({ title, children }) {
  return (
    <section className="w-full bg-white text-black py-20 md:py-40">
      {/* Título de la sección */}
      <div className="main-grid w-full mb-20">
        <h2 className="col-span-5 font-dela text-3xl md:text-4xl uppercase tracking-normal">
          {title}
        </h2>
      </div>

      {/* Contenedor de elementos */}
      <div className="flex flex-col gap-y-20 md:gap-y-40">
        {children}
      </div>
    </section>
  );
}

// Este es el sub-componente que usarás dentro de CoreElements
export function CoreItem({ title, description, imageSrc, imageAlt, reverse = false }) {
  return (
    <div className="main-grid w-full items-center">
      {/* Texto - Ocupa 3 columnas */}
      <div 
        className={`col-span-5 md:col-span-3 flex flex-col space-y-6 ${reverse ? 'md:col-start-3' : 'md:col-start-1'}`}
      >
        <h3 className="font-dela text-xl md:text-2xl tracking-normal leading-relaxed">
          {title}
        </h3>
        <p className="font-inter text-2xl md:text-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Imagen */}
      <div 
        className={`col-span-5 md:col-span-2 aspect-[4/3] overflow-hidden rounded-2xl ${reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-4'}`}
      >
        <img 
          src={imageSrc} 
          alt={imageAlt || title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
