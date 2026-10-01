import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsGrid from './components/PillarsGrid';
import PaletteShowcase from './components/PaletteShowcase';
import AboutAndContact from './components/AboutAndContact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('Início');

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main font-sans selection:bg-secondary/20 selection:text-secondary">
      {/* Global Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Design System & Theme Palette Indicator */}
        <PaletteShowcase />

        {/* 4 Pillars Grid (Geologia Geral, Roteiros Virtuais, Ensino, Pesquisa e Extensão) */}
        <PillarsGrid />

        {/* About & Institutional Contact */}
        <AboutAndContact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
