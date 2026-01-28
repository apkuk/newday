import { JobCard } from '@/components/JobCard';
import { mockJobs } from '@/data';
import type { PageType, Job, Filters } from '@/types';

interface JobsPageProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  setSelectedJob: (job: Job) => void;
  setCurrentPage: (page: PageType) => void;
  savedJobs: number[];
  onToggleSave: (jobId: number) => void;
}

export function JobsPage({ filters, setFilters, setSelectedJob, setCurrentPage, savedJobs, onToggleSave }: JobsPageProps) {
  const filteredJobs = mockJobs.filter(job => {
    if (filters.sponsorship && !job.sponsorship) return false;
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.industry && job.industry !== filters.industry) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Next Opportunity</h1>

        <div className="bg-white rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="sponsorship"
              checked={filters.sponsorship}
              onChange={(e) => setFilters({...filters, sponsorship: e.target.checked})}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <label htmlFor="sponsorship" className="text-sm font-medium text-gray-700">Visa Sponsorship</label>
          </div>
          <select
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All Locations</option>
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Leeds">Leeds</option>
            <option value="Bristol">Bristol</option>
          </select>
          <select
            value={filters.industry}
            onChange={(e) => setFilters({...filters, industry: e.target.value})}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Education">Education</option>
            <option value="Marketing">Marketing</option>
            <option value="Logistics">Logistics</option>
          </select>
        </div>

        <p className="text-gray-500 mb-4">{filteredJobs.length} jobs found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
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
  );
}
