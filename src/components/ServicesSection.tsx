import React, { useState } from 'react';
import { Building2, Briefcase, Scale, FileCheck, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceCategory } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#d4af37]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#d4af37]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#d4af37]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Shield className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#02130e] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#063326]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ÁREAS DE ESPECIALIDAD & PRÁCTICA LEGAL</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Servicios Jurídicos e Inmobiliarios <span className="gold-gradient-text">Especializados</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Estructuración rigurosa, auditoría preventiva y defensa patrimonial integral. Seleccione un área para explorar el alcance detallado, requisitos y tiempos de respuesta.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-[#c5a059] text-[#041a13] shadow-lg shadow-[#c5a059]/20'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            Todas las Especialidades
          </button>
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === service.id
                  ? 'bg-[#c5a059] text-[#041a13] shadow-lg shadow-[#c5a059]/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {service.title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-[#062c21] via-[#041c15] to-[#02110c] border border-[#c5a059]/25 hover:border-[#c5a059]/70 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0b4837]/30 flex flex-col justify-between"
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#02130e] border border-[#c5a059]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#d4af37] bg-[#0b3327] px-2.5 py-1 rounded-md border border-[#c5a059]/30 uppercase">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white group-hover:text-[#f5dfaa] transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-3">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.summary}
                </p>

                {/* Key Points Bullet List */}
                <div className="space-y-2 mb-6 pt-2 border-t border-white/10">
                  {service.keyPoints.slice(0, 4).map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#f5dfaa] hover:text-white flex items-center space-x-1.5 transition-colors group/btn py-2"
                >
                  <span>Ver Alcance & Requisitos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-[#041a13] bg-[#d4af37] hover:bg-[#fae19c] transition-colors shadow-md"
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Assurance Strip */}
        <div className="mt-14 bg-[#052119]/80 border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#f5dfaa]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-serif-luxury">
                ¿Su caso requiere una combinación de varias áreas legales?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Diseñamos estrategias mixtas (inmobiliarias, tributarias y societarias) adaptadas a la medida de su patrimonio.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('Estrategia Jurídica Integral Mixta')}
            className="w-full md:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] hover:brightness-105 shadow-lg whitespace-nowrap"
          >
            Solicitar Evaluación Integral
          </button>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForConsultation={(title) => {
            onSelectService(title);
            setSelectedService(null);
          }}
        />
      )}
    </section>
  );
};
