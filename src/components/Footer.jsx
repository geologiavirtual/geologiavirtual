import React from 'react';
import { Mail, Compass, ExternalLink, Globe, ShieldCheck } from 'lucide-react';

const INSTITUTIONAL_PARTNERS = [
  {
    name: 'Faculdade de Geologia - UERJ',
    shortName: 'FGEL / UERJ',
    tag: 'Unidade Acadêmica',
    logo: '/images/logo-geologia-uerj.jpg',
    website: 'https://www.fgel.uerj.br',
    fit: 'object-contain',
  },
  {
    name: 'UERJ',
    shortName: 'Univ. do Estado do Rio de Janeiro',
    tag: 'Instituição Sede',
    logo: '/images/logo-uerj.png',
    website: 'https://www.uerj.br',
    fit: 'object-contain p-1',
  },
  {
    name: 'Cetreina',
    shortName: 'Estágios & Bolsas UERJ',
    tag: 'Apoio & Fomento',
    logo: '/images/logo-cetreina.jpg',
    website: 'http://www.cetreina.uerj.br',
    fit: 'object-contain',
  },
  {
    name: 'Instituto Geoatlantico',
    shortName: 'Instituto GeoAtlântico',
    tag: 'Cooperação Científica',
    logo: '/images/logo-geoatlantico.svg',
    website: '#',
    fit: 'object-contain',
  },
  {
    name: 'Tektos',
    shortName: 'Grupo de Pesquisa TEKTOS',
    tag: 'Tectônica & Modelagem',
    logo: '/images/logo-tektos.svg',
    website: '#',
    fit: 'object-contain',
  },
  {
    name: 'Let',
    shortName: 'Laboratório LET',
    tag: 'Estratigrafia & Tectônica',
    logo: '/images/logo-let.svg',
    website: '#',
    fit: 'object-contain',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-geo-dark text-geo-bg pt-16 pb-10 border-t-4 border-geo-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-geo-sand/20">
          
          {/* Col 1: Project Identity & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Logo Oficial: /public/images/logo.png */}
              <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shadow-md flex-shrink-0 border-2 border-geo-sand/50">
                <img
                  src="/images/logo.png"
                  alt="Logo Geologia Virtual"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = '/images/logo-geologia-virtual.png';
                  }}
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
                  Geologia <span className="text-geo-sand font-black">Virtual</span>
                </span>
                <p className="text-xs text-geo-sand/90 font-medium">Faculdade de Geologia - UERJ</p>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed pr-2">
              Projeto de ensino, pesquisa e extensão da Faculdade de Geologia - UERJ.
              Desenvolvido para conectar a comunidade científica, acadêmica e escolar
              com o universo das Geociências por meio de experiências digitais e acervos abertos.
            </p>

            {/* E-mail de Contato Institucional */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-geo-sand font-bold mb-2">
                E-mail Institucional de Contato
              </p>
              <a
                href="mailto:geologiaemambientevirtual@gmail.com"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-geo-sand text-sm font-medium border border-geo-sand/30 transition-colors group"
              >
                <Mail className="w-4 h-4 text-geo-sand group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs sm:text-sm">geologiaemambientevirtual@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Apoio Institucional & Realização */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm uppercase tracking-wider text-geo-sand font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-geo-sand" />
                <span>Apoio Institucional & Realização</span>
              </h3>
              <span className="text-[11px] text-stone-300/80">
                Parcerias, Laboratórios e Fomento
              </span>
            </div>

            {/* Grid dos Parceiros Institucionais: Faculdade de Geologia - UERJ, UERJ, Cetreina, Instituto Geoatlantico, Tektos, Let */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {INSTITUTIONAL_PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="group bg-white rounded-xl p-3 border border-geo-sand/30 hover:border-geo-sand hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Container do Logo com fundo branco para contraste limpo */}
                  <div className="h-16 w-full flex items-center justify-center p-1.5 mb-2 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`max-h-full max-w-full ${partner.fit} group-hover:scale-105 transition-transform duration-200`}
                    />
                  </div>

                  <div className="pt-1.5 border-t border-slate-100 space-y-0.5">
                    <span className="inline-block text-[10px] font-bold text-geo-earth uppercase tracking-wider">
                      {partner.tag}
                    </span>
                    <p className="text-xs font-bold text-geo-dark leading-tight line-clamp-1">
                      {partner.name}
                    </p>
                    <p className="text-[10px] text-geo-muted truncate">
                      {partner.shortName}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-stone-400 mt-3 text-right">
              Faculdade de Geologia - UERJ • Instituto GeoAtlântico • TEKTOS • LET • Cetreina
            </p>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.uerj.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-geo-sand transition-colors flex items-center gap-1.5"
            >
              <span>Portal UERJ</span>
              <ExternalLink className="w-3 h-3 text-geo-sand" />
            </a>
            <a
              href="https://www.fgel.uerj.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-geo-sand transition-colors flex items-center gap-1.5"
            >
              <span>Faculdade de Geologia</span>
              <ExternalLink className="w-3 h-3 text-geo-sand" />
            </a>
            <a
              href="http://www.geologiavirtual.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-geo-sand transition-colors flex items-center gap-1.5"
            >
              <span>geologiavirtual.org</span>
              <Globe className="w-3 h-3 text-geo-sand" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p>
              © {currentYear} <strong className="text-white">Geologia Virtual</strong> — Faculdade de Geologia (FGEL / UERJ).
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Todos os direitos reservados • Difusão científica e acadêmica em Geociências.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
