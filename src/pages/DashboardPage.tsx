import { mockApplications } from '@/data';
import type { PageType, Application, ApplicationStatus } from '@/types';

interface DashboardPageProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedApplication: (app: Application) => void;
}

export function DashboardPage({ setCurrentPage, setSelectedApplication }: DashboardPageProps) {
  const getStatusColor = (status: ApplicationStatus): string => {
    const colors: Record<ApplicationStatus, string> = {
      submitted: "bg-gray-100 text-gray-700",
      in_review: "bg-blue-100 text-blue-700",
      interview_invited: "bg-purple-100 text-purple-700",
      offer: "bg-green-100 text-green-700"
    };
    return colors[status];
  };

  const getStatusLabel = (status: ApplicationStatus): string => {
    const labels: Record<ApplicationStatus, string> = {
      submitted: "Submitted",
      in_review: "In Review",
      interview_invited: "Interview Invited",
      offer: "Offer"
    };
    return labels[status];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>
        <p className="text-gray-600 mb-8">Track your job applications and next steps</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Applied", value: mockApplications.length },
            { label: "In Review", value: mockApplications.filter(a => a.status === 'in_review').length },
            { label: "Interviews", value: mockApplications.filter(a => a.status === 'interview_invited').length },
            { label: "Offers", value: mockApplications.filter(a => a.status === 'offer').length }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="font-semibold">Your Applications</h2>
          </div>
          <div className="divide-y">
            {mockApplications.map(app => (
              <div
                key={app.id}
                className="p-6 hover:bg-gray-50 cursor-pointer transition"
                onClick={() => { setSelectedApplication(app); setCurrentPage("applicationDetail"); }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{app.jobTitle}</h3>
                    <p className="text-gray-500">{app.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                    {getStatusLabel(app.status)}
                  </span>
                </div>
                <div className="flex gap-4 mt-4 text-sm text-gray-500">
                  <span>Applied: {app.appliedDate}</span>
                  <span>Updated: {app.lastUpdate}</span>
                </div>
                {app.status === 'interview_invited' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedApplication(app); setCurrentPage("interview"); }}
                    className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                  >
                    Start Interview
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
