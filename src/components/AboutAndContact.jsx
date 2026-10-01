import React from 'react';
import { Mail, MapPin, Building, GraduationCap, Users, Shield, ArrowUpRight } from 'lucide-react';

export default function AboutAndContact() {
  return (
    <section className="py-16 sm:py-20 bg-geo-bg border-t border-geo-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Sobre Nós Section */}
        <div id="sobre-nos" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-geo-sand/20 text-geo-dark text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-geo-earth" />
              <span>Sobre o Projeto</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-geo-dark tracking-tight">
              Faculdade de Geologia da UERJ inovando na difusão científica
            </h2>

            <p className="text-base text-geo-muted leading-relaxed">
              O <strong>Geologia Virtual</strong> nasceu como uma iniciativa acadêmica pioneira para integrar
              as tecnologias de informação e comunicação ao ensino e à difusão das Geociências. O portal
              reúne acervos de minerais e rochas, modelos tridimensionais de afloramentos, cadernos interativos
              de campo e guias temáticos abertos para toda a comunidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-geo-sand/30 shadow-xs">
                <span className="font-bold text-geo-dark text-sm block mb-1">Missão Didática</span>
                <p className="text-xs text-geo-muted">
                  Democratizar o acesso a materiais didáticos geológicos interativos para universidades e escolas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-geo-sand/30 shadow-xs">
                <span className="font-bold text-geo-earth text-sm block mb-1">Inovação e Campo</span>
                <p className="text-xs text-geo-muted">
                  Possibilitar a exploração pré e pós-campo com digitalização 3D e roteiros 360° georreferenciados.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl border border-geo-sand/30 p-8 shadow-sm flex flex-col items-center text-center">
            {/* Slot de Logotipo Oficial em Destaque */}
            <div className="w-36 h-36 rounded-full bg-geo-bg border-2 border-geo-sand/50 p-2 flex items-center justify-center mb-4 relative group shadow-sm">
              <img
                src="/images/logo.png"
                alt="Logo Oficial Geologia Virtual"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = '/images/logo-geologia-virtual.png';
                }}
              />
              <span className="absolute -bottom-2.5 px-2.5 py-0.5 rounded-full bg-geo-dark text-white text-[10px] font-mono font-bold border border-geo-sand">
                /public/images/logo.png
              </span>
            </div>

            <h3 className="text-lg font-bold text-geo-dark mt-2">Identidade Visual Oficial</h3>
            <p className="text-xs text-geo-muted mt-1 max-w-xs">
              Símbolo representativo das camadas estratigráficas, relevo montanhoso, o globo e a localização digital.
            </p>

            <div className="w-full mt-6 pt-5 border-t border-geo-sand/15 text-left space-y-2 text-xs text-geo-muted">
              <div className="flex items-center justify-between">
                <span>Coordenação:</span>
                <span className="font-semibold text-geo-dark">Faculdade de Geologia (FGEL)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Instituição:</span>
                <span className="font-semibold text-geo-dark">UERJ - Maracanã</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Domínio:</span>
                <span className="font-semibold text-geo-earth font-mono">geologiavirtual.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contato Section */}
        <div id="contato" className="bg-white rounded-2xl border border-geo-sand/30 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-geo-sand/20 text-geo-dark text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-geo-earth" />
                <span>Canal Institucional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-geo-dark">
                Fale com a equipe do Geologia Virtual
              </h3>
              <p className="text-sm text-geo-muted leading-relaxed">
                Tem dúvidas sobre materiais didáticos, sugestões de novos roteiros virtuais, parcerias de
                pesquisa ou deseja agendar ações de extensão para sua escola ou instituição?
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
              <div className="p-4 rounded-xl bg-geo-bg border border-geo-sand/30 flex-1">
                <span className="text-[11px] uppercase font-bold text-geo-muted block mb-1">
                  E-mail Oficial do Projeto:
                </span>
                <a
                  href="mailto:geologiaemambientevirtual@gmail.com"
                  className="font-mono text-sm sm:text-base font-bold text-geo-dark hover:text-geo-earth break-all transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-geo-earth flex-shrink-0" />
                  <span>geologiaemambientevirtual@gmail.com</span>
                </a>
              </div>

              <a
                href="mailto:geologiaemambientevirtual@gmail.com"
                className="px-6 py-4 rounded-xl bg-geo-earth hover:bg-geo-dark text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 flex-shrink-0"
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
