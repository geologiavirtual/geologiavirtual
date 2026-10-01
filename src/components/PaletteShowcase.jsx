import React from 'react';
import { Palette, Check, Layers, Sliders } from 'lucide-react';

const PALETTE_TOKENS = [
  {
    name: 'primary',
    hex: '#1E3A5F',
    role: 'Azul institucional / geociências',
    bgClass: 'bg-primary',
    textClass: 'text-white',
    usage: 'Títulos, Navbar, botões primários, cabeçalhos e footer',
  },
  {
    name: 'secondary',
    hex: '#C85A32',
    role: 'Terracota / mineral',
    bgClass: 'bg-secondary',
    textClass: 'text-white',
    usage: 'Botões de destaque (CTA), ícones, badges e detalhes geológicos',
  },
  {
    name: 'background',
    hex: '#F8FAFC',
    role: 'Off-white para corpo da página',
    bgClass: 'bg-background',
    textClass: 'text-text-main',
    usage: 'Fundo geral do layout, áreas neutras',
    border: true,
  },
  {
    name: 'card',
    hex: '#FFFFFF',
    role: 'Branco puro para cartões e módulos',
    bgClass: 'bg-card',
    textClass: 'text-text-main',
    usage: 'Superfícies de cartões, menus, modais e containers elevados',
    border: true,
  },
  {
    name: 'text-main',
    hex: '#1F2937',
    role: 'Grafite escuro para tipografia principal',
    bgClass: 'bg-text-main',
    textClass: 'text-white',
    usage: 'Textos de leitura, parágrafos e subtítulos',
  },
  {
    name: 'text-muted',
    hex: '#64748B',
    role: 'Cinza ardósia para metadados e legendas',
    bgClass: 'bg-text-muted',
    textClass: 'text-white',
    usage: 'Legendas, apoios, créditos e textos secundários',
  },
];

export default function PaletteShowcase() {
  return (
    <section className="py-12 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
              <Palette className="w-4 h-4" />
              <span>Design System • Paleta de Cores Configurada</span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary">
              Tokens do Tailwind CSS estendidos no tema
            </h3>
          </div>
          <p className="text-xs text-text-muted max-w-md">
            Cores definidas em <code className="px-2 py-0.5 rounded bg-white border border-slate-300 font-mono text-primary font-semibold">tailwind.config.js</code> prontas para uso em todos os componentes.
          </p>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PALETTE_TOKENS.map((token) => (
            <div
              key={token.name}
              className="bg-card rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Color Block */}
              <div
                className={`h-20 w-full ${token.bgClass} flex items-end p-2.5 ${token.border ? 'border-b border-slate-200' : ''}`}
              >
                <span className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/30 text-white backdrop-blur-sm`}>
                  {token.hex}
                </span>
              </div>

              {/* Details */}
              <div className="p-3 space-y-1">
                <span className="block font-mono text-xs font-bold text-primary">
                  {token.name}
                </span>
                <span className="block text-[11px] font-semibold text-text-main leading-tight">
                  {token.role}
                </span>
                <p className="text-[10px] text-text-muted pt-1 leading-snug">
                  {token.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
