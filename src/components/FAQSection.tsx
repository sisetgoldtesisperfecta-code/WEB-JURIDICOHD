import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA, FIRM_INFO } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#02130e] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0b4837]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>RESPUESTAS CLARAS & TRANSPARENCIA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Preguntas <span className="gold-gradient-text">Frecuentes</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Aclaramos sus dudas sobre procesos legales, contrataciones a distancia, garantías y honorarios profesionales.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#052119] border-[#c5a059]/60 shadow-xl shadow-[#041a13]'
                    : 'bg-[#03150f] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider bg-[#02130e] px-2 py-0.5 rounded border border-[#c5a059]/20 hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className={`text-base sm:text-lg font-bold font-serif-luxury ${isOpen ? 'text-[#f5dfaa]' : 'text-white'}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#c5a059] text-[#041a13] rotate-180' : 'bg-white/5 text-slate-300'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="mt-12 bg-gradient-to-r from-[#0b3327] to-[#041a13] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white font-serif-luxury">
              ¿Tiene una consulta específica no listada aquí?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Consúltenos directamente por WhatsApp para una orientación inicial sin compromiso.
            </p>
          </div>

          <a
            href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20tengo%20una%20pregunta%20legal%20espec%C3%ADfica%20que%20deseo%20consultar.`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
