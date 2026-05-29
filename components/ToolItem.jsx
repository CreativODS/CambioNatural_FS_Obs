import React from 'react';

export default function ToolItem({ title, subtitle, description, buttonText, imageSrc, alignment = "left" }) {
  

  return (
    <div className="main-grid items-start py-20 border-b border-gray-100">
      
      {alignment === "left" ? (
        <>
          <div className="col-span-4">
            <h2 className="font-dela text-[2rem] uppercase leading-tight mb-2">{title}</h2>
            <p className="font-inter text-sm uppercase tracking-[0.18em] mb-6">{subtitle}</p>
            <p className="font-inter text-2xl leading-relaxed mb-8">{description}</p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:opacity-85 transition-opacity font-dela text-sm uppercase tracking-wider">
              {buttonText}
            </button>
          </div>
          <div className="col-span-1 flex justify-center">
            <img src={imageSrc} alt={title} className="w-full max-h-[300px] object-contain" />
          </div>
        </>
      ) : (
        <>
          <div className="col-span-1 flex justify-center">
            <img src={imageSrc} alt={title} className="w-full max-h-[300px] object-contain" />
          </div>
          <div className="col-span-4">
            <h2 className="font-dela text-[2rem] uppercase leading-tight mb-2">{title}</h2>
            <p className="font-inter text-sm uppercase tracking-[0.18em] mb-6">{subtitle}</p>
            <p className="font-inter text-2xl leading-relaxed mb-8">{description}</p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:opacity-85 transition-opacity font-inter text-sm uppercase tracking-wider">
              {buttonText}
            </button>
          </div>
        </>
      )}

    </div>
  );
}