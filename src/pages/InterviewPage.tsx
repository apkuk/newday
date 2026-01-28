import { Video, User } from 'lucide-react';
import { useLanguage } from '@/i18n';
import type { PageType } from '@/types';

interface InterviewPageProps {
  interviewStep: number;
  setInterviewStep: (step: number) => void;
  setCurrentPage: (page: PageType) => void;
}

export function InterviewPage({ interviewStep, setInterviewStep, setCurrentPage }: InterviewPageProps) {
  const { t } = useLanguage();

  const questions = [
    "Tell us about yourself and why you're interested in this role.",
    "Describe a challenging situation you've faced at work and how you handled it.",
    "What skills do you bring that make you a great fit for this position?"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {interviewStep === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center">
            <Video className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">{t.interview.title}</h1>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {t.interview.questionsInfo.replace('{count}', String(questions.length))}
            </p>
            <div className="bg-yellow-50 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">{t.interview.tips.title}</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>- {t.interview.tips.quiet}</li>
                <li>- {t.interview.tips.camera}</li>
                <li>- {t.interview.tips.speak}</li>
                <li>- {t.interview.tips.pause}</li>
              </ul>
            </div>
            <button
              onClick={() => setInterviewStep(1)}
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition"
            >
              {t.interview.startPractice}
            </button>
          </div>
        )}

        {interviewStep >= 1 && interviewStep <= questions.length + 1 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-medium">
                {interviewStep === 1 ? t.interview.practiceQuestion : `${t.interview.question} ${interviewStep - 1} ${t.interview.of} ${questions.length}`}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                2:00 {t.interview.remaining}
              </span>
            </div>

            <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <p className="text-gray-400">{t.interview.cameraPreview}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-lg font-medium">
                {interviewStep === 1 ? "Tell us about a hobby or interest you have outside of work." : questions[interviewStep - 2]}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                {t.interview.recording}
              </button>
              <button
                onClick={() => {
                  if (interviewStep <= questions.length) {
                    setInterviewStep(interviewStep + 1);
                  } else {
                    setInterviewStep(0);
                    setCurrentPage("interviewSuccess");
                  }
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold"
              >
                {interviewStep <= questions.length ? t.interview.nextQuestion : t.interview.submitInterview}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
