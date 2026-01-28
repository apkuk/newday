import { Video } from 'lucide-react';
import type { PageType } from '@/types';

interface InterviewSuccessPageProps {
  setCurrentPage: (page: PageType) => void;
}

export function InterviewSuccessPage({ setCurrentPage }: InterviewSuccessPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Video className="w-10 h-10 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Interview Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Great job! Your responses have been sent to the employer. They will review your interview and get back to you soon.
        </p>
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
