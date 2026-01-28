import { CheckCircle } from 'lucide-react';
import type { PageType, Job } from '@/types';

interface ApplicationSuccessPageProps {
  job: Job | null;
  setCurrentPage: (page: PageType) => void;
}

export function ApplicationSuccessPage({ job, setCurrentPage }: ApplicationSuccessPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Your application for {job?.title} at {job?.company} has been submitted successfully. You will receive a confirmation email shortly.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View My Applications
          </button>
          <button
            onClick={() => setCurrentPage("jobs")}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition border"
          >
            Browse More Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
