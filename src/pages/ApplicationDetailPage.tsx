import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';
import { statusSteps } from '@/data';
import type { PageType, Application } from '@/types';

interface ApplicationDetailPageProps {
  application: Application | null;
  setCurrentPage: (page: PageType) => void;
}

export function ApplicationDetailPage({ application, setCurrentPage }: ApplicationDetailPageProps) {
  if (!application) return null;

  const currentStatusIndex = statusSteps.findIndex(s => s.key === application.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentPage("dashboard")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </button>

        <div className="bg-white rounded-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">{application.jobTitle}</h1>
              <p className="text-gray-500">{application.company}</p>
            </div>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
              Interview Invited
            </span>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold mb-6">Application Timeline</h2>
            <div className="relative">
              {statusSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 mb-6 last:mb-0">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      idx <= currentStatusIndex ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {idx < currentStatusIndex ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    </div>
                    {idx < statusSteps.length - 1 && (
                      <div className={`absolute top-10 left-1/2 w-0.5 h-8 -translate-x-1/2 ${
                        idx < currentStatusIndex ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                  <div className="pt-2">
                    <p className={`font-medium ${idx <= currentStatusIndex ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.label}
                    </p>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {application.status === 'interview_invited' && (
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold text-purple-900 mb-2">You have been invited to interview!</h3>
              <p className="text-purple-700 mb-4">Complete your video interview within the next 5 days.</p>
              <button
                onClick={() => setCurrentPage("interview")}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
              >
                Start Interview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
