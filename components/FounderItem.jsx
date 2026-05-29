export default function FounderSection({ name, description, imageSrc, imageAlt, reverse = false }) {
  return (
    <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-12 items-center my-20`}>
      {/* Columna de Texto */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {name}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
      
      {/* Columna de Imagen */}
      <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg">
        <img 
          src={imageSrc} 
          alt={imageAlt || `Foto de ${name}`} 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}