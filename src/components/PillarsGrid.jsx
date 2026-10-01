import React from 'react';
import { Layers, Compass, GraduationCap, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    id: 'geologia-geral',
    title: 'Geologia Geral',
    badge: 'Fundamentos & Minerais',
    icon: Layers,
    description:
      'Conceitos fundamentais da dinâmica terrestre, mineralogia, petrologia ígnea, metamórfica e sedimentar, estratigrafia e tectônica de placas.',
    topics: [
      'Classificação de minerais e rochas',
      'Processos geodinâmicos internos e externos',
      'Mapas e cartas geológicas didáticas',
      'Glossário e modelos esquemáticos',
    ],
    actionText: 'Acessar Geologia Geral',
    actionHref: '#geologia-geral',
    badgeColor: 'bg-primary/10 text-primary',
    accentBorder: 'group-hover:border-primary',
    accentIcon: 'text-primary',
  },
  {
    id: 'roteiros-virtuais',
    title: 'Roteiros Virtuais',
    badge: 'Imersão & Campo Digital',
    icon: Compass,
    description:
      'Visitas e cadernos de campo em ambiente virtual interativo, com panoramas 360°, modelos tridimensionais de afloramentos e pontos de parada georreferenciados.',
    topics: [
      'Afloramentos e geomorfologia em 3D',
      'Panoramas 360° com hotspots explicativos',
      'Guias e cadernos de campo interativos',
      'Percursos geológicos do Estado do Rio de Janeiro',
    ],
    actionText: 'Explorar Roteiros de Campo',
    actionHref: '#roteiros-virtuais',
    badgeColor: 'bg-secondary/15 text-secondary',
    accentBorder: 'group-hover:border-secondary',
    accentIcon: 'text-secondary',
  },
  {
    id: 'ensino',
    title: 'Ensino',
    badge: 'Graduação & Educação Básica',
    icon: GraduationCap,
    description:
      'Recursos educacionais abertos para estudantes de graduação, pós-graduação e professores de ciências/geografia dos ensinos fundamental e médio.',
    topics: [
      'Coleções didáticas de lâminas petrográficas',
      'Aulas práticas virtuais e exercícios guiados',
      'Material de apoio pedagógico para docentes',
      'Infográficos e esquemas conceituais',
    ],
    actionText: 'Conhecer Recursos de Ensino',
    actionHref: '#ensino',
    badgeColor: 'bg-primary/10 text-primary',
    accentBorder: 'group-hover:border-primary',
    accentIcon: 'text-primary',
  },
  {
    id: 'pesquisa-extensao',
    title: 'Pesquisa e Extensão',
    badge: 'Ciência & Comunidade',
    icon: Microscope,
    description:
      'Articulação entre a produção científica da FGEL/UERJ e a sociedade, promovendo divulgação científica, geoconservação e geoturismo.',
    topics: [
      'Projetos de pesquisa científica e IC',
      'Oficinas com escolas da rede pública e privada',
      'Geoconservação e patrimônio geológico',
      'Publicações acadêmicas e anais de eventos',
    ],
    actionText: 'Ver Projetos e Ações',
    actionHref: '#pesquisa-extensao',
    badgeColor: 'bg-secondary/15 text-secondary',
    accentBorder: 'group-hover:border-secondary',
    accentIcon: 'text-secondary',
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Pilares Estruturais do Projeto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Quatro eixos integrados para a difusão das Geociências
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted leading-relaxed">
            Estrutura desenhada para conectar a experiência acadêmica da Faculdade de Geologia da UERJ
            com a tecnologia e a comunidade educacional.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`group bg-card rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${pillar.accentBorder} hover:-translate-y-1`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${pillar.accentIcon}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pillar.badgeColor} uppercase tracking-wider`}>
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Topics List */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Tópicos & Recursos:
                    </p>
                    {pillar.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-main">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={pillar.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
