import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/i18n';
import type { PageType } from '@/types';

interface ApplicationSuccessPageProps {
  setCurrentPage: (page: PageType) => void;
}

export function ApplicationSuccessPage({ setCurrentPage }: ApplicationSuccessPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.application.success.title}</h1>
        <p className="text-gray-600 mb-8">
          {t.application.success.message}
        </p>
        <div className="space-y-3">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {t.application.success.viewApplications}
          </button>
          <button
            onClick={() => setCurrentPage("jobs")}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition border"
          >
            {t.application.success.browseMore}
          </button>
        </div>
      </div>
    </div>
  );
}
