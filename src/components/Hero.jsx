import React from 'react';
import { Compass, Map, Sparkles, Layers, ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-background to-background pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/60">
      
      {/* Decorative geological background motif */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Faculdade de Geologia • UERJ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-text-muted font-medium lowercase">geologiavirtual.org</span>
          </div>

          {/* Main Title & Welcome Slogan */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.15]">
            Geociências em mapas, imagens, roteiros virtuais e experiências interativas
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-normal max-w-2xl mx-auto">
            Uma plataforma acadêmica e aberta dedicada à exploração do patrimônio geológico,
            afloramentos didáticos, modelagem 3D e materiais para o ensino e a pesquisa das Ciências da Terra.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action Button (Secondary Terracotta Color) */}
            <a
              href="#roteiros-virtuais"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm sm:text-base shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-5 h-5" />
              <span>Explorar Roteiros Virtuais</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary Action Button (Primary Deep Blue Color) */}
            <a
              href="#geologia-geral"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Layers className="w-5 h-5 text-secondary" />
              <span>Acervo de Geologia Geral</span>
            </a>

            {/* Tertiary / Learn more button */}
            <a
              href="#ensino"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-card hover:bg-slate-50 text-text-main font-semibold text-sm sm:text-base border border-slate-300 hover:border-secondary/40 shadow-sm transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Materiais de Ensino</span>
            </a>
          </div>

          {/* Key quick stats / highlights ticker */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 mt-10">
            <div className="p-3 bg-card/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm">
              <span className="block text-2xl font-black text-primary">3D & 360°</span>
              <span className="text-xs text-text-muted font-medium">Afloramentos Interativos</span>
            </div>
            <div className="p-3 bg-card/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm">
              <span className="block text-2xl font-black text-secondary">UERJ</span>
              <span className="text-xs text-text-muted font-medium">Faculdade de Geologia</span>
            </div>
            <div className="p-3 bg-card/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm">
              <span className="block text-2xl font-black text-primary">100%</span>
              <span className="text-xs text-text-muted font-medium">Acesso Aberto & Gratuito</span>
            </div>
            <div className="p-3 bg-card/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm">
              <span className="block text-2xl font-black text-secondary">4 Pilares</span>
              <span className="text-xs text-text-muted font-medium">Ensino, Pesquisa & Campo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
