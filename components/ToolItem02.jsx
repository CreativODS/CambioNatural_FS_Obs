import React from 'react';

export default function ToolItem02({ title, subtitle, description, buttonText, imageSrc }) {
  return (
    <div className="main-grid grid grid-cols-5 items-start py-20 mt-16 gap-8">
      <div className="col-span-2 flex justify-center">
        <img src={imageSrc} alt={title} className="w-full max-h-[350px] object-contain" />
      </div>
<div className="col-span-3 flex flex-col items-center text-center">
        <h2 className="font-dela text-[2rem] uppercase leading-tight mb-2 self-start text-left">
          {title}
        </h2>
        <p className="font-inter text-sm uppercase tracking-[0.18em] mb-6 self-start text-left">
          {subtitle}
        </p>
        <p className="font-inter text-2xl leading-relaxed mb-8 self-start text-left">
          {description}
        </p>
        
        {/* Botón */}
        <button className="bg-black text-white px-8 py-3 rounded-md hover:opacity-85 transition-opacity font-dela text-sm uppercase tracking-wider">
          {buttonText}
        </button>
      </div>
    </div>
  );
}