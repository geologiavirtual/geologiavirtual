import React from 'react';
import { Layers, Compass, GraduationCap, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    id: 'geologia-geral',
    title: 'Geologia Geral',
    badge: 'Fundamentos & Rochas',
    image: '/images/pilares/geologia-geral.jpg',
    imageAlt: 'Feição geológica em rocha costeira esculpida por processos erosivos (Geologia Geral)',
    imagePosition: 'object-[center_40%]',
    icon: Layers,
    iconColor: 'text-geo-earth',
    iconBg: 'bg-geo-sand/20',
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
    badgeColor: 'bg-geo-sand/25 text-geo-dark',
  },
  {
    id: 'roteiros-virtuais',
    title: 'Roteiros Virtuais',
    badge: 'Imersão & Campo Digital',
    image: '/images/pilares/roteiros-virtuais.jpg',
    imageAlt: 'Drone mapeando litoral para geração de roteiros virtuais e fotogrametria',
    icon: Compass,
    iconColor: 'text-geo-sky',
    iconBg: 'bg-geo-sky/15',
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
    badgeColor: 'bg-geo-sky/20 text-geo-dark',
  },
  {
    id: 'ensino',
    title: 'Ensino',
    badge: 'Graduação & Educação Básica',
    image: '/images/pilares/ensino.jpg',
    imageAlt: 'Estudante utilizando tablet e recursos digitais para aprendizagem em Geociências',
    icon: GraduationCap,
    iconColor: 'text-geo-earth',
    iconBg: 'bg-geo-sand/20',
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
    badgeColor: 'bg-geo-sand/25 text-geo-dark',
  },
  {
    id: 'pesquisa-extensao',
    title: 'Pesquisa e Extensão',
    badge: 'Ciência & Sociedade',
    image: '/images/pilares/pesquisa-extensao.jpg',
    imageAlt: 'Pesquisador em torre de observação e campo de estudo ambiental',
    icon: Microscope,
    iconColor: 'text-geo-sky',
    iconBg: 'bg-geo-sky/15',
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
    badgeColor: 'bg-geo-sky/20 text-geo-dark',
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-geo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-geo-sand/20 text-geo-dark text-xs font-bold uppercase tracking-wider mb-3">
            <span>Pilares do Geologia Virtual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-geo-dark tracking-tight">
            Por onde começar?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-geo-muted leading-relaxed font-normal">
            Comece por onde quiser: explore a Geologia no seu ritmo, com conteúdos, roteiros e materiais feitos para todos.
          </p>
        </div>

        {/* 4 Pillars Grid with photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group bg-white rounded-2xl border border-geo-sand/30 overflow-hidden shadow-xs hover:shadow-xl hover:border-geo-earth/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Pillar Photo Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className={`w-full h-full object-cover ${pillar.imagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay for photo depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Badge on Photo */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${pillar.badgeColor} backdrop-blur-md uppercase tracking-wider shadow-xs`}>
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Floating Category Icon */}
                    <div className="absolute -bottom-4 left-5">
                      <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} bg-white shadow-md border border-geo-sand/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-7 p-6">
                    {/* Title */}
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
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-geo-sand/15">
                    <a
                      href={pillar.actionHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-geo-earth group-hover:text-geo-dark transition-colors"
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
