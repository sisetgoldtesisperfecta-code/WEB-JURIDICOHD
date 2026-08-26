import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Building, CheckCircle2, MessageCircle, ArrowRight, Shield } from 'lucide-react';
import { ConsultationScheduleData } from '../types';
import { FIRM_INFO } from '../data/mockData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [scheduleData, setScheduleData] = useState<ConsultationScheduleData>({
    fullName: '',
    email: '',
    phone: '',
    mode: 'virtual',
    date: '',
    timeSlot: '10:00 AM - 11:00 AM (VET)',
    topic: 'Derecho Inmobiliario / Compraventa',
    notes: '',
  });

  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = `*SOLICITUD DE CITA LEGAL*%0A%0A*Cliente:* ${encodeURIComponent(scheduleData.fullName)}%0A*Modalidad:* ${encodeURIComponent(scheduleData.mode === 'virtual' ? 'Videollamada Zoom/Meet' : 'Presencial en Caracas')}%0A*Fecha Deseada:* ${encodeURIComponent(scheduleData.date || 'A coordinar')}%0A*Horario:* ${encodeURIComponent(scheduleData.timeSlot)}%0A*Materia:* ${encodeURIComponent(scheduleData.topic)}%0A*Tel:* ${encodeURIComponent(scheduleData.phone)}`;
    window.open(`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#041a13] border border-[#c5a059]/40 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#02130e] via-[#05261c] to-[#041a13] p-6 border-b border-[#c5a059]/25 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Agenda Privada con Abogado Senior</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              Agendar Consulta Legal Especializada
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {isBooked ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-serif-luxury text-white">
                ¡Pre-Reserva Registrada!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Hemos recibido su preferencia para la sesión con nuestros abogados. Nuestro asistente de despacho le confirmará el enlace seguro o la confirmación de sala en nuestra sede en El Rosal, Caracas.
              </p>
              <div className="bg-white/5 p-4 rounded-xl max-w-sm mx-auto text-xs text-slate-300 text-left border border-white/5 space-y-1">
                <p><strong>Modalidad:</strong> {scheduleData.mode === 'virtual' ? 'Virtual (Zoom / Meet)' : 'Presencial (Caracas)'}</p>
                <p><strong>Horario preferido:</strong> {scheduleData.timeSlot}</p>
                <p><strong>Asunto:</strong> {scheduleData.topic}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar por WhatsApp ahora</span>
                </button>
                <button
                  onClick={() => {
                    setIsBooked(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Modality Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Modalidad de la Consulta:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setScheduleData({ ...scheduleData, mode: 'virtual' })}
                    className={`p-3.5 rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                      scheduleData.mode === 'virtual'
                        ? 'bg-[#0b3327] border-[#c5a059] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Video className="w-4 h-4 text-emerald-400" />
                    <span>Virtual (Zoom / Meet)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScheduleData({ ...scheduleData, mode: 'presencial' })}
                    className={`p-3.5 rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                      scheduleData.mode === 'presencial'
                        ? 'bg-[#0b3327] border-[#c5a059] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Building className="w-4 h-4 text-[#d4af37]" />
                    <span>Presencial (Caracas)</span>
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={scheduleData.fullName}
                    onChange={(e) => setScheduleData({ ...scheduleData, fullName: e.target.value })}
                    placeholder="Su nombre y apellido"
                    className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={scheduleData.phone}
                    onChange={(e) => setScheduleData({ ...scheduleData, phone: e.target.value })}
                    placeholder="+58 414 ... o +1 305..."
                    className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              {/* Topic & TimeSlot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Materia Legal Principal</label>
                  <select
                    value={scheduleData.topic}
                    onChange={(e) => setScheduleData({ ...scheduleData, topic: e.target.value })}
                    className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3 py-2 text-white outline-none"
                  >
                    <option value="Derecho Inmobiliario / Compraventa">Derecho Inmobiliario / Due Diligence</option>
                    <option value="Derecho Mercantil / Empresas">Derecho Mercantil / Empresas</option>
                    <option value="Derecho Sucesoral / Civil">Derecho Sucesoral / Testamentos</option>
                    <option value="Poderes a Distancia / Apostilla">Poderes a Distancia / Apostilla</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Horario Preferido (GMT-4)</label>
                  <select
                    value={scheduleData.timeSlot}
                    onChange={(e) => setScheduleData({ ...scheduleData, timeSlot: e.target.value })}
                    className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3 py-2 text-white outline-none"
                  >
                    <option value="9:00 AM - 10:00 AM (VET)">Mañana: 9:00 AM - 10:00 AM</option>
                    <option value="11:00 AM - 12:00 PM (VET)">Mañana: 11:00 AM - 12:00 PM</option>
                    <option value="2:30 PM - 3:30 PM (VET)">Tarde: 2:30 PM - 3:30 PM</option>
                    <option value="4:00 PM - 5:00 PM (VET)">Tarde: 4:00 PM - 5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Notas previas (Opcional)</label>
                <textarea
                  rows={2}
                  value={scheduleData.notes}
                  onChange={(e) => setScheduleData({ ...scheduleData, notes: e.target.value })}
                  placeholder="Detalles sobre documentos existentes, partes involucradas..."
                  className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl p-3 text-white outline-none resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                  Secreto profesional garantizado
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] hover:brightness-105 shadow-md flex items-center space-x-1.5"
                >
                  <span>Confirmar Solicitud de Cita</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
