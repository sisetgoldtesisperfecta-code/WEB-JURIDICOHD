import React from 'react';
import { Globe2, Plane, FileCheck, Shield, CheckCircle2, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

interface InternationalDeskProps {
  onOpenConsultation: () => void;
}

export const InternationalDesk: React.FC<InternationalDeskProps> = ({ onOpenConsultation }) => {
  const diasporaServices = [
    {
      title: 'Compraventa Inmobiliaria sin Viajar',
      desc: 'Redacción de poderes consulares específicos o notariados con Apostilla de La Haya para formalizar la venta o compra de sus propiedades en Venezuela con custodia legal de fondos.',
    },
    {
      title: 'Declaraciones Sucesorales y SENIAT a Distancia',
      desc: 'Tramitación de herencias, obtención de solvencias sucesorales y adjudicación de inmuebles para herederos residentes fuera del país.',
    },
    {
      title: 'Apostilla de La Haya y Legalizaciones Express',
      desc: 'Gestión oficial ante el MPPRE y registros para documentos civiles, mercantiles y de estudios con validez internacional.',
    },
    {
      title: 'Asesoría a Inversionistas Extranjeros',
      desc: 'Estructuración jurídica de inversiones en bienes raíces, agroindustria o comercio en Venezuela, garantizando el cumplimiento de la normativa cambiaria y mercantil 2026.',
    },
  ];

  const countries = [
    'Estados Unidos', 'España', 'Panamá', 'Colombia', 'Chile',
    'México', 'Reino Unido', 'Italia', 'Portugal', 'Canadá', 'Perú'
  ];

  return (
    <section id="internacional" className="py-20 lg:py-28 bg-[#02130e] relative overflow-hidden">
      {/* Visual Globe accents */}
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#0d4032]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Globe2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>DESPACHO INTERNACIONAL & DIÁSPORA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Gestión Legal en Venezuela para <span className="gold-gradient-text">Residentes en el Exterior</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Protegemos y gestionamos su patrimonio en Venezuela sin que deba trasladarse. Atención legal remota para venezolanos en la diáspora e inversionistas internacionales.
          </p>
        </div>

        {/* Highlight Banner with Map & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Block: International Value Proposition */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#062c21] via-[#041c15] to-[#02110c] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                    Garantías de Ley y Cumplimiento Normativo 2026
                  </h3>
                  <p className="text-xs text-[#c5a059] font-semibold">
                    Alineados con el marco legal venezolano e internacional
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Representamos legalmente a ciudadanos y corporaciones extranjeras a través de mandatos con facultades especiales rigurosamente redactadas. Nuestro equipo coordina la validación ante consulados de Venezuela o notarios extranjeros apostillados, garantizando la admisión inmediata y sin observaciones en registros y notarías venezolanas.
              </p>

              {/* 4 Diaspora Core Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {diasporaServices.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#c5a059]/30 transition-colors">
                    <h4 className="text-xs sm:text-sm font-bold text-[#f5dfaa] mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom country tags */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Países con clientes atendidos frecuentemente:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {countries.map((country, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[11px] bg-[#0b3327] text-slate-200 px-2.5 py-1 rounded-md border border-[#c5a059]/20"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Remote Consultation Box & WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Consultation Modality Card */}
            <div className="bg-[#052119] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h4 className="text-lg font-bold text-white font-serif-luxury mb-2 flex items-center gap-2">
                <Plane className="w-5 h-5 text-[#d4af37]" />
                <span>¿Cómo Funciona la Atención a Distancia?</span>
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Diseñado para quienes no pueden viajar o prefieren delegar con total tranquilidad:
              </p>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start space-x-2.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059]/30 text-[#f5dfaa] font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <span>Videoconferencia inicial confidencial por Zoom o Google Meet en su zona horaria.</span>
                </li>
                <li className="flex items-start space-x-2.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059]/30 text-[#f5dfaa] font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <span>Redacción de la minuta de poder con instrucciones exactas para su consulado local.</span>
                </li>
                <li className="flex items-start space-x-2.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059]/30 text-[#f5dfaa] font-bold flex items-center justify-center shrink-0 text-[11px]">
                    3
                  </span>
                  <span>Ejecución del trámite en Venezuela con reporte fotográfico y entrega de documentos oficiales.</span>
                </li>
              </ul>
            </div>

            {/* Direct Channel Card */}
            <div className="bg-gradient-to-r from-[#0b3327] to-[#041a13] border border-[#c5a059]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                  Línea Internacional Directa
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  Atención Inmediata por WhatsApp Jurídico
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Envíe los detalles de su caso para una evaluación de viabilidad preliminar.
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20escribo%20desde%20el%20exterior%20para%20solicitar%20asesoria%20legal%20sobre%20un%20inmueble/tramite%20en%20Venezuela.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Diáspora</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-3 rounded-xl text-xs font-bold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] hover:brightness-105 transition-all flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <span>Agendar Cita Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
