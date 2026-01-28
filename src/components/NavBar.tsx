import { useState } from 'react';
import { Globe, Bell, Menu } from 'lucide-react';
import type { PageType } from '@/types';

interface NavBarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function NavBar({ currentPage, setCurrentPage }: NavBarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">UK Job Pathway</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage("jobs")}
              className={`text-sm font-medium ${currentPage === 'jobs' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Find Jobs
            </button>
            <button
              onClick={() => setCurrentPage("qualifications")}
              className={`text-sm font-medium ${currentPage === 'qualifications' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Qualifications
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`text-sm font-medium ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              My Applications
            </button>
            <button
              onClick={() => setCurrentPage("resources")}
              className={`text-sm font-medium ${currentPage === 'resources' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Resources
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

          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => { setCurrentPage("jobs"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              Find Jobs
            </button>
            <button
              onClick={() => { setCurrentPage("qualifications"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              Qualifications
            </button>
            <button
              onClick={() => { setCurrentPage("dashboard"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              My Applications
            </button>
            <button
              onClick={() => { setCurrentPage("resources"); setMobileMenu(false); }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
            >
              Resources
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
