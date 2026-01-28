import { ArrowLeft, CheckCircle, Upload, Sparkles, FileText } from 'lucide-react';
import type { PageType, Job } from '@/types';

interface ApplicationPageProps {
  job: Job | null;
  applicationStep: number;
  setApplicationStep: (step: number) => void;
  setCurrentPage: (page: PageType) => void;
}

export function ApplicationPage({ job, applicationStep, setApplicationStep, setCurrentPage }: ApplicationPageProps) {
  const steps = ["Eligibility", "Your Details", "CV Upload", "Questions", "Review"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentPage("jobDetail")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> Back to job
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
              <h2 className="text-2xl font-bold mb-6">Confirm Your Eligibility</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="eligibility" className="mt-1" />
                  <div>
                    <p className="font-medium">I have the right to work in the UK</p>
                    <p className="text-sm text-gray-500">British/Irish citizen, settled status, or valid work visa</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="eligibility" className="mt-1" />
                  <div>
                    <p className="font-medium">I require visa sponsorship</p>
                    <p className="text-sm text-gray-500">I need an employer to sponsor my work visa</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {applicationStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border rounded-lg px-4 py-3" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border rounded-lg px-4 py-3" placeholder="+44 7XXX XXXXXX" />
                </div>
              </div>
            </div>
          )}

          {applicationStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upload Your CV</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">Drop your CV here or click to browse</p>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">AI CV Tip</p>
                  <p className="text-sm text-blue-700">UK CVs should be 2 pages max, use reverse chronological order, and include a personal statement. No photo needed!</p>
                </div>
              </div>
            </div>
          )}

          {applicationStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Screening Questions</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why are you interested in this role? *
                  </label>
                  <textarea className="w-full border rounded-lg px-4 py-3 h-32" placeholder="Share what excites you about this opportunity..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When can you start? *
                  </label>
                  <select className="w-full border rounded-lg px-4 py-3">
                    <option>Immediately</option>
                    <option>Within 2 weeks</option>
                    <option>Within 1 month</option>
                    <option>Within 3 months</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {applicationStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Review Your Application</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Applying for</p>
                  <p className="font-semibold">{job?.title} at {job?.company}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Your eligibility</p>
                  <p className="font-semibold">Right to work confirmed</p>
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
                  I confirm that the information provided is accurate and I consent to my data being shared with the employer for this application.
                </span>
              </label>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => applicationStep > 0 && setApplicationStep(applicationStep - 1)}
              className={`px-6 py-3 rounded-xl font-medium ${applicationStep === 0 ? 'invisible' : 'border hover:bg-gray-50'}`}
            >
              Back
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
              {applicationStep === 4 ? 'Submit Application' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
