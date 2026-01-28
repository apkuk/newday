import { Languages, Award, GraduationCap } from 'lucide-react';
import { QualificationChatbot } from '@/components/QualificationChatbot';
import { translations } from '@/data';
import type { SupportedLanguage } from '@/types';

interface QualificationsPageProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

export function QualificationsPage({ language, setLanguage }: QualificationsPageProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Languages className="w-4 h-4" />
            Available in 4 Languages
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px] flex flex-col">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{t.title}</h2>
                    <p className="text-emerald-100 text-sm">AI-Powered Assistant</p>
                  </div>
                </div>
              </div>
              <QualificationChatbot language={language} setLanguage={setLanguage} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                UK Qualification Levels
              </h3>
              <div className="space-y-3">
                {[
                  { level: "Level 8", equiv: "Doctorate (PhD)" },
                  { level: "Level 7", equiv: "Master's Degree" },
                  { level: "Level 6", equiv: "Bachelor's Degree" },
                  { level: "Level 5", equiv: "Foundation/HND" },
                  { level: "Level 4", equiv: "Certificate of HE" },
                  { level: "Level 3", equiv: "A-Levels" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{item.level}</span>
                    <span className="text-gray-600">{item.equiv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">UK ENIC</h3>
              <p className="text-sm text-gray-600 mb-4">
                The official UK agency for international qualification recognition.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Statement of Comparability</span>
                  <span className="font-medium">49.50 GBP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing time</span>
                  <span className="font-medium">15-20 days</span>
                </div>
              </div>
              <p className="mt-4 text-blue-600 text-sm font-medium">Visit enic.org.uk</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Regulated Professions</h3>
              <p className="text-sm text-gray-600 mb-3">
                Some professions require additional UK registration:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Medicine', 'Nursing', 'Teaching', 'Law', 'Accounting', 'Engineering'].map((prof, idx) => (
                  <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                    {prof}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
