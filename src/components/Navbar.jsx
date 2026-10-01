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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
          : 'bg-card border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Project Title Slot */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded-lg p-1 transition-transform"
          >
            <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 p-1 flex items-center justify-center shadow-sm overflow-hidden group-hover:border-secondary/40 transition-colors">
              <img
                src="/images/logo-geologia-virtual.png"
                alt="Logo Geologia Virtual"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback in case of image load delay
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full items-center justify-center bg-primary text-white rounded-lg"
              >
                <Compass className="w-6 h-6 text-secondary" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-primary leading-tight font-sans">
                Geologia <span className="text-secondary font-black">Virtual</span>
              </span>
              <span className="text-[11px] font-medium text-text-muted tracking-wide uppercase">
                Faculdade de Geologia • UERJ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-primary font-semibold bg-slate-100/80 shadow-sm'
                      : 'text-text-main hover:text-secondary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-secondary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action / Secondary CTA button & Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#roteiros-virtuais"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-semibold tracking-wide uppercase shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4 text-secondary" />
              <span>Explorar Roteiros</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-main hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 pb-4 border-t border-slate-200/80 animate-fadeIn">
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
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-text-main hover:bg-slate-50 hover:text-secondary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-slate-400'}`} />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#roteiros-virtuais"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-colors"
                >
                  <Compass className="w-4 h-4" />
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
