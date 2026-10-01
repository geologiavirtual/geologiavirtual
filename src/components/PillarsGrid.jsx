import React from 'react';
import { Layers, Compass, GraduationCap, Microscope, ArrowRight, Check } from 'lucide-react';

const PILLARS = [
  {
    id: 'geologia-geral',
    title: 'Geologia Geral',
    badge: 'Fundamentos & Rochas',
    image: '/images/pilares/geologia-geral.jpg',
    imageAlt: 'Feição geológica em rocha costeira esculpida por processos erosivos (Geologia Geral)',
    imagePosition: 'object-[center_40%]',
    icon: Layers,
    accentColor: '#5E7C6D',
    iconColor: 'text-mineral-accent',
    iconBg: 'bg-[#5E7C6D]/10 text-mineral-accent border-[#5E7C6D]/20',
    tagClass: 'bg-[#5E7C6D]/85 text-white',
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
    actionColor: 'text-mineral-accent hover:text-[#4a6457]',
  },
  {
    id: 'roteiros-virtuais',
    title: 'Roteiros Virtuais',
    badge: 'Imersão & Campo Digital',
    image: '/images/pilares/roteiros-virtuais.jpg',
    imageAlt: 'Drone mapeando litoral para geração de roteiros virtuais e fotogrametria',
    imagePosition: 'object-center',
    icon: Compass,
    accentColor: '#2E4A62',
    iconColor: 'text-slate-accent',
    iconBg: 'bg-[#2E4A62]/10 text-slate-accent border-[#2E4A62]/20',
    tagClass: 'bg-[#2E4A62]/85 text-white',
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
    actionColor: 'text-slate-accent hover:text-[#233a4e]',
  },
  {
    id: 'ensino',
    title: 'Ensino',
    badge: 'Graduação & Educação Básica',
    image: '/images/pilares/ensino.jpg',
    imageAlt: 'Estudante utilizando tablet e recursos digitais para aprendizagem em Geociências',
    imagePosition: 'object-center',
    icon: GraduationCap,
    accentColor: '#5E7C6D',
    iconColor: 'text-mineral-accent',
    iconBg: 'bg-[#5E7C6D]/10 text-mineral-accent border-[#5E7C6D]/20',
    tagClass: 'bg-[#5E7C6D]/85 text-white',
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
    actionColor: 'text-mineral-accent hover:text-[#4a6457]',
  },
  {
    id: 'pesquisa-extensao',
    title: 'Pesquisa e Extensão',
    badge: 'Ciência & Sociedade',
    image: '/images/pilares/pesquisa-extensao.jpg',
    imageAlt: 'Pesquisador em torre de observação e campo de estudo ambiental',
    imagePosition: 'object-center',
    icon: Microscope,
    accentColor: '#2E4A62',
    iconColor: 'text-slate-accent',
    iconBg: 'bg-[#2E4A62]/10 text-slate-accent border-[#2E4A62]/20',
    tagClass: 'bg-[#2E4A62]/85 text-white',
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
    actionColor: 'text-slate-accent hover:text-[#233a4e]',
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#F4ECE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Badge superior: tag em Verde mineral sutil */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E7C6D]/15 text-[#5E7C6D] font-semibold text-xs tracking-wider uppercase mb-3">
            <span>PILARES DO GEOLOGIA VIRTUAL</span>
          </div>
          
          {/* Título: Montserrat ExtraBold em marrom earth-dark (#4A2E1B) */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A2E1B] tracking-tight font-heading">
            Por onde começar?
          </h2>
          
          {/* Subtítulo: Open Sans Regular em tom neutro suave */}
          <p className="mt-3.5 text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-sans max-w-2xl mx-auto">
            Comece por onde quiser: explore a Geologia no seu ritmo, com conteúdos, roteiros e materiais feitos para todos.
          </p>
        </div>

        {/* 4 Pillars Grid: 1 col celular, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group bg-white rounded-2xl border border-earth-muted/15 overflow-hidden shadow-sm hover:shadow-md hover:border-mineral-accent/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                    {/* Tag sutil e translúcida sobre a imagem (Verde mineral ou Azul-ardósia) */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${pillar.tagClass} backdrop-blur-sm uppercase tracking-wider shadow-2xs font-sans`}>
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Ícone com acento fino em Verde mineral ou Azul-ardósia */}
                    <div className="absolute -bottom-4 left-5">
                      <div className={`w-10 h-10 rounded-xl bg-white shadow-sm border ${pillar.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-7 p-6">
                    {/* Título do Card: Montserrat Bold em earth-dark */}
                    <h3 className="text-xl font-bold text-earth-dark group-hover:text-mineral-accent transition-colors font-heading">
                      {pillar.title}
                    </h3>

                    {/* Descrição: Open Sans peso 400 em cinza neutro (#555555), tamanho text-sm */}
                    <p className="mt-3 text-sm text-[#555555] font-normal leading-relaxed font-sans">
                      {pillar.description}
                    </p>

                    {/* Topics List: texto leve e legível */}
                    <div className="mt-5 pt-4 border-t border-earth-muted/10 space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-earth-muted/80 font-sans">
                        Tópicos & Recursos:
                      </p>
                      {pillar.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#555555] font-normal font-sans">
                          <Check className={`w-3.5 h-3.5 ${pillar.iconColor} flex-shrink-0 mt-0.5`} strokeWidth={2.25} />
                          <span className="leading-snug">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-earth-muted/10">
                    <a
                      href={pillar.actionHref}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${pillar.actionColor} transition-colors font-sans`}
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
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
