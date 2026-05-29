import React from 'react';

export default function ToolItem02({ title, subtitle, description, buttonText, imageSrc }) {
  return (
    <div className="main-grid grid grid-cols-5 items-start py-20 mt-16 gap-8">
      <div className="col-span-2 flex justify-center">
        <img src={imageSrc} alt={title} className="w-full max-h-[350px] object-contain" />
      </div>
      <div className="col-span-3">
        <h2 className="font-dela text-[2rem] uppercase leading-tight mb-2">{title}</h2>
        <p className="font-inter text-sm uppercase tracking-[0.18em] mb-6">{subtitle}</p>
        <p className="font-inter text-2xl leading-relaxed mb-8">{description}</p>
        <button className="bg-black text-white px-8 py-3 rounded-lg text-sm uppercase tracking-wider">
          {buttonText}
        </button>
      </div>
    </div>
  );
}