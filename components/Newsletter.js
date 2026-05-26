// components/Newsletter.js
export default function Newsletter() {
  return (
    <div className="main-grid py-12">
      {/* Columna 1 y 2: Información */}
      <div className="col-span-2">
        <p className="text-sm uppercase tracking-wide">Join to Newsletter</p>
        <h2 className="font-dela text-3xl my-4 uppercase">Lets co-create together</h2>
        <p className="text-base">
          Short bi-monthly nuggets on Planetary Health, projects and research that are changing the world, delivered to your inbox - No spam, real action.
        </p>
      </div>

      {/* Columnas 3, 4 y 5: Imagen y formulario */}
      <div className="col-span-3 flex flex-col gap-4">
        {/* Imagen principal */}
        <img src="/assets/images/newsletter-visual.png" alt="Newsletter" className="w-full max-h-[200px] object-contain" />
        
        {/* Formulario: Ocupa col 3 y 4, botón en col 5 */}
        <div className="grid grid-cols-3 gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="col-span-2 border border-black p-2 bg-transparent"
          />
          <button className="col-span-1 bg-black text-white px-4 py-2 hover:opacity-80 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}