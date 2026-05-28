import React from 'react';

export default function Article({ title, category, description, link, imageSrc }) {
  return (
    <section className="rounded-[32px] bg-[#F2D607] p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* Columna 1: Información (ocupa 3/5) */}
        <div className="md:col-span-3 flex flex-col">
          <p className="text-sm uppercase tracking-[0.18em] mb-4">{category}</p>
          
          <h3 className="font-dela text-2xl md:text-3xl leading-tight uppercase mb-6">
            {title}
          </h3>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-inter text-gray-800 leading-relaxed text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Columna 2: Imagen y Link (ocupa 2/5) */}
        <div className="md:col-span-2 flex flex-col items-center justify-center gap-6">
          <img 
            src={imageSrc} 
            alt="Article visual"
            className="w-full max-w-[300px] max-h-[300px] object-cover rounded-2xl shadow-md" 
          />
          
          <a 
            href={link} 
            className="font-inter font-medium underline hover:opacity-70 transition-opacity text-center"
          >
            Read me
          </a>
        </div>

      </div>
    </section>
  );
}