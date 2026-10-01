import React from 'react';
import bannerRio from '../assets/banner-rio.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-earth-dark h-[320px] sm:h-[350px] lg:h-[370px] flex items-center justify-center border-b-4 border-earth-muted/40"
    >
      {/* Background Image: Panorâmica do Pão de Açúcar e Enseada de Botafogo */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerRio}
          alt="Vista panorâmica da Enseada de Botafogo e Pão de Açúcar - Rio de Janeiro"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Camada translúcida equilibrada: mantém a paisagem visível e preserva alto contraste para leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/85 via-earth-dark/60 to-black/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <div className="space-y-3 sm:space-y-4">
          
          {/* NÍVEL 1: TÍTULO — Elemento de maior destaque (Montserrat ExtraBold) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md font-heading">
            Geologia Virtual
          </h1>

          {/* NÍVEL 2: SLOGAN — Destaque intermediário (Montserrat Semibold) */}
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#F4ECE2] leading-snug drop-shadow-sm font-heading max-w-2xl mx-auto">
            Um jeito diferente de explorar, aprender e descobrir.
          </p>

          {/* NÍVEL 3: TEXTO DE BOAS-VINDAS — Menor e confortável para leitura (Open Sans Regular) */}
          <p className="text-xs sm:text-sm lg:text-base font-normal text-stone-200/95 leading-relaxed max-w-2xl mx-auto font-sans pt-0.5">
            Bem-vindo ao Geologia Virtual! Aqui, a Geologia ganha vida em mapas, imagens, roteiros e
            experiências digitais criadas para aproximar as Ciências da Terra de todos.
          </p>

        </div>
      </div>
    </section>
  );
}
