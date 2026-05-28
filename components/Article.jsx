import React from 'react';

export default function Article({ title, category, description, link, imageSrc }) {
  return
    <div 
      className="bg-[#F2D607] p-8 md:p-12 relative overflow-hidden" 
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%'
      }}
    >
      {/* Grid interno de 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Columna 1: Información */}
        <div className="flex flex-col">
          <span className="text-sm font-inter uppercase tracking-widest mb-2">{category}</span>
          <h3 className="font-dela text-3xl md:text-4xl leading-tight uppercase">
            {title}
          </h3>
          <div className="mt-8">
            <a 
              href={link} 
              className="font-inter underline text-lg font-medium hover:opacity-70 transition-opacity"
            >
              Read me
            </a>
          </div>
        </div>

        {/* Columna 2: Resumen en recuadro blanco */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="font-inter text-gray-800 leading-relaxed text-base">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};