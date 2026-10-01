import React from 'react';
import { Mail, Compass, ExternalLink, Globe, Heart, ShieldCheck } from 'lucide-react';

const INSTITUTIONAL_PARTNERS = [
  {
    name: 'UERJ',
    fullName: 'Universidade do Estado do Rio de Janeiro',
    tag: 'Instituição Sede',
    desc: 'Campus Maracanã • Rio de Janeiro',
    color: 'from-blue-900 to-blue-700',
  },
  {
    name: 'FGEL',
    fullName: 'Faculdade de Geologia',
    tag: 'Unidade Acadêmica',
    desc: 'Ensino, pesquisa e campo geológico',
    color: 'from-emerald-900 to-teal-800',
  },
  {
    name: 'Cetreina',
    fullName: 'Departamento de Estágios e Bolsas',
    tag: 'Apoio e Fomento UERJ',
    desc: 'Formação discente e bolsas acadêmicas',
    color: 'from-amber-900 to-amber-700',
  },
  {
    name: 'CNPq',
    fullName: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
    tag: 'Fomento Científico',
    desc: 'Iniciação científica e pesquisa',
    color: 'from-sky-900 to-indigo-800',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Project Identity & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-card p-1 flex items-center justify-center shadow-md">
                <img
                  src="/images/logo-geologia-virtual.png"
                  alt="Logo Geologia Virtual"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Compass style={{ display: 'none' }} className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Geologia <span className="text-secondary font-black">Virtual</span>
                </span>
                <p className="text-xs text-slate-300">Faculdade de Geologia - UERJ</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Projeto de ensino, pesquisa e extensão da Faculdade de Geologia - UERJ dedicado à
              difusão do conhecimento geocientífico por meio de tecnologias digitais, modelos 3D,
              roteiros de campo virtuais e recursos educacionais abertos.
            </p>

            {/* Institutional Contact Email */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Contato Institucional
              </p>
              <a
                href="mailto:geologiaemambientevirtual@gmail.com"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-100 hover:text-white text-sm font-medium border border-white/10 transition-colors group"
              >
                <Mail className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs sm:text-sm">geologiaemambientevirtual@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Institutional Logos Grid (UERJ, FGEL, Cetreina, CNPq) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Apoio Institucional & Realização</span>
              </h3>
              <span className="text-[11px] text-slate-400">UERJ • FGEL</span>
            </div>

            {/* Grid of Institutional Logos Placeholders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {INSTITUTIONAL_PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 rounded-xl p-3.5 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Logo Slot Placeholder */}
                  <div className="h-12 w-full rounded-lg bg-card/10 flex items-center justify-center border border-white/10 group-hover:border-secondary/40 transition-colors mb-2.5 px-2">
                    <span className="text-base font-extrabold tracking-wider text-white group-hover:text-secondary transition-colors">
                      {partner.name}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="inline-block text-[10px] font-semibold text-secondary uppercase tracking-wider">
                      {partner.tag}
                    </span>
                    <p className="text-xs font-semibold text-slate-200 leading-tight">
                      {partner.fullName}
                    </p>
                    <p className="text-[10px] text-slate-400 pt-0.5">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 mt-3 text-right">
              Espaço reservado para inserção dos logotipos vetoriais e arquivos PNG de alta resolução.
            </p>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.uerj.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Portal UERJ</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://www.fgel.uerj.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Faculdade de Geologia</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="http://www.geologiavirtual.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>geologiavirtual.org</span>
              <Globe className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p>
              © {currentYear} <strong>Geologia Virtual</strong> — Faculdade de Geologia (FGEL / UERJ).
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Todos os direitos reservados • Conteúdo para fins educacionais e científicos.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
