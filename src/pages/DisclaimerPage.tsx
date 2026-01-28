import { AlertTriangle, GraduationCap, ArrowRight } from 'lucide-react';

interface DisclaimerPageProps {
  onAccept: () => void;
}

export function DisclaimerPage({ onAccept }: DisclaimerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
            School Project Disclaimer
          </h1>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-amber-900 mb-2">This is NOT a real website</h2>
                <p className="text-amber-800 text-sm">
                  This website was created as part of a <strong>school project</strong> to demonstrate web development skills.
                  It is a mock-up designed for educational purposes only.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 font-bold text-xs">!</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Do NOT</strong> use this website for actual job applications or immigration advice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 font-bold text-xs">!</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Do NOT</strong> enter any real personal information, CVs, or documents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 font-bold text-xs">!</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Do NOT</strong> rely on any information displayed as factual immigration or employment guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-800 text-center">
              All job listings, companies, and features shown are <strong>fictional</strong> and created for demonstration purposes.
            </p>
          </div>

          <button
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition flex items-center justify-center gap-2"
          >
            I Understand - View Demo
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-gray-400 text-xs mt-6">
            Created by Maren for a school project
          </p>
        </div>
      </div>
    </div>
  );
}
