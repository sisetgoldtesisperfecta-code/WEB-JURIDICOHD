import React from 'react';
import { X, CheckCircle2, FileText, Clock, ArrowRight, Shield, MessageCircle } from 'lucide-react';
import { ServiceCategory } from '../types';
import { FIRM_INFO } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#041a13] border border-[#c5a059]/40 rounded-2xl shadow-2xl shadow-black overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="relative bg-gradient-to-r from-[#02130e] via-[#05261c] to-[#041a13] p-6 sm:p-8 border-b border-[#c5a059]/25">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>{service.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
            {service.title}
          </h2>
          <p className="text-sm font-medium text-[#f5dfaa] mt-1">
            {service.subtitle}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-200">
          
          {/* Summary Box */}
          <div className="bg-[#02130e]/80 border border-white/10 p-4 sm:p-5 rounded-xl">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#d4af37] mb-2">
              Alcance de la Asesoría
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Sub-services / Modules breakdown */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-white mb-3">
              Servicios Específicos Comprendidos:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.subServices.map((sub, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 hover:border-[#c5a059]/30 p-4 rounded-xl transition-colors">
                  <h5 className="font-bold text-white text-sm mb-1.5 text-[#f5dfaa]">
                    {sub.title}
                  </h5>
                  <p className="text-xs text-slate-300 mb-3 leading-normal">
                    {sub.description}
                  </p>
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 block">Entregables clave:</span>
                    {sub.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-[#d4af37] mr-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents / Recaudos */}
          <div className="bg-[#0b3327]/60 border border-[#c5a059]/20 p-4 sm:p-5 rounded-xl">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#f5dfaa] mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span>Documentación Habitual Requerida para Iniciar:</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mt-2">
              {service.commonDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline & Featured Case */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                Tiempo Estimado de Tramitación:
              </span>
              <p className="text-xs font-semibold text-white mt-1">
                {service.estimatedTimeline}
              </p>
            </div>

            <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
              <span className="text-xs text-slate-400">Precedente de Éxito:</span>
              <p className="text-xs text-slate-200 mt-1 italic">
                "{service.featuredCase}"
              </p>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="bg-[#02130e] p-4 sm:p-6 border-t border-[#c5a059]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20quisiera%20consultar%20sobre%20el%20servicio%20de%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar vía WhatsApp</span>
          </a>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onSelectForConsultation(service.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] shadow-lg hover:brightness-105 transition-all flex items-center justify-center space-x-1.5"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
