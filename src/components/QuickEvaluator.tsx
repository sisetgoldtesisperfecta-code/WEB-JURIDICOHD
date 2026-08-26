import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, AlertTriangle, FileText, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

interface QuickEvaluatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndContact: (service: string, summary: string) => void;
}

export const QuickEvaluator: React.FC<QuickEvaluatorProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndContact,
}) => {
  const [step, setStep] = useState(1);
  const [caseType, setCaseType] = useState<'inmueble' | 'sucesion' | 'empresa' | 'poder'>('inmueble');
  const [residence, setResidence] = useState<'venezuela' | 'exterior'>('venezuela');
  const [urgency, setUrgency] = useState<'urgente' | 'planificado'>('planificado');

  if (!isOpen) return null;

  const handleFinish = () => {
    let summary = `Diagnóstico preliminar: Caso de ${caseType.toUpperCase()} con cliente residente en ${residence.toUpperCase()}, urgencia: ${urgency.toUpperCase()}.`;
    let service = 'Derecho Inmobiliario';
    if (caseType === 'sucesion') service = 'Derecho Civil y Patrimonial (Sucesiones)';
    if (caseType === 'empresa') service = 'Derecho Mercantil y Corporativo';
    if (caseType === 'poder') service = 'Trámites y Gestión de Documentos / Poderes a Distancia';

    onSelectServiceAndContact(service, summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#041a13] border border-[#c5a059]/50 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-2">
          <FileText className="w-4 h-4" />
          <span>Herramienta Interactiva de Orientación</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mb-2">
          Evaluador Preliminar de Caso Legal
        </h3>
        <p className="text-xs text-slate-300 mb-6">
          Responda 3 breves preguntas para identificar la ruta jurídica recomendada y los requisitos esenciales.
        </p>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs">
          <span className={`font-bold ${step >= 1 ? 'text-[#f5dfaa]' : 'text-slate-500'}`}>
            1. Materia Principal
          </span>
          <span className="text-slate-500">➔</span>
          <span className={`font-bold ${step >= 2 ? 'text-[#f5dfaa]' : 'text-slate-500'}`}>
            2. Residencia
          </span>
          <span className="text-slate-500">➔</span>
          <span className={`font-bold ${step >= 3 ? 'text-[#f5dfaa]' : 'text-slate-500'}`}>
            3. Diagnóstico
          </span>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">¿Cuál es el asunto principal que desea atender?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'inmueble', label: 'Compraventa / Inmuebles', sub: 'Auditoría, venta o regularización' },
                { id: 'sucesion', label: 'Herencia / Sucesión', sub: 'Declaración SENIAT o partición' },
                { id: 'empresa', label: 'Empresarial / Mercantil', sub: 'Constitución, actas o contratos' },
                { id: 'poder', label: 'Poder o Trámite a Distancia', sub: 'Apostillas y poderes consulares' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCaseType(opt.id as any)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    caseType === opt.id
                      ? 'bg-[#0b3327] border-[#c5a059] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <p className="text-xs font-bold text-white">{opt.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{opt.sub}</p>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#041a13] bg-[#d4af37] hover:bg-[#fae19c] flex items-center space-x-1.5"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">¿Dónde se encuentra usted o los otorgantes?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setResidence('venezuela')}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  residence === 'venezuela'
                    ? 'bg-[#0b3327] border-[#c5a059] text-white shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <p className="text-xs font-bold text-white">En Venezuela</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Atención presencial en Caracas o en cualquier estado</p>
              </button>

              <button
                onClick={() => setResidence('exterior')}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  residence === 'exterior'
                    ? 'bg-[#0b3327] border-[#c5a059] text-white shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <p className="text-xs font-bold text-white">En el Exterior (Diáspora / Inversionista)</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Gestión remota mediante poder consular y apostilla</p>
              </button>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#041a13] bg-[#d4af37] hover:bg-[#fae19c] flex items-center space-x-1.5"
              >
                <span>Ver Recomendación</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Recommendation result */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="bg-[#0b3327] border border-[#c5a059]/40 p-4 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-[#d4af37]">Ruta Jurídica Recomendada</span>
              <h5 className="text-sm font-bold text-white mt-1">
                {caseType === 'inmueble' && 'Auditoría Registral Preventiva (Due Diligence) + Contrato Blindado'}
                {caseType === 'sucesion' && 'Declaración Sucesoral SENIAT + Partición y Adjudicación de Bienes'}
                {caseType === 'empresa' && 'Estructuración Societaria y Registro Mercantil con Cláusulas de Blindaje'}
                {caseType === 'poder' && 'Minuta de Poder Consular Especial con Facultades Expresas y Apostilla'}
              </h5>
              <p className="text-xs text-slate-200 mt-2">
                {residence === 'exterior'
                  ? 'Recomendamos iniciar con la revisión remota de documentos y la redacción del poder consular para evitar viajes y costos innecesarios.'
                  : 'Podemos coordinar la búsqueda directa de antecedentes en los registros competentes y fijar cita presencial en nuestra sede en El Rosal, Caracas.'}
              </p>
            </div>

            <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-xs text-slate-300">
              <span className="font-semibold text-white">Próximo paso sugerido:</span> Agendar una revisión inicial con nuestros abogados especialistas para verificar recaudos y emitir presupuesto formal cerrado.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-2.5 justify-end">
              <a
                href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20complet%C3%A9%20el%20evaluador%20web%20para%20un%20caso%20de%20${caseType}%20desde%20${residence}.%20Deseo%20m%C3%A1s%20detalles.`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center space-x-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enviar por WhatsApp</span>
              </a>

              <button
                onClick={handleFinish}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] flex items-center justify-center space-x-1.5 shadow-md"
              >
                <span>Completar en Formulario</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
