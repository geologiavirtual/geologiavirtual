import React from 'react';
import { Compass, Layers, ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-geo-dark min-h-[520px] lg:min-h-[580px] flex items-center justify-center border-b-4 border-geo-earth"
    >
      {/* Background Image: Panorâmica do Pão de Açúcar e Enseada de Botafogo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner-rio.jpg"
          alt="Vista panorâmica da Enseada de Botafogo e Pão de Açúcar - Rio de Janeiro"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          style={{ animationDuration: '12s' }}
        />
        {/* Multilayer gradient scrim for crystal clear readability and rich photographic tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-geo-dark/95 via-geo-dark/75 to-black/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase shadow-md">
            <span className="w-2 h-2 rounded-full bg-geo-cyan animate-ping" />
            <span className="text-geo-sand">Faculdade de Geologia • UERJ</span>
            <span className="text-white/40">•</span>
            <span className="text-stone-200 font-mono lowercase">geologiavirtual.org</span>
          </div>

          {/* Banner Title: Geologia Geral */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg font-sans">
            Geologia <span className="text-geo-sand">Geral</span>
          </h1>

          {/* Subtitle: Geociências em mapas, imagens, roteiros virtuais e experiências interativas */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-geo-sand leading-snug drop-shadow-md max-w-3xl mx-auto font-sans">
            Geociências em mapas, imagens, roteiros virtuais e experiências interativas
          </p>

          {/* Smaller explanatory text below subtitle */}
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm">
            Plataforma acadêmica dedicada à exploração do patrimônio geológico, afloramentos didáticos,
            modelagem 3D e materiais para o ensino e a difusão das Ciências da Terra.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Action Button: bg-geo-earth hover:bg-geo-dark */}
            <a
              href="#roteiros-virtuais"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-geo-earth hover:bg-geo-dark text-white font-bold text-sm sm:text-base shadow-xl shadow-black/40 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-geo-sand/40"
            >
              <Compass className="w-5 h-5 text-geo-sand" />
              <span>Explorar Roteiros Virtuais</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary Action Button: border-geo-sky text-white / geo-sky */}
            <a
              href="#geologia-geral"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-black/30 hover:bg-geo-sky/20 border-2 border-geo-sky text-white hover:text-geo-sky font-bold text-sm sm:text-base backdrop-blur-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Layers className="w-5 h-5 text-geo-sky" />
              <span>Acervo de Geologia Geral</span>
            </a>

            {/* Tertiary / Educational Materials Button */}
            <a
              href="#ensino"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-geo-sand" />
              <span>Materiais de Ensino</span>
            </a>
          </div>

          {/* Highlights glass stats ticker */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-white/15 mt-8">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
              <span className="block text-2xl font-black text-white">3D & 360°</span>
              <span className="text-xs text-geo-sand font-medium">Modelos & Afloramentos</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
              <span className="block text-2xl font-black text-geo-sand">UERJ</span>
              <span className="text-xs text-stone-300 font-medium">Faculdade de Geologia</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
              <span className="block text-2xl font-black text-geo-sky">100%</span>
              <span className="text-xs text-stone-300 font-medium">Acesso Aberto & Público</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
              <span className="block text-2xl font-black text-white">4 Pilares</span>
              <span className="text-xs text-geo-sand font-medium">Ensino, Pesquisa & Campo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
