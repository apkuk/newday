import { MapPin, Clock, Globe, Heart } from 'lucide-react';
import type { Job } from '@/types';

interface JobCardProps {
  job: Job;
  onClick: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export function JobCard({ job, onClick, isSaved, onToggleSave }: JobCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-lg font-bold text-gray-600">
          {job.company.charAt(0)}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
          className="text-gray-400 hover:text-red-500 transition"
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
      <p className="text-gray-500 text-sm mb-3">{job.company}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          <MapPin className="w-3 h-3" /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          <Clock className="w-3 h-3" /> {job.type}
        </span>
        {job.sponsorship && (
          <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            <Globe className="w-3 h-3" /> Visa Sponsor
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900">{job.salary}</span>
        <span className="text-xs text-gray-400">{job.posted}</span>
      </div>
    </div>
  );
}
