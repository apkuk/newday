import type { LucideIcon } from 'lucide-react';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  sponsorship: boolean;
  description: string;
  requirements: string[];
  benefits: string[];
  industry: string;
  experience: string;
}

export type ApplicationStatus = 'submitted' | 'in_review' | 'interview_invited' | 'offer';

export interface Application {
  id: number;
  jobId: number;
  jobTitle: string;
  company: string;
  status: ApplicationStatus;
  appliedDate: string;
  lastUpdate: string;
}

export interface Resource {
  id: number;
  title: string;
  category: string;
  type: 'guide' | 'video';
  duration: string;
  icon: LucideIcon;
  description: string;
}

export interface StatusStep {
  key: ApplicationStatus;
  label: string;
  description: string;
}

export type SupportedLanguage = 'en' | 'fr' | 'de' | 'es';

export interface Translation {
  title: string;
  subtitle: string;
  placeholder: string;
  greeting: string;
  thinking: string;
  langLabel: string;
  commonQuestions: string;
  questions: string[];
}

export type Translations = Record<SupportedLanguage, Translation>;

export interface QualificationResponse {
  en: string;
  fr?: string;
  de?: string;
  es?: string;
}

export type QualificationResponses = Record<string, QualificationResponse>;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type PageType =
  | 'home'
  | 'jobs'
  | 'jobDetail'
  | 'apply'
  | 'applicationSuccess'
  | 'dashboard'
  | 'applicationDetail'
  | 'interview'
  | 'interviewSuccess'
  | 'qualifications'
  | 'resources'
  | 'learnEnglish'
  | 'sourceImmigrants';

export interface Filters {
  sponsorship: boolean;
  location: string;
  industry: string;
}
