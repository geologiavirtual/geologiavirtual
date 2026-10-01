import React from 'react';
import { Compass, Sparkles, Layers, ArrowRight, BookOpen, MapPin, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-geo-sand/15 via-geo-bg to-geo-bg pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-geo-sand/20">
      
      {/* Decorative geological background motif */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-geo-sand/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-geo-sky/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#9E6738_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-geo-surface border border-geo-sand/40 text-geo-dark text-xs font-bold tracking-wide uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-geo-cyan animate-pulse" />
            <span>Faculdade de Geologia • UERJ</span>
            <span className="text-geo-sand">•</span>
            <span className="text-geo-earth font-mono lowercase">geologiavirtual.org</span>
          </div>

          {/* Main Title & Slogan */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-geo-dark tracking-tight leading-[1.15]">
            Geociências em mapas, imagens, roteiros virtuais e experiências interativas
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-geo-muted leading-relaxed font-normal max-w-2xl mx-auto">
            Plataforma acadêmica dedicada à exploração do patrimônio geológico,
            afloramentos didáticos, modelagem 3D e materiais para o ensino e a difusão das Ciências da Terra.
          </p>

          {/* Action Buttons: bg-geo-earth (hover:bg-geo-dark) & border-geo-sky text-geo-sky */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Botão Primário: bg-geo-earth com hover:bg-geo-dark */}
            <a
              href="#roteiros-virtuais"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-geo-earth hover:bg-geo-dark text-white font-semibold text-sm sm:text-base shadow-md shadow-geo-earth/20 hover:shadow-lg hover:shadow-geo-dark/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-5 h-5 text-geo-sand" />
              <span>Explorar Roteiros Virtuais</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* Botão Secundário: borda border-geo-sky e texto text-geo-sky */}
            <a
              href="#geologia-geral"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-geo-surface hover:bg-geo-sky/10 border-2 border-geo-sky text-geo-sky hover:text-geo-sky font-bold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Layers className="w-5 h-5 text-geo-sky" />
              <span>Acervo de Geologia Geral</span>
            </a>

            {/* Botão de Apoio: Materiais de Ensino */}
            <a
              href="#ensino"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-geo-surface hover:bg-geo-sand/15 text-geo-text font-semibold text-sm sm:text-base border border-geo-sand/40 shadow-xs transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-geo-earth" />
              <span>Materiais de Ensino</span>
            </a>
          </div>

          {/* Quick Metrics & Pillars Ticker */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-geo-sand/20 mt-10">
            <div className="p-3.5 bg-geo-surface rounded-xl border border-geo-sand/30 shadow-xs">
              <span className="block text-2xl font-black text-geo-dark">3D & 360°</span>
              <span className="text-xs text-geo-muted font-medium">Modelos & Afloramentos</span>
            </div>
            <div className="p-3.5 bg-geo-surface rounded-xl border border-geo-sand/30 shadow-xs">
              <span className="block text-2xl font-black text-geo-earth">UERJ</span>
              <span className="text-xs text-geo-muted font-medium">Faculdade de Geologia</span>
            </div>
            <div className="p-3.5 bg-geo-surface rounded-xl border border-geo-sand/30 shadow-xs">
              <span className="block text-2xl font-black text-geo-sky">100%</span>
              <span className="text-xs text-geo-muted font-medium">Acesso Aberto & Público</span>
            </div>
            <div className="p-3.5 bg-geo-surface rounded-xl border border-geo-sand/30 shadow-xs">
              <span className="block text-2xl font-black text-geo-dark">4 Pilares</span>
              <span className="text-xs text-geo-muted font-medium">Ensino, Pesquisa & Extensão</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
