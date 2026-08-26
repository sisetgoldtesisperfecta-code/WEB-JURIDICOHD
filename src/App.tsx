import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFirm } from './components/AboutFirm';
import { ServicesSection } from './components/ServicesSection';
import { StrategyMethodology } from './components/StrategyMethodology';
import { InternationalDesk } from './components/InternationalDesk';
import { CaseStudies } from './components/CaseStudies';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { QuickEvaluator } from './components/QuickEvaluator';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [prefilledDescription, setPrefilledDescription] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactEl = document.querySelector('#contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticComplete = (service: string, summary: string) => {
    setSelectedServiceForContact(service);
    setPrefilledDescription(summary);
    const contactEl = document.querySelector('#contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#041611] text-slate-100 flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-white">
      {/* Executive Navbar */}
      <Navbar onOpenSchedule={() => setIsScheduleModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 2. Sobre la Firma (Nosotros) */}
        <AboutFirm />

        {/* 3. Servicios / Áreas de Práctica */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Metodología de Valor Añadido & Estrategia */}
        <StrategyMethodology
          onOpenConsultation={() => {
            const contactEl = document.querySelector('#contacto');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Consulta Internacional & Diáspora */}
        <InternationalDesk
          onOpenConsultation={() => setIsScheduleModalOpen(true)}
        />

        {/* 6. Casos de Éxito & Testimonios */}
        <CaseStudies
          onOpenConsultation={() => {
            const contactEl = document.querySelector('#contacto');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Preguntas Frecuentes (FAQ) */}
        <FAQSection />

        {/* 8. Formulario de Contacto & Captación de Clientes */}
        <ContactSection
          preselectedService={selectedServiceForContact}
          prefilledCaseDescription={prefilledDescription}
        />
      </main>

      {/* 9. Pie de Página (Footer) */}
      <Footer />

      {/* Modals & Floating Utility Components */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />

      <QuickEvaluator
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectServiceAndContact={handleDiagnosticComplete}
      />

      <FloatingActions onOpenSchedule={() => setIsScheduleModalOpen(true)} />
    </div>
  );
}
