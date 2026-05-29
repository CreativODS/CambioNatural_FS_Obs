import React from 'react';

export default function ToolItem({ title, subtitle, description, buttonText, imageSrc, position = "left" }) {
  
  // Lógica para decidir dónde colocar el texto según la posición
const textClasses = alignment === "left" 
    ? "col-start-1 col-span-3" 
    : "col-start-3 col-span-3";
    
  const imageClasses = alignment === "left" 
    ? "col-start-5 col-span-1" 
    : "col-start-1 col-span-1";

  return (
    <div className="main-grid items-center py-20 border-b border-gray-100">
      
      {/* Contenedor de Texto */}
      <div className={textClasses}>
        <h2 className="font-dela text-[2rem] uppercase leading-tight mb-2">
          {title}
        </h2>
        <p className="font-inter text-sm uppercase tracking-[0.18em] text-gray-500 mb-6">
          {subtitle}
        </p>
        <p className="font-inter text-2xl leading-relaxed text-gray-800 mb-8">
          {description}
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:opacity-85 transition-opacity font-inter text-sm uppercase tracking-wider">
          {buttonText}
        </button>
      </div>

      {/* Contenedor de Imagen */}
      <div className={`${imageClasses} flex justify-center`}>
        <img 
          src={imageSrc} 
          alt={title}
          className="max-w-[300px] w-full h-auto object-contain"
        />
      </div>

    </div>
  );
}