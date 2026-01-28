import { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import { useLanguage } from '@/i18n';
import type { PageType } from '@/types';

interface NavBarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function NavBar({ currentPage, setCurrentPage }: NavBarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'uk' : 'en');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="UK Job Pathway Logo"
              className="h-20 w-auto"
            />
            <span className="font-bold text-xl text-gray-900">UK Job Pathway</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage("jobs")}
              className={`text-sm font-medium ${currentPage === 'jobs' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.nav.findJobs}
            </button>
            <button
              onClick={() => setCurrentPage("qualifications")}
              className={`text-sm font-medium ${currentPage === 'qualifications' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.nav.qualifications}
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`text-sm font-medium ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.nav.myApplications}
            </button>
            <button
              onClick={() => setCurrentPage("resources")}
              className={`text-sm font-medium ${currentPage === 'resources' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.nav.resources}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm font-medium"
              title={language === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
            >
              <span className="text-base">{language === 'en' ? '🇬🇧' : '🇺🇦'}</span>
              <span className="text-gray-700">{language === 'en' ? 'EN' : 'UK'}</span>
            </button>

            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-medium">
              A
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-sm"
            >
              <span>{language === 'en' ? '🇬🇧' : '🇺🇦'}</span>
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => { setCurrentPage("jobs"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              {t.nav.findJobs}
            </button>
            <button
              onClick={() => { setCurrentPage("qualifications"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              {t.nav.qualifications}
            </button>
            <button
              onClick={() => { setCurrentPage("dashboard"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              {t.nav.myApplications}
            </button>
            <button
              onClick={() => { setCurrentPage("resources"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              {t.nav.resources}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
