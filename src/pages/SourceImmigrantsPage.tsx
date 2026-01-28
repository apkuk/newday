import { ShoppingCart, Globe, Languages, GraduationCap, Zap, Crown, Users, Heart, AlertTriangle, Star, Package, Truck } from 'lucide-react';
import { useLanguage } from '@/i18n';

export function SourceImmigrantsPage() {
  const { t } = useLanguage();

  const stats = [
    { value: '195+', label: t.sourceImmigrants.stats.countries, icon: Globe },
    { value: '7,000+', label: t.sourceImmigrants.stats.languages, icon: Languages },
    { value: '∞', label: t.sourceImmigrants.stats.degrees, icon: GraduationCap },
    { value: '110%', label: t.sourceImmigrants.stats.willingness, icon: Zap },
  ];

  const features = [
    { icon: Crown, color: 'from-yellow-500 to-amber-500', ...t.sourceImmigrants.features.premium },
    { icon: Package, color: 'from-blue-500 to-cyan-500', ...t.sourceImmigrants.features.trained },
    { icon: Heart, color: 'from-pink-500 to-rose-500', ...t.sourceImmigrants.features.grateful },
    { icon: Users, color: 'from-gray-500 to-slate-500', ...t.sourceImmigrants.features.quiet },
  ];

  const packages = [
    { ...t.sourceImmigrants.packages.basic, highlighted: false },
    { ...t.sourceImmigrants.packages.premium, highlighted: true },
    { ...t.sourceImmigrants.packages.enterprise, highlighted: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50">
      {/* Disclaimer Banner */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{t.sourceImmigrants.disclaimer}</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Tacky decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-8xl opacity-20 rotate-12">🏷️</div>
          <div className="absolute top-40 right-20 text-6xl opacity-20 -rotate-12">💰</div>
          <div className="absolute bottom-20 left-1/4 text-7xl opacity-20 rotate-6">🛒</div>
          <div className="absolute bottom-40 right-1/3 text-5xl opacity-20 -rotate-6">✨</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            {/* Sale badge */}
            <div className="inline-block mb-6 relative">
              <div className="bg-red-600 text-white px-8 py-3 rounded-full text-xl font-black transform -rotate-3 shadow-lg animate-pulse">
                {t.sourceImmigrants.badge}
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transform rotate-12">
                2for1
              </div>
            </div>

            {/* Main heading - tacky sale style */}
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              <span className="text-red-600 drop-shadow-lg">{t.sourceImmigrants.title1}</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                {t.sourceImmigrants.title2}
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t.sourceImmigrants.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-5 rounded-full font-black text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                {t.sourceImmigrants.orderNow}
              </button>
              <button className="bg-white text-gray-800 px-10 py-5 rounded-full font-bold text-xl border-4 border-dashed border-orange-400 hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
                <Truck className="w-6 h-6" />
                {t.sourceImmigrants.browseStock}
              </button>
            </div>
            <p className="text-sm text-gray-500 italic">{t.sourceImmigrants.asterisk}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-4 border-dashed border-orange-300 text-center transform hover:rotate-1 transition-transform">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <p className="text-4xl font-black text-red-600">{stat.value}</p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-4 text-gray-900">
            {t.sourceImmigrants.features.title}
          </h2>
          <p className="text-center text-red-500 text-sm mb-12">(This is satire. Please don't actually think like this.)</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-300 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            {t.sourceImmigrants.packages.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-8 ${
                  pkg.highlighted
                    ? 'ring-4 ring-red-500 shadow-2xl scale-105 z-10'
                    : 'border-2 border-gray-200'
                } transition-all`}
              >
                {pkg.highlighted && 'badge' in pkg && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                    {(pkg as { badge: string }).badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-gray-500">£</span>
                    <span className="text-5xl font-black text-red-600">{pkg.price}</span>
                    <span className="text-gray-400 line-through text-sm ml-2">per human</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Add to Cart*
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 italic">{t.sourceImmigrants.asterisk}</p>
        </div>
      </section>

      {/* Fake Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            {t.sourceImmigrants.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.sourceImmigrants.testimonials.reviews.map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-dashed border-orange-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serious Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-400" />
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.sourceImmigrants.realTalk.title}
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            {t.sourceImmigrants.realTalk.message}
          </p>
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all">
            {t.sourceImmigrants.realTalk.learnMore}
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            {t.sourceImmigrants.footer}
          </p>
        </div>
      </section>
    </div>
  );
}
