export type PracticeAreaId = 'inmobiliario' | 'mercantil' | 'civil' | 'tramites';

export interface ServiceDetail {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceCategory {
  id: PracticeAreaId;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  summary: string;
  keyPoints: string[];
  subServices: ServiceDetail[];
  commonDocuments: string[];
  estimatedTimeline: string;
  featuredCase: string;
}

export interface StrategyStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
}

export interface SuccessCase {
  id: string;
  area: string;
  title: string;
  clientType: 'Persona Natural' | 'Empresa / Inversionista' | 'Venezolano en el Exterior';
  challenge: string;
  strategy: string;
  result: string;
  location: string;
  year: string;
  impactMetric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Inmobiliario' | 'General' | 'Honorarios' | 'Internacional';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  serviceType: string;
  caseDescription: string;
  preferredContact: 'whatsapp' | 'email' | 'call';
  urgency: 'normal' | 'alta' | 'inmediata';
  acceptedPrivacy: boolean;
}

export interface ConsultationScheduleData {
  fullName: string;
  email: string;
  phone: string;
  mode: 'virtual' | 'presencial';
  date: string;
  timeSlot: string;
  topic: string;
  notes?: string;
}
