import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from '@/i18n';
import { NavBar, AIAssistant } from '@/components';
import {
  HomePage,
  JobsPage,
  JobDetailPage,
  ApplicationPage,
  ApplicationSuccessPage,
  DashboardPage,
  ApplicationDetailPage,
  InterviewPage,
  InterviewSuccessPage,
  QualificationsPage,
  ResourcesPage,
  DisclaimerPage,
  LearnEnglishPage
} from '@/pages';
import type { PageType, Job, Application, Filters, SupportedLanguage } from '@/types';

const DISCLAIMER_ACCEPTED_KEY = 'uk-job-pathway-disclaimer-accepted';

function AppContent() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(DISCLAIMER_ACCEPTED_KEY) === 'true';
    }
    return false;
  });

  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applicationStep, setApplicationStep] = useState(0);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [showAI, setShowAI] = useState(false);
  const [filters, setFilters] = useState<Filters>({ sponsorship: false, location: "", industry: "" });
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [interviewStep, setInterviewStep] = useState(0);
  const [qualLang, setQualLang] = useState<SupportedLanguage>("en");

  const handleAcceptDisclaimer = () => {
    setHasAcceptedDisclaimer(true);
    localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, 'true');
  };

  const handleToggleSave = (jobId: number) => {
    setSavedJobs(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  // Show disclaimer page if not accepted
  if (!hasAcceptedDisclaimer) {
    return <DisclaimerPage onAccept={handleAcceptDisclaimer} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedJob={setSelectedJob}
            savedJobs={savedJobs}
            onToggleSave={handleToggleSave}
          />
        );
      case "jobs":
        return (
          <JobsPage
            filters={filters}
            setFilters={setFilters}
            setSelectedJob={setSelectedJob}
            setCurrentPage={setCurrentPage}
            savedJobs={savedJobs}
            onToggleSave={handleToggleSave}
          />
        );
      case "jobDetail":
        return (
          <JobDetailPage
            job={selectedJob}
            setCurrentPage={setCurrentPage}
            setApplicationStep={setApplicationStep}
            isSaved={selectedJob ? savedJobs.includes(selectedJob.id) : false}
            onToggleSave={() => selectedJob && handleToggleSave(selectedJob.id)}
          />
        );
      case "apply":
        return (
          <ApplicationPage
            job={selectedJob}
            applicationStep={applicationStep}
            setApplicationStep={setApplicationStep}
            setCurrentPage={setCurrentPage}
          />
        );
      case "applicationSuccess":
        return (
          <ApplicationSuccessPage
            setCurrentPage={setCurrentPage}
          />
        );
      case "dashboard":
        return (
          <DashboardPage
            setCurrentPage={setCurrentPage}
            setSelectedApplication={setSelectedApplication}
          />
        );
      case "applicationDetail":
        return (
          <ApplicationDetailPage
            application={selectedApplication}
            setCurrentPage={setCurrentPage}
          />
        );
      case "interview":
        return (
          <InterviewPage
            interviewStep={interviewStep}
            setInterviewStep={setInterviewStep}
            setCurrentPage={setCurrentPage}
          />
        );
      case "interviewSuccess":
        return (
          <InterviewSuccessPage
            setCurrentPage={setCurrentPage}
          />
        );
      case "qualifications":
        return (
          <QualificationsPage
            language={qualLang}
            setLanguage={setQualLang}
          />
        );
      case "resources":
        return <ResourcesPage />;
      case "learnEnglish":
        return <LearnEnglishPage />;
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedJob={setSelectedJob}
            savedJobs={savedJobs}
            onToggleSave={handleToggleSave}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}

      {!showAI && currentPage !== 'qualifications' && (
        <button
          onClick={() => setShowAI(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
