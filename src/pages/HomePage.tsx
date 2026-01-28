import { Search, Sparkles, ChevronRight, Briefcase, Video, BookOpen, Languages, GraduationCap } from 'lucide-react';
import { JobCard } from '@/components/JobCard';
import { mockJobs } from '@/data';
import type { PageType, Job } from '@/types';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedJob: (job: Job) => void;
  savedJobs: number[];
  onToggleSave: (jobId: number) => void;
}

export function HomePage({ setCurrentPage, setSelectedJob, savedJobs, onToggleSave }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Job Search for Newcomers
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">UK Career Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find jobs, prepare for interviews, and navigate the UK job market with confidence. Built for immigrants, by people who understand the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("jobs")}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Browse Jobs
            </button>
            <button
              onClick={() => setCurrentPage("qualifications")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
            >
              Check My Qualifications
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, company, or keyword..."
                className="w-full py-3 outline-none text-gray-700"
              />
            </div>
            <button
              onClick={() => setCurrentPage("jobs")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "2,500+", label: "Active Jobs" },
            { number: "850+", label: "Visa Sponsors" },
            { number: "15,000+", label: "Success Stories" },
            { number: "50+", label: "Free Resources" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Jobs That Welcome You", desc: "Find positions from employers who value international talent", color: "blue", page: "jobs" as const },
              { icon: GraduationCap, title: "Qualification Check", desc: "Understand how your qualifications translate to UK standards", color: "emerald", page: "qualifications" as const },
              { icon: Video, title: "Practice Interviews", desc: "AI-powered mock interviews tailored to UK culture", color: "purple", page: "dashboard" as const },
              { icon: BookOpen, title: "Learn UK Norms", desc: "Guides on CVs, workplace culture, and your rights", color: "orange", page: "resources" as const }
            ].map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(feature.page)}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition text-left"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100' :
                  feature.color === 'emerald' ? 'bg-emerald-100' :
                  feature.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'emerald' ? 'text-emerald-600' :
                    feature.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-6 h-6" />
                  <span className="text-emerald-200 font-medium">Available in 4 Languages</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Not Sure If Your Qualifications Are Recognized?</h2>
                <p className="text-emerald-100 mb-6">
                  Our AI assistant helps you understand how your international degrees, diplomas, and professional certifications compare to UK standards. Get personalized guidance in English, French, German, or Spanish.
                </p>
                <button
                  onClick={() => setCurrentPage("qualifications")}
                  className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition inline-flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Check My Qualifications
                </button>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {['English', 'Francais', 'Deutsch', 'Espanol'].map((lang, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <button onClick={() => setCurrentPage("jobs")} className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.slice(0, 3).map(job => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => { setSelectedJob(job); setCurrentPage("jobDetail"); }}
                isSaved={savedJobs.includes(job.id)}
                onToggleSave={() => onToggleSave(job.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
