import React from 'react';
import { Layers, Compass, GraduationCap, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    id: 'geologia-geral',
    title: 'Geologia Geral',
    badge: 'Fundamentos & Rochas',
    icon: Layers,
    iconColor: 'text-geo-earth',
    iconBg: 'bg-geo-sand/15',
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
    badgeColor: 'bg-geo-sand/20 text-geo-dark',
  },
  {
    id: 'roteiros-virtuais',
    title: 'Roteiros Virtuais',
    badge: 'Imersão & Campo Digital',
    icon: Compass,
    iconColor: 'text-geo-sky',
    iconBg: 'bg-geo-sky/10',
    description:
      'Visitas e cadernos de campo em ambiente virtual interativo, com panoramas 360°, modelos tridimensionais de afloramentos e pontos de parada georreferenciados.',
    topics: [
      'Afloramentos e geomorfologia em 3D',
      'Panoramas 360° com hotspots interativos',
      'Guias e cadernos de campo digitais',
      'Percursos geológicos no Estado do RJ',
    ],
    actionText: 'Explorar Roteiros de Campo',
    actionHref: '#roteiros-virtuais',
    badgeColor: 'bg-geo-sky/15 text-geo-dark',
  },
  {
    id: 'ensino',
    title: 'Ensino',
    badge: 'Graduação & Educação Básica',
    icon: GraduationCap,
    iconColor: 'text-geo-earth',
    iconBg: 'bg-geo-sand/15',
    description:
      'Recursos educacionais abertos para estudantes universitários e professores dos ensinos fundamental e médio interessados nas Geociências.',
    topics: [
      'Coleções didáticas de lâminas petrográficas',
      'Aulas práticas virtuais e exercícios guiados',
      'Material de apoio pedagógico para docentes',
      'Infográficos e esquemas conceituais',
    ],
    actionText: 'Conhecer Recursos de Ensino',
    actionHref: '#ensino',
    badgeColor: 'bg-geo-sand/20 text-geo-dark',
  },
  {
    id: 'pesquisa-extensao',
    title: 'Pesquisa e Extensão',
    badge: 'Ciência & Sociedade',
    icon: Microscope,
    iconColor: 'text-geo-sky',
    iconBg: 'bg-geo-sky/10',
    description:
      'Articulação entre a produção científica da Faculdade de Geologia da UERJ e a sociedade, promovendo divulgação científica, geoconservação e geoturismo.',
    topics: [
      'Projetos de pesquisa científica e IC',
      'Oficinas com escolas da rede pública e privada',
      'Geoconservação e patrimônio geológico',
      'Publicações acadêmicas e anais de eventos',
    ],
    actionText: 'Ver Projetos e Extensão',
    actionHref: '#pesquisa-extensao',
    badgeColor: 'bg-geo-sky/15 text-geo-dark',
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-geo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-geo-sand/20 text-geo-dark text-xs font-bold uppercase tracking-wider mb-3">
            <span>Pilares Estruturais do Projeto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-geo-dark tracking-tight">
            Quatro eixos integrados para a difusão das Geociências
          </h2>
          <p className="mt-3 text-base sm:text-lg text-geo-muted leading-relaxed">
            Estrutura desenhada para conectar o ensino e a pesquisa da Faculdade de Geologia (UERJ)
            com ferramentas digitais acessíveis a toda a sociedade.
          </p>
        </div>

        {/* 4 Pillars Grid: bg-white com borda border-geo-sand/30, ícones em geo-sky ou geo-earth e títulos text-geo-dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group bg-white rounded-2xl border border-geo-sand/30 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-geo-earth/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pillar.badgeColor} uppercase tracking-wider`}>
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title: text-geo-dark */}
                  <h3 className="text-xl font-bold text-geo-dark group-hover:text-geo-earth transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-geo-muted leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Topics List */}
                  <div className="mt-5 pt-4 border-t border-geo-sand/15 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-geo-dark/50">
                      Tópicos & Recursos:
                    </p>
                    {pillar.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-geo-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-geo-earth flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-geo-sand/15">
                  <a
                    href={pillar.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-geo-earth group-hover:text-geo-dark transition-colors"
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
