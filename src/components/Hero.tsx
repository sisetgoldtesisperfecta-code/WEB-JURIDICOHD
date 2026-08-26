import React from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, MessageCircle, FileText, Globe2, Building } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

interface HeroProps {
  onOpenSchedule: () => void;
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onOpenDiagnostic }) => {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#02130e] via-[#041a13] to-[#02110c] subtle-grid-pattern">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#0b4837]/35 via-[#c5a059]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#063326]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6 sm:space-y-7">
            
            {/* Social Proof Badge / Seal */}
            <div className="inline-flex items-center space-x-2.5 bg-[#0b3327]/80 border border-[#c5a059]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg self-start">
              <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/50">
                <Award className="w-3.5 h-3.5 text-[#e8d08d]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#f5dfaa]">
                40+ Años de Trayectoria e Integridad Legal
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.18] tracking-tight">
              Más de <span className="gold-gradient-text">40 años de efectividad estratégica</span> en materia Legal e Inmobiliaria.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Soluciones jurídicas integrales para personas y empresas a nivel <span className="text-white font-medium">nacional (Venezuela)</span> e <span className="text-[#f5dfaa] font-medium">internacional</span>. Blindaje patrimonial, saneamiento registral y resolución certera de casos de alta complejidad.
            </p>

            {/* Value Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Auditoría Registral y Catastral Rigurosa</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Gestión a Distancia para la Diáspora</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Cumplimiento Normativo Vigente 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Presupuesto Cerrado y Confidencialidad</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                id="hero-btn-request-evaluation"
                onClick={() => scrollToSection('#contacto')}
                className="group px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] shadow-xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:brightness-105 active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>Solicitar Evaluación de Caso</span>
                <ArrowRight className="w-4 h-4 text-[#041a13] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-btn-whatsapp-direct"
                href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20solicitar%20una%20evaluaci%C3%B3n%20previa%20de%20mi%20caso%20legal/inmobiliario.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#0a2f23]/90 hover:bg-[#0d3f30] border border-[#c5a059]/40 hover:border-[#c5a059] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Jurídico Directo</span>
              </a>

              <button
                id="hero-btn-diagnostic-tool"
                onClick={onOpenDiagnostic}
                className="hidden xl:flex px-4 py-3.5 rounded-xl text-xs font-semibold text-[#f5dfaa] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors items-center space-x-1.5"
                title="Herramienta de Diagnóstico Rápido"
              >
                <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Evaluador Rápido</span>
              </button>
            </div>

            {/* Micro reassurance footer */}
            <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Respuesta inicial en menos de 24h hábiles. Secreto profesional garantizado.</span>
            </p>
          </div>

          {/* Right Column: Interactive Authority Card / Executive Crest */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative background border frame */}
            <div className="relative bg-gradient-to-br from-[#083023] via-[#051c14] to-[#03130d] rounded-2xl p-6 sm:p-8 border border-[#c5a059]/40 shadow-2xl shadow-black/60 overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#c5a059] via-[#fae19c] to-[#a37930]" />

              {/* Watermark Crest */}
              <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none text-white">
                <Award className="w-64 h-64 text-[#d4af37]" />
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Tradición Jurídica Comprobada
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white font-serif-luxury mt-0.5">
                    Firma Legal e Inmobiliaria
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8f6d23] p-0.5 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full bg-[#041a13] rounded-[10px] flex items-center justify-center font-bold text-[#f5dfaa] font-serif-luxury text-sm">
                    40+
                  </div>
                </div>
              </div>

              {/* Pillars list */}
              <div className="py-5 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Building className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Especialistas en Derecho Inmobiliario</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Tradición registral de inmuebles residenciales, comerciales e industriales en todo el territorio nacional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Globe2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Atención Internacional a Distancia</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Poderes consulares, apostilla de La Haya y compraventa segura para clientes en el exterior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Efectividad y Certeza Jurídica</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Estrategias con técnica jurídica precisa que previenen litigios y anulan contingencias registrales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick interactive action box */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300">¿Tiene un caso urgente?</span>
                  <p className="text-xs font-semibold text-[#f5dfaa]">Atención personalizada en Caracas y Online</p>
                </div>
                <button
                  onClick={onOpenSchedule}
                  className="px-3.5 py-2 rounded-lg text-xs font-bold text-[#041a13] bg-[#d4af37] hover:bg-[#fae19c] transition-colors"
                >
                  Agendar Cita
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Key Stat Metric Strip */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-[#c5a059]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#03150e]/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-luxury gold-gradient-text">
              {FIRM_INFO.yearsOfExperience}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Años de Trayectoria Continua</p>
            <span className="text-[11px] text-slate-400">Fundado en 1984</span>
          </div>

          <div className="bg-[#03150e]/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-luxury text-white">
              {FIRM_INFO.resolvedCases}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Casos Legales Exitosos</p>
            <span className="text-[11px] text-slate-400">Inmobiliarios & Corporativos</span>
          </div>

          <div className="bg-[#03150e]/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-luxury text-emerald-400">
              {FIRM_INFO.effectivenessRate}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Efectividad Registral</p>
            <span className="text-[11px] text-slate-400">Protocolizaciones sin reparos</span>
          </div>

          <div className="bg-[#03150e]/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-luxury text-[#e8d08d]">
              {FIRM_INFO.clientCountries}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Países con Clientes Atendidos</p>
            <span className="text-[11px] text-slate-400">Gestión Transfronteriza</span>
          </div>
        </div>
      </div>
    </section>
  );
};
