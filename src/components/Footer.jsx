import React from 'react';
import logoUerj from '../assets/logo-uerj.png';
import logoGeologiaUerj from '../assets/logo-geologia-uerj.png';
import logoGeoatlantico from '../assets/logo-geoatlantico.png';
import logoTektos from '../assets/logo-tektos.svg';
import logoLet from '../assets/logo-let.png';
import logoCetreina from '../assets/logo-cetreina.png';
import logoCnpq from '../assets/logo-cnpq.svg';
import logoGV from '../assets/logo.png';

const INSTITUTIONAL_PARTNERS = [
  {
    name: 'Universidade do Estado do Rio de Janeiro',
    shortName: 'UERJ',
    logo: logoUerj,
    website: 'https://www.uerj.br',
  },
  {
    name: 'Faculdade de Geologia - UERJ',
    shortName: 'Faculdade de Geologia',
    logo: logoGeologiaUerj,
    website: 'https://www.fgel.uerj.br',
  },
  {
    name: 'Instituto GeoAtlântico',
    shortName: 'Instituto GeoAtlântico',
    logo: logoGeoatlantico,
    website: 'https://instituto-geoatlantico.org/',
  },
  {
    name: 'Grupo de Pesquisa TEKTOS',
    shortName: 'TEKTOS',
    logo: logoTektos,
    website: '#',
  },
  {
    name: 'Laboratório LET',
    shortName: 'LET',
    logo: logoLet,
    website: '#',
  },
  {
    name: 'CETREINA / UERJ',
    shortName: 'CETREINA',
    logo: logoCetreina,
    website: 'http://www.cetreina.uerj.br',
  },
  {
    name: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
    shortName: 'CNPq',
    logo: logoCnpq,
    website: 'https://www.gov.br/cnpq',
  },
];

// Ícones SVG Inline das Redes Sociais para máxima acessibilidade e nitidez
function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/geologiavirtual/',
    ariaLabel: 'Acessar Instagram do Geologia Virtual',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/squarespace/',
    ariaLabel: 'Acessar Facebook do Geologia Virtual',
    icon: FacebookIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@GeologiaVirtual',
    ariaLabel: 'Acessar canal do YouTube do Geologia Virtual',
    icon: YouTubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-earth-dark text-[#F4ECE2] pt-12 pb-8 border-t-4 border-earth-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Identidade */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-8 border-b border-white/10 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shadow-md flex-shrink-0 border-2 border-white/20">
            <img
              src={logoGV}
              alt="Logo Oficial Geologia Virtual"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
              Geologia Virtual
            </h3>
            <p className="text-sm font-semibold text-[#F4ECE2]/95 font-sans">
              Coordenação: Prof.ª Caroline de Araujo Peixoto
            </p>
            <p className="text-xs text-stone-300 font-normal uppercase tracking-wider font-sans">
              Faculdade de Geologia — UERJ
            </p>
          </div>
        </div>

        {/* 2. Realização e Apoio Institucional */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300/90 font-heading text-center sm:text-left">
            REALIZAÇÃO E APOIO INSTITUCIONAL
          </h4>
          
          {/* Apenas os logotipos de modo bem discreto, sem cards e sem nomes */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-5">
            {INSTITUTIONAL_PARTNERS.map((partner) => {
              const content = (
                <div className="bg-white/95 hover:bg-white px-2.5 py-1.5 rounded-lg transition-all shadow-2xs hover:shadow-xs flex items-center justify-center h-9 sm:h-10">
                  <img
                    src={partner.logo}
                    alt={`Logotipo da ${partner.name}`}
                    className="max-h-full w-auto max-w-[130px] object-contain"
                  />
                </div>
              );

              if (partner.website && partner.website !== '#') {
                return (
                  <a
                    key={partner.name}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={partner.name}
                    aria-label={`Acessar site de ${partner.name}`}
                    className="inline-flex items-center justify-center transition-transform hover:scale-105"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={partner.name}
                  className="inline-flex items-center justify-center"
                  title={partner.name}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Faixa Inferior */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* À esquerda: Redes Sociais com ícones e links com aria-labels */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-[#F4ECE2] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* À direita: Copyright e Mensagem de Fechamento */}
          <div className="text-center sm:text-right space-y-0.5">
            <p className="text-xs font-semibold text-stone-200 font-sans">
              © 2026 Geologia Virtual
            </p>
            <p className="text-[11px] font-normal text-stone-300/80 font-sans">
              Desenvolvido com ciência, paixão e rochas
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
