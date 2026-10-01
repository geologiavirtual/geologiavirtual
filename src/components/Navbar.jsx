import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Geologia Geral', href: '#geologia-geral' },
  { name: 'Roteiros Virtuais', href: '#roteiros-virtuais' },
  { name: 'Ensino', href: '#ensino' },
  { name: 'Pesquisa e Extensão', href: '#pesquisa-extensao' },
  { name: 'Sobre Nós', href: '#sobre-nos' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar({ activeSection = 'Início' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-geo-sand/20 ${
        scrolled
          ? 'bg-geo-surface/95 backdrop-blur-md shadow-sm py-2.5'
          : 'bg-geo-bg py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Official Title Slot */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-geo-sand/50 rounded-xl p-1 transition-transform"
          >
            {/* Slot de Logotipo Oficial: /public/images/logo.png */}
            <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-0.5 bg-geo-surface border border-geo-sand/40 shadow-sm flex items-center justify-center overflow-hidden group-hover:border-geo-earth transition-colors">
              <img
                src="/images/logo.png"
                alt="Geologia Virtual Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/images/logo-geologia-virtual.png';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-geo-dark leading-tight font-sans">
                Geologia <span className="text-geo-earth font-black">Virtual</span>
              </span>
              <span className="text-[11px] font-semibold text-geo-muted tracking-wide uppercase">
                Faculdade de Geologia • UERJ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-geo-dark font-bold bg-geo-sand/15 shadow-xs'
                      : 'text-geo-text hover:text-geo-earth hover:bg-geo-sand/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-geo-earth rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#roteiros-virtuais"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-geo-earth hover:bg-geo-dark text-white text-xs font-semibold tracking-wide uppercase shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4 text-geo-sand" />
              <span>Explorar Roteiros</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-geo-dark hover:text-geo-earth hover:bg-geo-sand/10 focus:outline-none focus:ring-2 focus:ring-geo-earth/30 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-geo-earth" />
              ) : (
                <Menu className="w-6 h-6 text-geo-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 pb-4 border-t border-geo-sand/20 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-geo-sand/20 text-geo-dark font-bold'
                        : 'text-geo-text hover:bg-geo-sand/10 hover:text-geo-earth'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-geo-earth' : 'text-geo-muted'}`} />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-geo-sand/20">
                <a
                  href="#roteiros-virtuais"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-geo-earth hover:bg-geo-dark text-white text-sm font-semibold tracking-wide shadow-sm transition-colors"
                >
                  <Compass className="w-4 h-4 text-geo-sand" />
                  <span>Explorar Acervo & Roteiros</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
