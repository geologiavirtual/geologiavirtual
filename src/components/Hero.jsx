import React from 'react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-earth-dark h-[420px] sm:h-[450px] lg:h-[460px] flex items-center justify-center border-b-4 border-earth-muted/40"
    >
      {/* Background Image: Panorâmica do Pão de Açúcar e Enseada de Botafogo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner-rio.jpg"
          alt="Vista panorâmica da Enseada de Botafogo e Pão de Açúcar - Rio de Janeiro"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Multilayer gradient scrim for crystal clear readability and rich warm tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/75 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/55" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="space-y-4 sm:space-y-5">
          
          {/* NÍVEL 1: TÍTULO — Elemento de maior destaque (Montserrat ExtraBold) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md font-heading">
            Geologia Virtual
          </h1>

          {/* NÍVEL 2: SLOGAN — Destaque intermediário (Montserrat Semibold) */}
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#F4ECE2] leading-snug drop-shadow-sm font-heading max-w-2xl mx-auto">
            Um jeito diferente de explorar, aprender e descobrir.
          </p>

          {/* NÍVEL 3: TEXTO DE BOAS-VINDAS — Menor e confortável para leitura (Open Sans Regular) */}
          <p className="text-sm sm:text-base font-normal text-stone-200/95 leading-relaxed max-w-2xl mx-auto font-sans pt-1">
            Bem-vindo ao Geologia Virtual! Aqui, a Geologia ganha vida em mapas, imagens, roteiros e
            experiências digitais criadas para aproximar as Ciências da Terra de todos.
          </p>

        </div>
      </div>
    </section>
  );
}
