import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenSchedule: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenSchedule }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* WhatsApp Tooltip */}
      {showTooltip && (
        <div className="bg-[#052119] border border-[#c5a059]/50 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl animate-bounce flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">¿Preguntas legales urgentes? Escríbanos</span>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20hacer%20una%20consulta%20legal%20inmobiliaria.`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#052119] hover:bg-[#0b3b2c] text-[#d4af37] border border-[#c5a059]/40 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
