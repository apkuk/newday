import { BookOpen, Calendar, Users, TrendingUp, Globe, Headphones, MessageCircle, Award, Check, Play, Star, Heart } from 'lucide-react';
import { useLanguage } from '@/i18n';

export function LearnEnglishPage() {
  const { t } = useLanguage();

  const stats = [
    { value: '50,000+', label: t.learnEnglish.studentsWorldwide },
    { value: '500+', label: t.learnEnglish.nativeTutors },
    { value: '1M+', label: t.learnEnglish.lessonsCompleted },
    { value: '98%', label: t.learnEnglish.satisfaction },
  ];

  const features = [
    { icon: BookOpen, ...t.learnEnglish.features.personalised },
    { icon: Calendar, ...t.learnEnglish.features.flexible },
    { icon: Users, ...t.learnEnglish.features.native },
    { icon: TrendingUp, ...t.learnEnglish.features.progress },
  ];

  const courses = [
    { icon: Globe, color: 'from-blue-500 to-cyan-500', ...t.learnEnglish.courses.general },
    { icon: Award, color: 'from-purple-500 to-pink-500', ...t.learnEnglish.courses.business },
    { icon: Headphones, color: 'from-orange-500 to-red-500', ...t.learnEnglish.courses.ielts },
    { icon: MessageCircle, color: 'from-green-500 to-emerald-500', ...t.learnEnglish.courses.conversation },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-sm font-semibold text-green-700 shadow-sm border border-green-200">
                  <Heart className="w-4 h-4 fill-green-500 text-green-500" />
                  {t.learnEnglish.freeForImmigrants}
                </div>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-indigo-700 shadow-sm border border-indigo-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  {t.learnEnglish.philanthropicBadge}
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.learnEnglish.title1}
                </span>
                <br />
                <span className="text-gray-900">{t.learnEnglish.title2}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.learnEnglish.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5">
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    {t.learnEnglish.startLearning}
                  </span>
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
                  {t.learnEnglish.bookTrial}
                </button>
              </div>
            </div>

            {/* Right side - Mascot */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind mascot */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 scale-75" />
                {/* Speech bubble */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-indigo-100 animate-bounce">
                  <span className="text-2xl">Hello! 👋</span>
                </div>
                {/* Free badge on mascot */}
                <div className="absolute -bottom-2 -left-2 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg font-bold text-sm">
                  FREE!
                </div>
                {/* Mascot image */}
                <img
                  src="/phoque.png"
                  alt="SpeakEasy Mascot"
                  className="relative w-80 h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-sm">
                <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.learnEnglish.whyChoose}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.learnEnglish.courses.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
                <div className="flex items-start gap-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything Included - Free Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full text-lg font-semibold text-green-700 mb-6">
              <Heart className="w-5 h-5 fill-green-500 text-green-500" />
              {t.learnEnglish.freeForImmigrants}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.learnEnglish.included.title}</h2>
            <p className="text-gray-600 text-lg">{t.learnEnglish.included.subtitle}</p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-indigo-100 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-bl-full" />

            <div className="relative">
              {/* Price display - FREE */}
              <div className="text-center mb-10">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-7xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    £0
                  </span>
                  <span className="text-2xl text-gray-500 line-through">£149</span>
                </div>
                <p className="text-green-600 font-semibold mt-2">Forever free for immigrants</p>
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {t.learnEnglish.included.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-0.5">
                  {t.learnEnglish.getStarted}
                </button>
              </div>
            </div>
          </div>

          {/* Why Free explanation */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.learnEnglish.whyFree}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.learnEnglish.whyFreeText}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Olena K.', country: 'Ukraine', text: 'SpeakEasy helped me prepare for my job interviews in English. I got the job! And it was completely free!' },
              { name: 'Maria S.', country: 'Poland', text: 'The tutors are so patient and helpful. My confidence has grown so much. I can\'t believe this is free.' },
              { name: 'Ahmed R.', country: 'Egypt', text: 'As a new immigrant, free English lessons changed my life. Thank you Cognita!' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Decorative mascot in background */}
        <div className="absolute right-0 bottom-0 opacity-20">
          <img src="/phoque.png" alt="" className="w-64 h-64 object-contain" />
        </div>
        <div className="absolute left-0 top-0 opacity-20 transform -scale-x-100">
          <img src="/phoque.png" alt="" className="w-48 h-48 object-contain" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="flex justify-center mb-6">
            <img src="/phoque.png" alt="SpeakEasy Mascot" className="w-24 h-24 object-contain drop-shadow-lg" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t.learnEnglish.cta.title}</h2>
          <p className="text-indigo-100 text-lg mb-8">{t.learnEnglish.cta.subtitle}</p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all">
            {t.learnEnglish.cta.button}
          </button>
        </div>
      </section>

      {/* Powered by Cognita Footer */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            {t.learnEnglish.poweredBy}{' '}
            <a
              href="https://cognita.education"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-indigo-400 transition-colors"
            >
              cognita.education
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
