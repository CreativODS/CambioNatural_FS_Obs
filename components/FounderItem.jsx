export default function FounderItem({ name, description, imageSrc, imageAlt, reverse = false }) {
  return (
    <section className="main-grid w-full my-24 text-white">
      
      {/* Texto */}
      <div 
        className={`
          col-span-5 
          flex 
          flex-col 
          justify-center 
          space-y-6
          mt-6
          md:mt-0
          ${reverse ? 'md:col-start-3 md:col-span-3' : 'md:col-start-1 md:col-span-3'}
        `}
      >
        <h2 className="text-3xl font-bold tracking-normal text-white md:text-4xl font-dela">
          {name}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed whitespace-pre-line font-inter">
          {description}
        </p>
      </div>
      
      {/* Imagen */}
      <div 
        className={`
          col-span-5 
          aspect-[4/3] 
          relative 
          overflow-hidden 
          rounded-2xl 
          bg-transparent
          shadow-none
          ${reverse ? 'md:col-start-1 md:col-span-2 md:row-start-1' : 'md:col-start-4 md:col-span-2'}
        `}
      >
        <img 
          src={imageSrc} 
          alt={imageAlt || `Foto de ${name}`} 
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}