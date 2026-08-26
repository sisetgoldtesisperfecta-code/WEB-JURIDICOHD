import React, { useState, useEffect } from 'react';
import { Scale, Phone, Calendar, Menu, X, Globe, Shield, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Firma', href: '#firma' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Estrategia', href: '#estrategia' },
    { label: 'Internacional', href: '#internacional' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with executive credentials and contacts */}
      <div className="bg-[#02130e] border-b border-[#c5a059]/20 text-xs text-slate-300 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#d4af37] font-medium tracking-wide">
              <Shield className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
              {FIRM_INFO.yearsOfExperience} Años de Trayectoria e Integridad Legal
            </span>
            <span className="text-slate-400 hidden lg:inline">|</span>
            <span className="text-slate-400 hidden lg:inline">
              Caracas • Asesoría Nacional & Transfronteriza
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${FIRM_INFO.phoneMain.replace(/\s+/g, '')}`}
              className="flex items-center hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-[#c5a059]" />
              <span>{FIRM_INFO.phoneMain}</span>
            </a>
            <a
              href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20legales.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              <span>WhatsApp Directo</span>
            </a>
            <span className="text-xs bg-[#0b3b2c] text-[#e8d08d] px-2 py-0.5 rounded border border-[#c5a059]/30">
              Marco Legal 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-8 py-3.5 ${
          isScrolled
            ? 'bg-[#041a13]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-[#c5a059]/25'
            : 'bg-gradient-to-b from-[#03150f]/90 to-[#041a13]/70 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c5a059] via-[#d4af37] to-[#8c6b27] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#052119] rounded-[7px] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#f4d799]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury tracking-widest text-sm sm:text-base font-bold text-white uppercase group-hover:text-[#e8d08d] transition-colors leading-tight">
                ESCRITORIO JURÍDICO
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                E INMOBILIARIO • 1984
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 rounded-md hover:text-[#e8d08d] hover:bg-white/5 transition-all text-xs xl:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="header-cta-schedule"
              onClick={onOpenSchedule}
              className="relative group overflow-hidden px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/40 transition-all duration-300 transform active:scale-95 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#041a13]" />
              <span className="whitespace-nowrap">Agendar Consulta Legal</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e8d08d]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#c5a059]/20 bg-[#03150f] rounded-xl p-4 shadow-2xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#d4af37] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-bold text-[#041a13] bg-gradient-to-r from-[#e8d08d] via-[#d4af37] to-[#c5a059] flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta Legal</span>
              </button>
              <a
                href={`https://wa.me/${FIRM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola,%20solicito%20asesoria%20legal%20inmediata.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center space-x-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {FIRM_INFO.whatsapp}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
