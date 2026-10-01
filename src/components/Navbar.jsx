import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';

const MENU_STRUCTURE = [
  {
    name: 'Início',
    href: '#inicio',
    type: 'link',
  },
  {
    name: 'Geologia Geral',
    href: '#geologia-geral',
    type: 'dropdown',
    items: [
      { name: 'Geologia sem Mistério', href: '#geologia-sem-misterio' },
      { name: 'Processos que modelam a paisagem', href: '#processos-paisagem' },
    ],
  },
  {
    name: 'Roteiros Virtuais',
    href: '#roteiros-virtuais',
    type: 'dropdown',
    items: [
      { name: 'Arpoador', href: '#arpoador' },
      { name: 'Trilhas Urbanas', href: '#trilhas-urbanas' },
    ],
  },
  {
    name: 'Ensino',
    href: '#ensino',
    type: 'dropdown',
    items: [
      { name: 'Cartografia Geológica', href: '#cartografia-geologica' },
      { name: 'Mapeamento Geológico I', href: '#mapeamento-1' },
      { name: 'Mapeamento Geológico II', href: '#mapeamento-2' },
      { name: 'Materiais educativos', href: '#materiais-educativos' },
      {
        name: 'Jogos',
        href: '#jogos',
        type: 'nested',
        subitems: [
          { name: 'Caça-palavras', href: '#caca-palavras' },
          { name: 'Forca', href: '#forca' },
        ],
      },
    ],
  },
  {
    name: 'Pesquisa e Extensão',
    href: '#pesquisa-extensao',
    type: 'dropdown',
    items: [
      { name: 'Projetos e programas', href: '#projetos-programas' },
      { name: 'Produtos desenvolvidos', href: '#produtos-desenvolvidos' },
    ],
  },
  {
    name: 'Publicações',
    href: '#publicacoes',
    type: 'link',
  },
  {
    name: 'Sobre nós',
    href: '#sobre-nos',
    type: 'link',
  },
  {
    name: 'Contato',
    href: '#contato',
    type: 'link',
  },
];

const LANGUAGES = [
  { code: 'PT', label: 'Português', flag: 'BR' },
  { code: 'EN', label: 'English', flag: 'US' },
  { code: 'ES', label: 'Español', flag: 'ES' },
];

export default function Navbar({ activeSection = 'Início' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const [mobileNestedJogos, setMobileNestedJogos] = useState(false);
  const [selectedLang, setSelectedLang] = useState('PT');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (menuName) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#F4ECE2]/95 backdrop-blur-md shadow-xs border-earth-muted/20 py-2'
          : 'bg-[#F4ECE2]/90 backdrop-blur-md border-earth-muted/15 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo & Official Title Slot */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-slate-accent/30 rounded-xl p-1 transition-transform flex-shrink-0"
          >
            <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-white border border-earth-muted/30 shadow-2xs flex items-center justify-center overflow-hidden group-hover:border-slate-accent transition-colors">
              <img
                src={logoImg}
                alt="Geologia Virtual Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-earth-dark leading-tight font-heading">
                Geologia <span className="text-mineral-accent font-black">Virtual</span>
              </span>
              <span className="text-[10px] font-medium text-earth-muted tracking-wider uppercase font-sans">
                Faculdade de Geologia • UERJ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Navegação principal">
            {MENU_STRUCTURE.map((item) => {
              if (item.type === 'link') {
                const isActive = activeSection === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-semibold font-heading transition-all duration-150 relative ${
                      isActive
                        ? 'text-earth-dark bg-white/70 shadow-2xs'
                        : 'text-earth-dark/90 hover:text-mineral-accent hover:bg-white/40'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              }

              // Dropdown Item with ▾ indicator ONLY on items with submenu
              const isDropdownOpen = activeDropdown === item.name;
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : item.name)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-semibold font-heading transition-all duration-150 ${
                      isDropdownOpen
                        ? 'text-earth-dark bg-white/80 shadow-2xs'
                        : 'text-earth-dark/90 hover:text-mineral-accent hover:bg-white/40'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-mineral-accent' : 'text-earth-muted/80'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Dropdown Menu Box */}
                  {isDropdownOpen && (
                    <div
                      className="absolute left-0 mt-1 w-60 rounded-xl bg-white border border-earth-muted/20 shadow-lg py-2 z-50 animate-fadeIn"
                      role="menu"
                      aria-label={item.name}
                    >
                      {item.items.map((subitem) => {
                        // Nested Dropdown for "Jogos" inside "Ensino"
                        if (subitem.type === 'nested') {
                          return (
                            <div key={subitem.name} className="relative group/nested px-2 py-1">
                              <div className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-earth-dark hover:bg-slate-50 hover:text-mineral-accent cursor-pointer font-heading">
                                <span>{subitem.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-earth-muted" />
                              </div>

                              {/* Nested Submenu (Flyout) */}
                              <div className="hidden group-hover/nested:block absolute left-full top-0 ml-1 w-44 rounded-xl bg-white border border-earth-muted/20 shadow-lg py-1 z-50">
                                {subitem.subitems.map((nested) => (
                                  <a
                                    key={nested.name}
                                    href={nested.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block px-3.5 py-2 text-xs font-normal text-text-body hover:bg-slate-50 hover:text-mineral-accent transition-colors font-sans"
                                    role="menuitem"
                                  >
                                    {nested.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // Regular Submenu item
                        return (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-xs font-normal text-text-body hover:bg-[#F4ECE2]/50 hover:text-earth-dark transition-colors font-sans"
                            role="menuitem"
                          >
                            {subitem.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Area: Language Selector & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            
            {/* Seletor de Idioma [PT ▾] no extremo direito */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
                aria-label="Selecionar idioma"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-earth-muted/25 bg-white/70 hover:bg-white text-earth-dark text-xs font-semibold font-heading shadow-2xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-mineral-accent" />
                <span>{selectedLang}</span>
                <ChevronDown className={`w-3 h-3 text-earth-muted transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-1 w-36 rounded-xl bg-white border border-earth-muted/20 shadow-lg py-1 z-50 animate-fadeIn"
                  role="menu"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-sans flex items-center justify-between transition-colors ${
                        selectedLang === lang.code
                          ? 'font-bold text-mineral-accent bg-[#F4ECE2]/50'
                          : 'text-text-body hover:bg-slate-50'
                      }`}
                      role="menuitem"
                    >
                      <span>{lang.label}</span>
                      <span className="font-mono text-[10px] text-earth-muted/70">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-earth-dark hover:text-mineral-accent hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-slate-accent/30 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-earth-dark" />
              ) : (
                <Menu className="w-6 h-6 text-earth-dark" />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 pt-3 pb-5 border-t border-earth-muted/15 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {MENU_STRUCTURE.map((item) => {
                if (item.type === 'link') {
                  const isActive = activeSection === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold font-heading transition-colors ${
                        isActive
                          ? 'bg-white text-earth-dark font-bold'
                          : 'text-earth-dark hover:bg-white/60 hover:text-mineral-accent'
                      }`}
                    >
                      <span>{item.name}</span>
                    </a>
                  );
                }

                // Dropdown Accordion on Mobile
                const isOpen = !!openMobileSubmenus[item.name];
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      aria-expanded={isOpen}
                      className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-sm font-semibold font-heading text-earth-dark hover:bg-white/60 transition-colors text-left"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-earth-muted transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-mineral-accent' : ''
                        }`}
                      />
                    </button>

                    {/* Accordion Content */}
                    {isOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-white/40 rounded-xl my-1 border-l-2 border-mineral-accent/40">
                        {item.items.map((subitem) => {
                          if (subitem.type === 'nested') {
                            return (
                              <div key={subitem.name} className="flex flex-col">
                                <button
                                  type="button"
                                  onClick={() => setMobileNestedJogos(!mobileNestedJogos)}
                                  className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold font-heading text-earth-dark hover:text-mineral-accent text-left"
                                >
                                  <span>{subitem.name}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      mobileNestedJogos ? 'rotate-180 text-mineral-accent' : ''
                                    }`}
                                  />
                                </button>
                                {mobileNestedJogos && (
                                  <div className="pl-3 py-1 space-y-1 border-l border-earth-muted/20 my-1">
                                    {subitem.subitems.map((nested) => (
                                      <a
                                        key={nested.name}
                                        href={nested.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-1.5 text-xs text-text-body font-sans hover:text-mineral-accent"
                                      >
                                        {nested.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return (
                            <a
                              key={subitem.name}
                              href={subitem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-xs text-text-body font-sans hover:text-mineral-accent transition-colors"
                            >
                              {subitem.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
