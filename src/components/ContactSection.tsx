import React, { useState, useEffect } from 'react';
import { Send, ShieldCheck, CheckCircle2, MessageCircle, Phone, Mail, MapPin, Clock, Lock, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';
import { FIRM_INFO } from '../data/mockData';

interface ContactSectionProps {
  preselectedService?: string;
  prefilledCaseDescription?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  prefilledCaseDescription,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'Venezuela',
    serviceType: 'Inmobiliario',
    caseDescription: '',
    preferredContact: 'whatsapp',
    urgency: 'normal',
    acceptedPrivacy: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      // Map service string if needed
      let mapped = 'Inmobiliario';
      if (preselectedService.toLowerCase().includes('mercantil') || preselectedService.toLowerCase().includes('corporativo')) {
        mapped = 'Mercantil';
      } else if (preselectedService.toLowerCase().includes('suces') || preselectedService.toLowerCase().includes('civil')) {
        mapped = 'Civil/Sucesoral';
      } else if (preselectedService.toLowerCase().includes('trámite') || preselectedService.toLowerCase().includes('tramite') || preselectedService.toLowerCase().includes('apostilla')) {
        mapped = 'Trámites/Apostilla';
      }
      setFormData((prev) => ({ ...prev, serviceType: mapped }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledCaseDescription) {
      setFormData((prev) => ({
        ...prev,
        caseDescription: prefilledCaseDescription + (prev.caseDescription ? '\n' + prev.caseDescription : ''),
      }));
    }
  }, [prefilledCaseDescription]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Por favor ingrese su nombre completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Por favor ingrese un correo electrónico válido.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Por favor ingrese su número de teléfono o WhatsApp.');
      return;
    }
    if (!formData.caseDescription.trim()) {
      setErrorMsg('Por favor describa brevemente los hechos o requerimiento de su caso.');
      return;
    }
    if (!formData.acceptedPrivacy) {
      setErrorMsg('Debe aceptar la política de confidencialidad.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable secure dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleDirectWhatsApp = () => {
    const text = `*SOLICITUD DE EVALUACIÓN LEGAL*%0A%0A*Nombre:* ${encodeURIComponent(formData.fullName || 'No especificado')}%0A*País:* ${encodeURIComponent(formData.country)}%0A*Materia:* ${encodeURIComponent(formData.serviceType)}%0A*Tel/WA:* ${encodeURIComponent(formData.phone || 'No especificado')}%0A*Email:* ${encodeURIComponent(formData.email || 'No especificado')}%0A*Descripción:* ${encodeURIComponent(formData.caseDescription || 'Consulta general')} `;
    const url = `https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#03150f] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#063326]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0b3327] border border-[#c5a059]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f5dfaa] mb-4">
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ATENCIÓN CONFIDENCIAL & EVALUACIÓN DE CASO</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Inicie la Evaluación de su <span className="gold-gradient-text">Caso Legal</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Complete el formulario para recibir un diagnóstico preliminar y propuesta de honorarios sin costos ocultos. Respondemos en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Confidentiality Promise */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#062c21] via-[#041c15] to-[#02110c] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mb-2">
                Canales de Atención Directa
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Atención presencial en nuestra sede corporativa en Caracas y sesiones virtuales para clientes en el interior y exterior del país.
              </p>

              {/* Contacts Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Sede Principal en Caracas:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{FIRM_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Central Telefónica:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{FIRM_INFO.phoneMain} / {FIRM_INFO.phoneDirect}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">WhatsApp Jurídico Oficial:</strong>
                    <p className="text-emerald-300 text-xs mt-0.5 font-semibold">{FIRM_INFO.whatsapp}</p>
                    <span className="text-[11px] text-slate-400">Atención ágil para consultas previas</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Correo Electrónico:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{FIRM_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Horario de Despacho:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{FIRM_INFO.scheduleHours}</p>
                  </div>
                </div>

              </div>

              {/* Confidentiality Seal */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center space-x-3 text-xs text-[#f5dfaa] bg-[#0b3327]/60 p-3 rounded-xl border border-[#c5a059]/20">
                <Lock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>
                  <strong>Secreto Profesional Garantizado:</strong> Toda la información suministrada está protegida por la Ley de Abogados y el Código de Ética Profesional.
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7 bg-[#052119] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif-luxury text-white">
                  ¡Solicitud Recibida Exitosamente!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Gracias por contactar al <strong className="text-white">Escritorio Jurídico e Inmobiliario</strong>. Uno de nuestros abogados seniors revisará la información de su caso y se comunicará con usted en menos de 24 horas hábiles.
                </p>
                <div className="bg-white/5 p-4 rounded-xl max-w-md mx-auto text-xs text-slate-300 border border-white/5">
                  <p><strong>Titular del Caso:</strong> {formData.fullName}</p>
                  <p><strong>Materia:</strong> {formData.serviceType}</p>
                  <p><strong>Canal de Contacto:</strong> {formData.email} / {formData.phone}</p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-6 py-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-900 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Acelerar Respuesta por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        country: 'Venezuela',
                        serviceType: 'Inmobiliario',
                        caseDescription: '',
                        preferredContact: 'whatsapp',
                        urgency: 'normal',
                        acceptedPrivacy: true,
                      });
                    }}
                    className="px-5 py-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold font-serif-luxury text-white">
                    Formulario de Evaluación Inicial
                  </h3>
                  <span className="text-[11px] text-[#f5dfaa] font-semibold bg-[#0b3327] px-2.5 py-0.5 rounded border border-[#c5a059]/30">
                    Sin Costo Inicial
                  </span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Dr. Alejandro Gómez"
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Correo Electrónico Corporativo / Personal *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Country of Residence */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Teléfono o WhatsApp (con código de país) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. +58 414 1234567 o +1 305..."
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      País de Residencia Actual *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      <option value="Venezuela">Venezuela</option>
                      <option value="Estados Unidos">Estados Unidos</option>
                      <option value="España">España</option>
                      <option value="Panamá">Panamá</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Chile">Chile</option>
                      <option value="México">México</option>
                      <option value="Reino Unido">Reino Unido</option>
                      <option value="Italia">Italia</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Canadá">Canadá</option>
                      <option value="Otro País">Otro País</option>
                    </select>
                  </div>
                </div>

                {/* Service Type Dropdown & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Tipo de Asesoría Requerida *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      <option value="Inmobiliario">Derecho Inmobiliario (Compraventa / Due Diligence)</option>
                      <option value="Mercantil">Derecho Mercantil / Corporativo / Sociedades</option>
                      <option value="Civil/Sucesoral">Derecho Civil, Sucesoral y Familia (Testamentos/SENIAT)</option>
                      <option value="Trámites/Apostilla">Trámites, Poderes a Distancia y Apostilla</option>
                      <option value="Otro">Otro Asunto Legal Complejo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nivel de Urgencia
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      <option value="normal">Evaluación Normal (en 24h)</option>
                      <option value="alta">Alta Prioridad (en 12h)</option>
                      <option value="inmediata">Urgente / Firma o Plazo en Curso</option>
                    </select>
                  </div>
                </div>

                {/* Case Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Breve Descripción del Caso o Inmueble *
                  </label>
                  <textarea
                    name="caseDescription"
                    rows={4}
                    value={formData.caseDescription}
                    onChange={handleChange}
                    placeholder="Describa brevemente la situación: ubicación del inmueble si aplica, estatus registral, si las partes están en el país o en el exterior, y su objetivo legal..."
                    className="w-full bg-[#02130e] border border-white/10 focus:border-[#c5a059] rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="acceptedPrivacy"
                    name="acceptedPrivacy"
                    checked={formData.acceptedPrivacy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-600 text-[#d4af37] focus:ring-[#d4af37] cursor-pointer"
                  />
                  <label htmlFor="acceptedPrivacy" className="text-xs text-slate-400 cursor-pointer">
                    Entiendo y acepto que la información enviada será tratada bajo estricta reserva y secreto profesional de conformidad con el Código de Ética del Abogado.
                  </label>
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] shadow-lg shadow-[#c5a059]/20 hover:brightness-105 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Procesando solicitud segura...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#041a13]" />
                        <span>Enviar Solicitud de Evaluación</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar por WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
