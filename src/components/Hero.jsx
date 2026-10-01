import React from 'react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-geo-dark min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center border-b-4 border-geo-earth"
    >
      {/* Background Image: Panorâmica do Pão de Açúcar e Enseada de Botafogo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner-rio.jpg"
          alt="Vista panorâmica da Enseada de Botafogo e Pão de Açúcar - Rio de Janeiro"
          className="w-full h-full object-cover object-center scale-105"
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

          {/* Banner Title: Geologia Virtual */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg font-sans">
            Geologia <span className="text-geo-sand">Virtual</span>
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

        </div>
      </div>
    </section>
  );
}
