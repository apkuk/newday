import { ArrowLeft, CheckCircle, Upload, Sparkles, FileText } from 'lucide-react';
import { useLanguage } from '@/i18n';
import type { PageType, Job } from '@/types';

interface ApplicationPageProps {
  job: Job | null;
  applicationStep: number;
  setApplicationStep: (step: number) => void;
  setCurrentPage: (page: PageType) => void;
}

export function ApplicationPage({ job, applicationStep, setApplicationStep, setCurrentPage }: ApplicationPageProps) {
  const { t } = useLanguage();
  const steps = [
    t.application.steps.eligibility,
    t.application.steps.details,
    t.application.steps.cv,
    t.application.steps.questions,
    t.application.steps.review
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentPage("jobDetail")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> {t.application.backToJob}
        </button>

        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex justify-between mb-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  idx <= applicationStep ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {idx < applicationStep ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                </div>
                <span className={`text-xs mt-2 ${idx <= applicationStep ? 'text-blue-600' : 'text-gray-400'}`}>{step}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${(applicationStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8">
          {applicationStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.application.eligibility.title}</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="eligibility" className="mt-1" />
                  <div>
                    <p className="font-medium">{t.application.eligibility.rightToWork}</p>
                    <p className="text-sm text-gray-500">{t.application.eligibility.rightToWorkDesc}</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="eligibility" className="mt-1" />
                  <div>
                    <p className="font-medium">{t.application.eligibility.needSponsorship}</p>
                    <p className="text-sm text-gray-500">{t.application.eligibility.needSponsorshipDesc}</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {applicationStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.application.details.title}</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.application.details.firstName}</label>
                    <input type="text" className="w-full border rounded-lg px-4 py-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.application.details.lastName}</label>
                    <input type="text" className="w-full border rounded-lg px-4 py-3" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.application.details.email}</label>
                  <input type="email" className="w-full border rounded-lg px-4 py-3" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.application.details.phone}</label>
                  <input type="tel" className="w-full border rounded-lg px-4 py-3" placeholder="+44 7XXX XXXXXX" />
                </div>
              </div>
            </div>
          )}

          {applicationStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.application.cv.title}</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">{t.application.cv.dropHere}</p>
                <p className="text-sm text-gray-500">{t.application.cv.formats}</p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">{t.application.cv.aiTip}</p>
                  <p className="text-sm text-blue-700">{t.application.cv.aiTipText}</p>
                </div>
              </div>
            </div>
          )}

          {applicationStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.application.questions.title}</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.application.questions.whyInterested} *
                  </label>
                  <textarea className="w-full border rounded-lg px-4 py-3 h-32" placeholder={t.application.questions.whyInterestedPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.application.questions.whenStart} *
                  </label>
                  <select className="w-full border rounded-lg px-4 py-3">
                    <option>{t.application.questions.immediately}</option>
                    <option>{t.application.questions.within2Weeks}</option>
                    <option>{t.application.questions.within1Month}</option>
                    <option>{t.application.questions.within3Months}</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {applicationStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.application.review.title}</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">{t.application.review.applyingFor}</p>
                  <p className="font-semibold">{job?.title} {t.common.at} {job?.company}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">{t.application.review.eligibilityStatus}</p>
                  <p className="font-semibold">{t.application.review.rightToWorkConfirmed}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">CV</p>
                  <p className="font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4" /> my-cv.pdf
                  </p>
                </div>
              </div>
              <label className="flex items-start gap-3 mt-6">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-600">
                  {t.application.review.consent}
                </span>
              </label>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => applicationStep > 0 && setApplicationStep(applicationStep - 1)}
              className={`px-6 py-3 rounded-xl font-medium ${applicationStep === 0 ? 'invisible' : 'border hover:bg-gray-50'}`}
            >
              {t.application.back}
            </button>
            <button
              onClick={() => {
                if (applicationStep < 4) {
                  setApplicationStep(applicationStep + 1);
                } else {
                  setCurrentPage("applicationSuccess");
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              {applicationStep === 4 ? t.application.submit : t.application.continue}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
