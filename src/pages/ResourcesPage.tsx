import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { mockResources } from '@/data';

export function ResourcesPage() {
  const categories = ["All", "CV & Applications", "Interviews", "Employment Law", "Immigration", "Offers", "Getting Started"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All"
    ? mockResources
    : mockResources.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Tips & Resources</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to succeed in the UK job market. From CV writing to understanding your workplace rights.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {resource.type === 'video' ? 'Video' : 'Guide'}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{resource.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{resource.duration}</span>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                  Start <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">Featured Course</span>
              <h2 className="text-2xl font-bold mb-4">UK Job Search Masterclass</h2>
              <p className="text-blue-100 mb-6">
                Complete guide covering CV writing, interview skills, salary negotiation, and workplace culture. Perfect for newcomers to the UK.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                Start Free Course
              </button>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-blue-200 text-sm">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2h</div>
                <div className="text-blue-200 text-sm">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5</div>
                <div className="text-blue-200 text-sm">Templates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
