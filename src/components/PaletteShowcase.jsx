import React from 'react';
import { Palette, Check, Layers, Sliders } from 'lucide-react';

const GEO_TOKENS = [
  {
    name: 'geo-earth',
    hex: '#9E6738',
    role: 'Ocre terroso principal',
    bgClass: 'bg-geo-earth',
    textClass: 'text-white',
    usage: 'Botões primários, detalhes do relevo e acentos terrosos',
  },
  {
    name: 'geo-dark',
    hex: '#63391A',
    role: 'Marrom profundo para contraste',
    bgClass: 'bg-geo-dark',
    textClass: 'text-white',
    usage: 'Títulos principais, cabeçalhos, Footer e textos de destaque',
  },
  {
    name: 'geo-sand',
    hex: '#D8A86C',
    role: 'Tom arenito para acentos',
    bgClass: 'bg-geo-sand',
    textClass: 'text-geo-dark',
    usage: 'Bordas sutis, tags, divisores e realces no footer',
  },
  {
    name: 'geo-sky',
    hex: '#4B9CD3',
    role: 'Azul do globo / céu',
    bgClass: 'bg-geo-sky',
    textClass: 'text-white',
    usage: 'Botões secundários (borda/texto), links e ícones',
  },
  {
    name: 'geo-cyan',
    hex: '#63C7D0',
    role: 'Ciano do marcador e digital',
    bgClass: 'bg-geo-cyan',
    textClass: 'text-geo-dark',
    usage: 'Indicador do pin, detalhes interativos e 3D',
  },
  {
    name: 'geo-bg',
    hex: '#FAF8F5',
    role: 'Fundo off-white com tom quente',
    bgClass: 'bg-geo-bg',
    textClass: 'text-geo-text',
    usage: 'Corpo da página (body) e planos de fundo quentes',
    border: true,
  },
  {
    name: 'geo-surface',
    hex: '#FFFFFF',
    role: 'Superfície de cartões',
    bgClass: 'bg-geo-surface',
    textClass: 'text-geo-text',
    usage: 'Cartões dos 4 pilares, blocos de logos e painéis',
    border: true,
  },
  {
    name: 'geo-text',
    hex: '#2D231B',
    role: 'Texto principal legível',
    bgClass: 'bg-geo-text',
    textClass: 'text-white',
    usage: 'Tipografia de leitura, parágrafos e corpo textual',
  },
  {
    name: 'geo-muted',
    hex: '#7A6E65',
    role: 'Texto secundário',
    bgClass: 'bg-geo-muted',
    textClass: 'text-white',
    usage: 'Subtítulos, legendas, apoios e metadados',
  },
];

export default function PaletteShowcase() {
  return (
    <section className="py-12 bg-geo-sand/10 border-y border-geo-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-geo-earth uppercase tracking-wider mb-1.5">
              <Palette className="w-4 h-4 text-geo-earth" />
              <span>Identidade Visual Oficial • Geologia Virtual</span>
            </div>
            <h3 className="text-2xl font-extrabold text-geo-dark">
              Paleta oficial aplicada no Tailwind CSS
            </h3>
          </div>
          <p className="text-xs text-geo-muted max-w-md">
            Tokens mapeados no namespace <code className="px-2 py-0.5 rounded bg-white border border-geo-sand/40 font-mono text-geo-dark font-bold">geo.*</code> em <code className="px-1.5 py-0.5 rounded bg-white border border-geo-sand/40 font-mono text-geo-earth">tailwind.config.js</code>.
          </p>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {GEO_TOKENS.map((token) => (
            <div
              key={token.name}
              className="bg-white rounded-xl border border-geo-sand/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Color Block */}
              <div
                className={`h-16 w-full ${token.bgClass} flex items-end p-2 ${token.border ? 'border-b border-geo-sand/20' : ''}`}
              >
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-white backdrop-blur-xs">
                  {token.hex}
                </span>
              </div>

              {/* Details */}
              <div className="p-2.5 space-y-0.5">
                <span className="block font-mono text-[11px] font-bold text-geo-dark truncate">
                  {token.name}
                </span>
                <span className="block text-[10px] font-semibold text-geo-text leading-tight line-clamp-1">
                  {token.role}
                </span>
                <p className="text-[9px] text-geo-muted pt-1 leading-snug line-clamp-2">
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
