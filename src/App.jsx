import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsGrid from './components/PillarsGrid';
import AboutAndContact from './components/AboutAndContact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('Início');

  return (
    <div className="min-h-screen flex flex-col bg-geo-bg text-geo-text font-sans selection:bg-geo-earth/20 selection:text-geo-dark">
      {/* Global Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Banner Hero no topo da página */}
        <Hero />

        {/* Pilares Estruturais (Por onde começar?) imediatamente abaixo do banner */}
        <PillarsGrid />

        {/* Sobre Nós & Contato Institucional */}
        <AboutAndContact />
      </main>

      {/* Global Footer com Apoio Institucional */}
      <Footer />
    </div>
  );
}
