import React from 'react';
import { Layers, Compass, GraduationCap, Microscope, ArrowRight, Check } from 'lucide-react';
import imgGeologiaGeral from '../assets/pilares/geologia-geral.jpg';
import imgRoteirosVirtuais from '../assets/pilares/roteiros-virtuais.jpg';
import imgEnsino from '../assets/pilares/ensino.jpg';
import imgPesquisaExtensao from '../assets/pilares/pesquisa-extensao.jpg';

const PILLARS = [
  {
    id: 'geologia-geral',
    title: 'Geologia Geral',
    badge: 'FUNDAMENTOS DA GEOLOGIA',
    image: imgGeologiaGeral,
    imageAlt: 'Feição geológica em rocha costeira esculpida por processos erosivos (Geologia Geral)',
    imagePosition: 'object-[center_40%]',
    icon: Layers,
    accentColor: '#5E7C6D',
    iconColor: 'text-mineral-accent',
    iconBg: 'bg-[#5E7C6D]/10 text-mineral-accent border-[#5E7C6D]/30',
    tagClass: 'bg-[#5E7C6D]/90 text-white',
    description:
      'Entenda como a Terra funciona, seus materiais, sua história e os processos que transformam o planeta e suas paisagens.',
    topics: [
      'Geologia sem Mistério',
      'Processos que modelam a paisagem',
      'Conceitos fundamentais das Geociências',
      'Textos, imagens e materiais educativos',
    ],
    actionText: 'Explorar Geologia Geral →',
    actionHref: '#geologia-geral',
    actionColor: 'text-mineral-accent hover:text-[#4a6457]',
  },
  {
    id: 'roteiros-virtuais',
    title: 'Roteiros Virtuais',
    badge: 'EXPERIÊNCIAS DE CAMPO',
    image: imgRoteirosVirtuais,
    imageAlt: 'Drone mapeando litoral para geração de roteiros virtuais e fotogrametria',
    imagePosition: 'object-center',
    icon: Compass,
    accentColor: '#2E4A62',
    iconColor: 'text-slate-accent',
    iconBg: 'bg-[#2E4A62]/10 text-slate-accent border-[#2E4A62]/30',
    tagClass: 'bg-[#2E4A62]/90 text-white',
    description:
      'Explore paisagens, afloramentos e pontos de interesse geológico em roteiros digitais que aproximam a experiência de campo de onde você estiver.',
    topics: [
      'Arpoador',
      'Trilhas Urbanas',
      'Paisagens e afloramentos em ambiente virtual',
      'Mapas, imagens e recursos interativos',
    ],
    actionText: 'Explorar Roteiros Virtuais →',
    actionHref: '#roteiros-virtuais',
    actionColor: 'text-slate-accent hover:text-[#233a4e]',
  },
  {
    id: 'ensino',
    title: 'Ensino',
    badge: 'PARA APRENDER E ENSINAR',
    image: imgEnsino,
    imageAlt: 'Estudante utilizando tablet e recursos digitais para aprendizagem em Geociências',
    imagePosition: 'object-center',
    icon: GraduationCap,
    accentColor: '#5E7C6D',
    iconColor: 'text-mineral-accent',
    iconBg: 'bg-[#5E7C6D]/10 text-mineral-accent border-[#5E7C6D]/30',
    tagClass: 'bg-[#5E7C6D]/90 text-white',
    description:
      'Encontre conteúdos e recursos digitais para apoiar o aprendizado e o ensino de Geologia, dentro e fora da sala de aula.',
    topics: [
      'Cartografia Geológica',
      'Mapeamento Geológico I e II',
      'Materiais educativos',
      'Jogos e atividades',
    ],
    actionText: 'Explorar recursos de Ensino →',
    actionHref: '#ensino',
    actionColor: 'text-mineral-accent hover:text-[#4a6457]',
  },
  {
    id: 'pesquisa-extensao',
    title: 'Pesquisa e Extensão',
    badge: 'CONHECIMENTO EM AÇÃO',
    image: imgPesquisaExtensao,
    imageAlt: 'Pesquisador em torre de observação e campo de estudo ambiental',
    imagePosition: 'object-center',
    icon: Microscope,
    accentColor: '#2E4A62',
    iconColor: 'text-slate-accent',
    iconBg: 'bg-[#2E4A62]/10 text-slate-accent border-[#2E4A62]/30',
    tagClass: 'bg-[#2E4A62]/90 text-white',
    description:
      'Conheça os projetos que transformam pesquisa, ensino e extensão em experiências, materiais e ações que aproximam a universidade da sociedade.',
    topics: [
      'Projetos e programas',
      'Produtos desenvolvidos',
      'Iniciação Científica e Extensão',
      'Divulgação das Geociências',
    ],
    actionText: 'Conhecer projetos e ações →',
    actionHref: '#pesquisa-extensao',
    actionColor: 'text-slate-accent hover:text-[#233a4e]',
  },
];

export default function PillarsGrid() {
  return (
    <section id="por-onde-comecar" className="pt-7 sm:pt-9 pb-14 sm:pb-20 bg-[#F4ECE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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
            Comece por onde quiser: explore a Geologia no seu ritmo e descubra diferentes caminhos para conhecer as Ciências da Terra.
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
                className="group bg-white rounded-2xl border border-earth-muted/15 shadow-sm hover:shadow-md hover:border-mineral-accent/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
              >
                <div>
                  {/* Photo Container com cantos superiores arredondados e overflow-hidden para o zoom */}
                  <div className="relative rounded-t-2xl overflow-hidden h-48 w-full bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className={`w-full h-full object-cover ${pillar.imagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay for photo depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Tag sutil e translúcida sobre a imagem */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${pillar.tagClass} backdrop-blur-sm uppercase tracking-wider shadow-xs font-sans`}>
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Ícone flutuante: trazido TOTALMENTE PARA FRENTE (fora de qualquer overflow-hidden, z-20) */}
                  <div className="relative px-6">
                    <div className="absolute -top-6 left-6 z-20">
                      <div className={`w-12 h-12 rounded-xl bg-white shadow-md border-2 ${pillar.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${pillar.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-8 p-6">
                    {/* Título do Card: Montserrat Bold em earth-dark */}
                    <h3 className="text-xl font-bold text-earth-dark group-hover:text-mineral-accent transition-colors font-heading">
                      {pillar.title}
                    </h3>

                    {/* Descrição: Open Sans peso 400 em cinza neutro (#555555), tamanho text-sm */}
                    <p className="mt-3 text-sm text-[#555555] font-normal leading-relaxed font-sans min-h-[4.5rem]">
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
                      className={`inline-flex items-center text-xs font-bold ${pillar.actionColor} transition-colors font-heading tracking-wide group/btn hover:translate-x-0.5 duration-200`}
                    >
                      <span>{pillar.actionText}</span>
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
