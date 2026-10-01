import React from 'react';
import { Mail, Users, ArrowUpRight } from 'lucide-react';
import logoGV from '../assets/logo.png';

export default function AboutAndContact() {
  return (
    <section className="py-16 sm:py-20 bg-[#F4ECE2] border-t border-earth-muted/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Sobre Nós Section */}
        <div id="sobre-nos" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E7C6D]/15 text-mineral-accent text-xs font-semibold tracking-wider uppercase font-sans">
              <Users className="w-3.5 h-3.5" />
              <span>Sobre o Projeto</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-dark tracking-tight font-heading">
              Faculdade de Geologia da UERJ inovando na difusão científica
            </h2>

            <p className="text-base text-text-body font-normal leading-relaxed font-sans">
              O <strong className="font-semibold text-earth-dark">Geologia Virtual</strong> nasceu como uma iniciativa acadêmica pioneira para integrar
              as tecnologias digitais de informação e comunicação ao ensino e à difusão das Geociências. O portal
              reúne acervos de minerais e rochas, modelos tridimensionais de afloramentos, cadernos interativos
              de campo e guias temáticos abertos para toda a comunidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-earth-muted/15 shadow-xs">
                <span className="font-bold text-earth-dark text-sm block mb-1 font-heading">Missão Didática</span>
                <p className="text-xs text-text-body font-normal font-sans leading-relaxed">
                  Democratizar o acesso a materiais didáticos geológicos interativos para universidades e escolas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-earth-muted/15 shadow-xs">
                <span className="font-bold text-mineral-accent text-sm block mb-1 font-heading">Inovação e Campo</span>
                <p className="text-xs text-text-body font-normal font-sans leading-relaxed">
                  Possibilitar a exploração pré e pós-campo com digitalização 3D e roteiros 360° georreferenciados.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl border border-earth-muted/15 p-8 shadow-xs flex flex-col items-center text-center">
            {/* Slot de Logotipo Oficial em Destaque */}
            <div className="w-36 h-36 rounded-full bg-[#F4ECE2]/60 border-2 border-earth-muted/20 p-2 flex items-center justify-center mb-4 relative group shadow-xs">
              <img
                src={logoGV}
                alt="Logo Oficial Geologia Virtual"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-earth-dark mt-2 font-heading">Identidade Visual Oficial</h3>
            <p className="text-xs text-text-body font-normal font-sans mt-1 max-w-xs leading-relaxed">
              Símbolo representativo das camadas estratigráficas, relevo montanhoso, globo e marcador digital.
            </p>

            <div className="w-full mt-6 pt-5 border-t border-earth-muted/10 text-left space-y-2 text-xs text-text-body font-sans">
              <div className="flex items-center justify-between">
                <span className="text-earth-muted">Coordenação:</span>
                <span className="font-semibold text-earth-dark">Faculdade de Geologia (FGEL)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-earth-muted">Instituição:</span>
                <span className="font-semibold text-earth-dark">UERJ - Maracanã</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-earth-muted">Domínio Oficial:</span>
                <span className="font-semibold text-slate-accent font-mono">geologiavirtual.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Publicações Section */}
        <div id="publicacoes" className="bg-white rounded-2xl border border-earth-muted/15 p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mineral-accent/15 text-mineral-accent text-xs font-semibold tracking-wider uppercase font-sans">
                <span>Acervo Científico & Didático</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-earth-dark font-heading">
                Publicações e Produções Acadêmicas
              </h3>
              <p className="text-sm text-text-body font-normal leading-relaxed font-sans">
                Artigos científicos, resumos em congressos, guias de campo e recursos educacionais abertos
                desenvolvidos pelos pesquisadores e bolsistas do projeto Geologia Virtual - UERJ.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-earth-muted/25 text-earth-dark hover:border-mineral-accent hover:text-mineral-accent text-xs font-semibold font-heading uppercase tracking-wider transition-colors shadow-2xs"
              >
                <span>Solicitar Publicações</span>
                <ArrowUpRight className="w-4 h-4 text-mineral-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Contato Section */}
        <div id="contato" className="bg-white rounded-2xl border border-earth-muted/15 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-accent/10 text-slate-accent text-xs font-semibold tracking-wider uppercase font-sans">
                <Mail className="w-3.5 h-3.5" />
                <span>Canal Institucional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-earth-dark font-heading">
                Fale com a equipe do Geologia Virtual
              </h3>
              <p className="text-sm text-text-body font-normal leading-relaxed font-sans">
                Tem dúvidas sobre materiais didáticos, sugestões de novos roteiros virtuais, parcerias de
                pesquisa ou deseja agendar ações de extensão para sua escola ou instituição?
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
              <div className="p-4 rounded-xl bg-[#F4ECE2]/60 border border-earth-muted/20 flex-1">
                <span className="text-[11px] uppercase font-semibold text-earth-muted block mb-1 font-sans">
                  E-mail Oficial do Projeto:
                </span>
                <a
                  href="mailto:geologiaemambientevirtual@gmail.com"
                  className="font-mono text-sm sm:text-base font-semibold text-earth-dark hover:text-slate-accent break-all transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-slate-accent flex-shrink-0" />
                  <span>geologiaemambientevirtual@gmail.com</span>
                </a>
              </div>

              <a
                href="mailto:geologiaemambientevirtual@gmail.com"
                className="px-6 py-3.5 rounded-full bg-slate-accent hover:bg-[#233a4e] text-white font-semibold font-sans text-xs tracking-wider uppercase shadow-xs hover:shadow transition-all text-center flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Enviar E-mail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
