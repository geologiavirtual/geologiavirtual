import React from 'react';
import { Mail, MapPin, Building, GraduationCap, Users, Shield, ArrowUpRight } from 'lucide-react';

export default function AboutAndContact() {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Sobre Nós Section */}
        <div id="sobre-nos" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-secondary" />
              <span>Sobre o Projeto</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Faculdade de Geologia da UERJ inovando na difusão científica
            </h2>

            <p className="text-base text-text-muted leading-relaxed">
              O <strong>Geologia Virtual</strong> nasceu como uma iniciativa acadêmica voltada a integrar
              as novas tecnologias de informação e comunicação ao ensino de Geologia e Geociências. O portal
              reúne acervos fotográficos de minerais e rochas, modelos digitais tridimensionais de estruturas e
              afloramentos, roteiros interativos de campo e guias temáticos abertos para toda a comunidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-card border border-slate-200">
                <span className="font-bold text-primary text-sm block mb-1">Missão Didática</span>
                <p className="text-xs text-text-muted">
                  Democratizar o acesso a materiais didáticos geológicos de alta precisão para escolas e universidades.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-slate-200">
                <span className="font-bold text-secondary text-sm block mb-1">Inovação e Campo</span>
                <p className="text-xs text-text-muted">
                  Possibilitar a exploração pré-campo e pós-campo por meio de digitalizações e roteiros 360°.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-card rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
            {/* Slot de Logotipo em Destaque */}
            <div className="w-28 h-28 rounded-2xl bg-slate-50 border-2 border-dashed border-secondary/40 p-3 flex items-center justify-center mb-4 relative group">
              <img
                src="/images/logo-geologia-virtual.png"
                alt="Logo Oficial Geologia Virtual"
                className="w-full h-full object-contain"
              />
              <span className="absolute -bottom-2 px-2 py-0.5 rounded bg-primary text-white text-[10px] font-mono font-semibold">
                Slot de Logo
              </span>
            </div>

            <h3 className="text-lg font-bold text-primary">Identidade Visual do Portal</h3>
            <p className="text-xs text-text-muted mt-1 max-w-xs">
              Arquivo em <code className="text-secondary font-mono">/public/images/logo-geologia-virtual.png</code>
            </p>

            <div className="w-full mt-6 pt-5 border-t border-slate-100 text-left space-y-2 text-xs text-text-muted">
              <div className="flex items-center justify-between">
                <span>Coordenação:</span>
                <span className="font-semibold text-text-main">Faculdade de Geologia (FGEL)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Instituição:</span>
                <span className="font-semibold text-text-main">UERJ - Maracanã</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Domínio oficial:</span>
                <span className="font-semibold text-secondary font-mono">geologiavirtual.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contato Section */}
        <div id="contato" className="bg-card rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Canal Institucional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
                Fale com a equipe do Geologia Virtual
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Tem dúvidas sobre materiais didáticos, sugestões de novos roteiros virtuais, parcerias de
                pesquisa ou deseja agendar ações de extensão para sua escola ou instituição?
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex-1">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  E-mail Oficial do Projeto:
                </span>
                <a
                  href="mailto:geologiaemambientevirtual@gmail.com"
                  className="font-mono text-sm sm:text-base font-bold text-primary hover:text-secondary break-all transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>geologiaemambientevirtual@gmail.com</span>
                </a>
              </div>

              <a
                href="mailto:geologiaemambientevirtual@gmail.com"
                className="px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 flex-shrink-0"
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
