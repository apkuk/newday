import { ArrowLeft, MapPin, Briefcase, Globe, Heart, CheckCircle } from 'lucide-react';
import type { PageType, Job } from '@/types';

interface JobDetailPageProps {
  job: Job | null;
  setCurrentPage: (page: PageType) => void;
  setApplicationStep: (step: number) => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export function JobDetailPage({ job, setCurrentPage, setApplicationStep, isSaved, onToggleSave }: JobDetailPageProps) {
  if (!job) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentPage("jobs")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> Back to jobs
        </button>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600">{job.company}</p>
            </div>
            <button
              onClick={onToggleSave}
              className="p-3 rounded-full border hover:bg-gray-50 transition"
            >
              <Heart className={`w-6 h-6 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-gray-500" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <Briefcase className="w-4 h-4 text-gray-500" /> {job.type}
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
              {job.salary}
            </span>
            {job.sponsorship && (
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" /> Visa Sponsorship Available
              </span>
            )}
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-lg font-semibold mb-3">About this role</h3>
            <p className="text-gray-600 mb-6">{job.description}</p>

            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <ul className="space-y-2 mb-6">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((benefit, idx) => (
                <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => { setApplicationStep(0); setCurrentPage("apply"); }}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
            <button className="px-8 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
