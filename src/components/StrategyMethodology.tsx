import React from 'react';
import { Search, Compass, ShieldCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/mockData';

interface StrategyMethodologyProps {
  onOpenConsultation: () => void;
}

export const StrategyMethodology: React.FC<StrategyMethodologyProps> = ({ onOpenConsultation }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck':
        return <Search className="w-6 h-6 text-[#d4af37]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Zap className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="estrategia" className="py-20 lg:py-28 bg-[#03150f] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0b4837]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>METODOLOGÍA DE EFECTIVIDAD COMPROBADA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ingeniería Legal en <span className="gold-gradient-text">3 Fases Estratégicas</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Nuestro protocolo de trabajo elimina la incertidumbre, anticipa riesgos y asegura que cada documento o transacción culmine con plena validez registral y eficacia jurídica.
          </p>
        </div>

        {/* Methodology Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Connecting line indicator for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#c5a059]/30 via-[#d4af37]/60 to-[#c5a059]/30 -translate-y-8 z-0 pointer-events-none" />

          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-gradient-to-b from-[#062c21] via-[#041c15] to-[#02110c] border border-[#c5a059]/30 hover:border-[#c5a059]/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Step Top Header with Number Badge and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c5a059]/30 to-[#02130e] border border-[#c5a059]/50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#c5a059]/40 group-hover:text-[#f5dfaa] transition-colors">
                    {step.number}
                  </span>
                </div>

                <span className="text-[11px] font-bold tracking-wider text-[#d4af37] uppercase block mb-1">
                  Fase {step.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#e8d08d] mb-4">
                  {step.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Sub-steps Checklist */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Acciones de esta etapa:
                  </span>
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Result Anchor */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Objetivo:</span>
                <span className="text-xs font-bold text-[#f5dfaa]">
                  {idx === 0 ? 'Cero Riesgos Ocultos' : idx === 1 ? 'Blindaje Contractual' : 'Cierre Registral Total'}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] shadow-xl hover:brightness-105 active:scale-95 transition-all"
          >
            <span>Iniciar Diagnóstico Preventivo de su Caso</span>
            <ArrowRight className="w-4 h-4 text-[#041a13]" />
          </button>
        </div>

      </div>
    </section>
  );
};
