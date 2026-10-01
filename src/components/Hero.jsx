import React from 'react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-earth-dark min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center border-b-4 border-earth-muted"
    >
      {/* Background Image: Panorâmica do Pão de Açúcar e Enseada de Botafogo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner-rio.jpg"
          alt="Vista panorâmica da Enseada de Botafogo e Pão de Açúcar - Rio de Janeiro"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Multilayer gradient scrim for crystal clear readability and rich warm photographic tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/75 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4ECE2] text-xs font-medium tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-mineral-accent animate-pulse" />
            <span className="font-heading font-semibold text-[#F4ECE2]">Faculdade de Geologia • UERJ</span>
            <span className="text-white/40">•</span>
            <span className="text-[#F4ECE2]/80 font-sans lowercase">geologiavirtual.org</span>
          </div>

          {/* Banner Title: Geologia Virtual (Montserrat ExtraBold) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-md font-heading">
            Geologia <span className="text-[#F4ECE2]">Virtual</span>
          </h1>

          {/* Subtitle: Open Sans Light / Normal (300/400), leading-relaxed, tom claro/off-white */}
          <p className="text-lg sm:text-2xl font-light text-[#F4ECE2] leading-relaxed max-w-3xl mx-auto font-sans tracking-normal drop-shadow-sm">
            Geociências em mapas, imagens, roteiros virtuais e experiências interativas
          </p>

          {/* Supporting text: Open Sans Light (300/400), entrelinha arejada (leading-relaxed), tom neutro suave */}
          <p className="text-sm sm:text-base font-light text-stone-200/90 leading-relaxed max-w-2xl mx-auto font-sans">
            Plataforma acadêmica dedicada à exploração do patrimônio geológico, afloramentos didáticos,
            modelagem 3D e materiais para o ensino e a difusão das Ciências da Terra.
          </p>

        </div>
      </div>
    </section>
  );
}
