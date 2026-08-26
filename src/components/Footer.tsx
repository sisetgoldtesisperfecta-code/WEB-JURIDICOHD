import React from 'react';
import { Scale, MapPin, Phone, Mail, Clock, MessageCircle, Shield, Award, ChevronUp } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020e0a] text-slate-300 border-t border-[#c5a059]/25 relative overflow-hidden">
      
      {/* Top Footer Executive Bar */}
      <div className="border-b border-white/5 py-8 bg-[#03130d]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c5a059] to-[#8c6b27] p-0.5 shadow-md">
              <div className="w-full h-full bg-[#052119] rounded-[7px] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#f4d799]" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury font-bold text-white text-base sm:text-lg tracking-wider block">
                {FIRM_INFO.name}
              </span>
              <span className="text-[11px] text-[#d4af37] font-bold tracking-widest uppercase block">
                {FIRM_INFO.subtitle} • {FIRM_INFO.yearsOfExperience} Años
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20contactar%20al%20Escritorio%20Jur%C3%ADdico.`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {FIRM_INFO.whatsapp}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Volver arriba"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: About the firm */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white font-serif-luxury uppercase tracking-wider">
              Sobre la Firma
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Firma jurídica especializada en Derecho Inmobiliario, Mercantil, Sucesoral y Gestión Documental Transfronteriza. Más de 40 años resolviendo casos de alta complejidad con integridad, celeridad y riguroso apego al marco legal vigente venezolano e internacional.
            </p>
            <div className="pt-2 text-xs text-[#d4af37] space-y-1">
              <p className="flex items-center gap-1.5 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>{FIRM_INFO.barRegistration}</span>
              </p>
              <p className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secreto Profesional y Confidencialidad Garantizada</span>
              </p>
            </div>
          </div>

          {/* Col 2: Áreas de Práctica */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif-luxury uppercase tracking-wider">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Derecho Inmobiliario Nacional</a></li>
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Auditoría Registral (Due Diligence)</a></li>
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Derecho Mercantil y Sociedades</a></li>
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Declaraciones Sucesorales SENIAT</a></li>
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Poderes Consulares a Distancia</a></li>
              <li><a href="#servicios" className="hover:text-[#d4af37] transition-colors">Apostilla de La Haya & Legalizaciones</a></li>
            </ul>
          </div>

          {/* Col 3: Enlaces Rápidos */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif-luxury uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#inicio" className="hover:text-[#d4af37] transition-colors">Inicio</a></li>
              <li><a href="#firma" className="hover:text-[#d4af37] transition-colors">Nuestra Firma</a></li>
              <li><a href="#estrategia" className="hover:text-[#d4af37] transition-colors">Metodología</a></li>
              <li><a href="#internacional" className="hover:text-[#d4af37] transition-colors">Diáspora & Exterior</a></li>
              <li><a href="#casos" className="hover:text-[#d4af37] transition-colors">Casos de Éxito</a></li>
              <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-[#d4af37] transition-colors">Solicitar Consulta</a></li>
            </ul>
          </div>

          {/* Col 4: Ubicación y Horarios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif-luxury uppercase tracking-wider">
              Ubicación & Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{FIRM_INFO.phoneMain}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{FIRM_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p>{FIRM_INFO.scheduleHours}</p>
                  <p className="text-[11px] text-slate-400">{FIRM_INFO.scheduleInternational}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer / Aviso Legal */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-[#010a07] p-4 sm:p-5 rounded-xl border border-white/5 text-[11px] text-slate-400 leading-relaxed space-y-2">
            <p>
              <strong className="text-slate-300">Aviso Legal y Exención de Responsabilidad (Disclaimer):</strong> La información contenida en esta página web tiene propósitos exclusivamente informativos y de divulgación sobre los servicios profesionales prestados por el Escritorio Jurídico e Inmobiliario. La consulta o navegación en este sitio no constituye en sí misma el establecimiento de una relación formal abogado-cliente hasta tanto medie la suscripción de la correspondiente propuesta de servicios profesionales o poder legal. Cada caso posee particularidades fácticas y registrales específicas que deben ser evaluadas formalmente.
            </p>
            <p>
              Todos los trámites y actuaciones se realizan en estricto cumplimiento de la Constitución de la República Bolivariana de Venezuela, la Ley de Abogados, el Código de Ética Profesional, la Ley de Registro Público y del Notariado, la Ley Orgánica de Tributos Nacionales y demás normativas complementarias vigentes.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © 1984 - 2026 ESCRITORIO JURÍDICO E INMOBILIARIO. SISETGOLD/METODO 3P Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <span>Caripe, Monagas • Venezuela</span>
              <span>•</span>
              <span>Atención Nacional e Internacional</span>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
};
