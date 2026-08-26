import React, { useState } from 'react';
import { Award, CheckCircle2, MapPin, Calendar, ArrowRight, Quote, Shield } from 'lucide-react';
import { SUCCESS_CASES, TESTIMONIALS } from '../data/mockData';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [selectedCase, setSelectedCase] = useState<string>(SUCCESS_CASES[0].id);

  const activeCase = SUCCESS_CASES.find((c) => c.id === selectedCase) || SUCCESS_CASES[0];

  return (
    <section id="casos" className="py-20 lg:py-28 bg-[#03150f] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>RESULTADOS COMPROBADOS & PRECEDENTES</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Casos de Éxito y <span className="gold-gradient-text">Efectividad Demostrada</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Ejemplos de cómo nuestra estrategia jurídica de precisión ha resuelto situaciones complejas protegiendo el patrimonio de nuestros clientes.
          </p>
        </div>

        {/* Case Studies Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Case Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
              Seleccione un precedente:
            </span>
            {SUCCESS_CASES.map((item) => {
              const isSelected = item.id === selectedCase;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCase(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#062c21] border-[#c5a059] shadow-lg shadow-[#0b4837]/30'
                      : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">
                      {item.area}
                    </span>
                    <span className="text-[11px] text-slate-400">{item.year}</span>
                  </div>
                  <h4 className={`text-sm font-bold font-serif-luxury ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] text-emerald-400">{item.impactMetric}</span>
                    <span className="text-[11px]">{item.location}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Case Deep-Dive Detail View */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#062c21] via-[#041c15] to-[#02110c] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    {activeCase.area}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mt-0.5">
                    {activeCase.title}
                  </h3>
                </div>
                <span className="text-xs bg-[#0b3327] text-[#e8d08d] px-3 py-1 rounded-full border border-[#c5a059]/30 font-semibold">
                  {activeCase.clientType}
                </span>
              </div>

              {/* Challenge vs Strategy vs Result */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="font-bold text-rose-300 text-xs uppercase tracking-wider mb-1">
                    El Desafío / Contingencia Inicial:
                  </h5>
                  <p className="text-slate-300 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="font-bold text-[#f5dfaa] text-xs uppercase tracking-wider mb-1">
                    Estrategia Legal Aplicada:
                  </h5>
                  <p className="text-slate-300 leading-relaxed">
                    {activeCase.strategy}
                  </p>
                </div>

                <div className="bg-[#0b3327]/80 p-4 rounded-xl border border-[#c5a059]/30">
                  <h5 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Resultado y Certeza Jurídica Obtenida:</span>
                  </h5>
                  <p className="text-slate-200 leading-relaxed font-medium">
                    {activeCase.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom case metadata */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  {activeCase.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  Año {activeCase.year}
                </span>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#041a13] bg-[#d4af37] hover:bg-[#fae19c] transition-colors flex items-center space-x-1.5 shadow-md"
              >
                <span>Evaluar mi Caso Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Testimonials Strip */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              Opiniones de Clientes & Aliados Corporativos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#052119]/90 border border-[#c5a059]/20 p-6 rounded-2xl flex flex-col justify-between shadow-lg"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#d4af37]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs sm:text-sm font-bold text-white">{t.author}</p>
                  <p className="text-[11px] text-[#f5dfaa] font-medium">{t.role}</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
