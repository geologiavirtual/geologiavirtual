import React, { useState } from 'react';
import { Mail, Users, CheckCircle2 } from 'lucide-react';
import imgSobreProjeto from '../assets/sobre-projeto.jpg';

export default function AboutAndContact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.assunto || 'Contato - Geologia Virtual');
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
    );
    window.open(`mailto:geologiaeambientevirtual@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-[#F4ECE2] border-t border-earth-muted/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* 1. Sobre Nós Section */}
        <div id="sobre-nos" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Texto e Chamada */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E7C6D]/15 text-mineral-accent text-xs font-semibold tracking-wider uppercase font-sans">
                <Users className="w-3.5 h-3.5" />
                <span>Sobre o Projeto</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-earth-dark tracking-tight font-heading">
              Conheça o Geologia Virtual
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-text-body font-normal leading-relaxed font-sans">
              <p>
                O Geologia Virtual é um projeto da Faculdade de Geologia da UERJ que integra ensino,
                pesquisa e extensão para aproximar as Ciências da Terra da sociedade.
              </p>
              <p>
                Professores, estudantes e colaboradores participam da criação de conteúdos, roteiros
                virtuais, materiais educativos e experiências digitais que tornam a Geologia mais acessível.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-accent hover:bg-[#233a4e] text-white text-xs sm:text-sm font-semibold font-heading tracking-wide uppercase shadow-sm hover:shadow transition-all group"
              >
                <span>Conheça o projeto e nossa equipe →</span>
              </a>
            </div>
          </div>

          {/* Imagem do Projeto: Redimensionada para a mesma altura exata da seção de texto */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-md border-2 border-white/80 ring-1 ring-earth-muted/20 group flex">
              <img
                src={imgSobreProjeto}
                alt="Demonstração prática de Geociências e roteiros virtuais com equipe e estudantes"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Ancora invisivel para manter compatibilidade com links de navegacao */}
        <div id="publicacoes" className="hidden" aria-hidden="true" />

        {/* 3. Seção Contato / Canal Institucional */}
        <div id="contato" className="bg-white rounded-2xl border border-earth-muted/15 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna Esquerda: Informações e Texto */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-accent/10 text-slate-accent text-xs font-semibold tracking-wider uppercase font-sans">
                <Mail className="w-3.5 h-3.5" />
                <span>FALE COM A GENTE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-earth-dark tracking-tight font-heading">
                Entre em contato
              </h3>

              <p className="text-base text-text-body font-normal leading-relaxed font-sans">
                Tem alguma dúvida, sugestão ou quer saber mais sobre o Geologia Virtual? Entre em contato com nossa equipe.
              </p>

              {/* Informação discreta de envio direto */}
              <div className="pt-6 border-t border-earth-muted/15 space-y-1.5">
                <p className="text-xs text-earth-muted font-medium font-sans">
                  Prefere enviar diretamente?
                </p>
                <a
                  href="mailto:geologiaeambientevirtual@gmail.com"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-accent hover:text-earth-dark transition-colors font-sans break-all"
                >
                  <Mail className="w-4 h-4 text-mineral-accent flex-shrink-0" />
                  <span>geologiaeambientevirtual@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Contato */}
            <div className="lg:col-span-7 bg-[#F4ECE2]/50 border border-earth-muted/20 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-mineral-accent/15 text-mineral-accent flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-earth-dark font-heading">
                    Mensagem pronta para envio!
                  </h4>
                  <p className="text-xs sm:text-sm text-text-body font-sans max-w-md mx-auto leading-relaxed">
                    Seu aplicativo de e-mail foi acionado com os dados preenchidos. Caso prefira, envie diretamente para <strong className="font-semibold text-slate-accent">geologiaeambientevirtual@gmail.com</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-accent hover:text-earth-dark transition-colors font-sans pt-2"
                  >
                    <span>Enviar outra mensagem</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-xs font-semibold text-earth-dark uppercase tracking-wider mb-1.5 font-sans">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-earth-muted/25 text-earth-dark placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-accent/30 focus:border-slate-accent font-sans transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-earth-dark uppercase tracking-wider mb-1.5 font-sans">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-earth-muted/25 text-earth-dark placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-accent/30 focus:border-slate-accent font-sans transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-xs font-semibold text-earth-dark uppercase tracking-wider mb-1.5 font-sans">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        required
                        value={formData.assunto}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-earth-muted/25 text-earth-dark placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-accent/30 focus:border-slate-accent font-sans transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold text-earth-dark uppercase tracking-wider mb-1.5 font-sans">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Como podemos te ajudar?"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-earth-muted/25 text-earth-dark placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-accent/30 focus:border-slate-accent font-sans resize-y transition-all"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-accent hover:bg-[#233a4e] text-white text-xs font-semibold font-heading uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer group"
                    >
                      <span>Enviar mensagem →</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
