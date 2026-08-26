import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle2, Award, Landmark, Gavel, Clock } from 'lucide-react';
import { FIRM_INFO, TRUST_BADGES } from '../data/mockData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="firma" className="py-20 lg:py-28 bg-[#03150f] relative overflow-hidden border-t border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a382b]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>NUESTRA FIRMA & TRAYECTORIA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cuatro Décadas de <span className="gold-gradient-text">Excelencia y Solvencia Jurídica</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Fundada en 1984, nuestra firma combina la solidez de la práctica legal tradicional con la agilidad e innovación requeridas por los desafíos jurídicos contemporáneos e inmobiliarios.
          </p>
        </div>

        {/* Two-Column Deep Story & Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Narrative text */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="bg-[#052119]/80 border border-[#c5a059]/25 p-6 sm:p-8 rounded-2xl relative shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-[#d4af37]" />
                <span>Ética Inquebrantable y Precisión Normativa</span>
              </h3>
              <p className="mb-4">
                En el complejo entorno legal e inmobiliario actual, la improvisación representa el mayor riesgo patrimonial. Con más de <strong className="text-white">40 años de trayectoria ininterrumpida</strong>, nuestro escritorio se ha consolidado como un referente de confianza para familias, empresarios e inversionistas que exigen certeza absoluta en cada actuación.
              </p>
              <p className="mb-4">
                Nos especializamos en el cumplimiento riguroso de los <strong className="text-[#f5dfaa]">estándares normativos venezolanos vigentes (2026)</strong> ante el Servicio Autónomo de Registros y Notarías (SAREN), SENIAT y organismos municipales, así como en los marcos internacionales de contratación, apostillas y transferencias transfronterizas.
              </p>
              <p>
                Cada caso es dirigido directamente por abogados seniors con amplia experiencia en litigio preventivo y estructuración de negocios, garantizando una atención personalizada y discreta bajo estricto secreto profesional.
              </p>
            </div>

            {/* Core Values / Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#041a13] p-4 rounded-xl border border-white/5 hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#d4af37]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Seguridad Jurídica Total</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Blindamos transacciones para evitar nulidades registrales, estafas o reclamaciones de terceros.
                </p>
              </div>

              <div className="bg-[#041a13] p-4 rounded-xl border border-white/5 hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#d4af37]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Celeridad y Efectividad</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Canalizamos trámites ante notarías y registros con metodología ágil para cumplir plazos pactados.
                </p>
              </div>

              <div className="bg-[#041a13] p-4 rounded-xl border border-white/5 hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#d4af37]">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Transparencia de Honorarios</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Presupuestos cerrados por escrito con desglose exacto de aranceles e impuestos oficiales.
                </p>
              </div>

              <div className="bg-[#041a13] p-4 rounded-xl border border-white/5 hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#d4af37]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Auditoría Documental 360°</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Inspección milimétrica de folios reales, libros y solvencias históricas de hasta 30 años.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Credential Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#062c21] via-[#041d15] to-[#02110c] p-6 sm:p-8 rounded-2xl border border-[#c5a059]/30 shadow-2xl relative">
              
              {/* Gold seal */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#f5dfaa]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif-luxury text-base">Inpreabogado N° 34.821</h4>
                    <p className="text-xs text-[#d4af37]">Colegio de Abogados del Dtto. Capital</p>
                  </div>
                </div>
                <span className="text-xs bg-[#0b3b2c] text-[#e8d08d] px-2.5 py-1 rounded-md border border-[#c5a059]/30 font-semibold">
                  Verificado
                </span>
              </div>

              {/* Pillars list */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Garantías Institucionales
                </h4>
                {TRUST_BADGES.map((badge, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">{badge.label}</p>
                      <p className="text-xs text-slate-400">{badge.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address micro card */}
              <div className="mt-4 pt-4 border-t border-white/10 bg-white/5 p-3.5 rounded-xl">
                <p className="text-xs text-slate-300 leading-snug">
                  <strong className="text-white">Sede Principal:</strong> {FIRM_INFO.address}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
