import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Fijamos el año para evitar hydration mismatches
const BUILD_YEAR = new Date().getFullYear();

export default function Layout({ children }) {
  const router = useRouter();

  // 🎨 Fondos automáticos según la página
  const backgroundMap = {
    "/": "bg-[#ffffff]",
    "/we-are": "bg-[#F90068]",
    "/tools": "bg-[#EED30F]",
    "/mediaclub": "bg-[#17BA4F]",
    "/gatherings": "bg-[#0A6CFF]",
  };

  const activeBg = backgroundMap[router.pathname] || "bg-white";

  return (
    <div className={`min-h-screen flex flex-col w-full ${activeBg} text-black`}>
      
      {/* BARRA SUPERIOR */}
      <header className="w-full bg-inherit shadow-[0_6px_24px_rgba(0,0,0,0.20)] relative z-50">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center py-4 md:py-6 gap-4">
          <Link href="/" className="group no-underline">
            <div className="transition-opacity duration-300 hover:opacity-70 cursor-pointer">
              <Image
                src="/assets/images/cambio_natural.png"
                alt="Cambio Natural Logo"
                width={180}
                height={90}
                className="h-auto max-w-full"
                priority
              />
            </div>
          </Link>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-dela text-1rem tracking-widest uppercase">
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/gatherings">Gatherings</Link></li>
            <li><Link href="/mediaclub">MediaClub</Link></li>
            <li><Link href="/we-are">We Are</Link></li>
          </ul>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL: Integrado con tu retícula main-grid */}
      <main className="flex-grow w-full animate-in fade-in duration-500 main-grid">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="py-10 border-t border-black mt-auto w-full bg-inherit">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-black uppercase tracking-wide">
          <span>© {BUILD_YEAR} Cambio Natural CC BY-NC-ND 4.0</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Contact</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}