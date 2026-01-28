import { BookOpen, Calendar, Users, TrendingUp, Globe, Headphones, MessageCircle, Award, Check, Play, Star } from 'lucide-react';
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

  const pricingPlans = [
    { ...t.learnEnglish.pricing.starter, highlighted: false },
    { ...t.learnEnglish.pricing.popular, highlighted: true },
    { ...t.learnEnglish.pricing.intensive, highlighted: false },
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-indigo-700 mb-8 shadow-sm border border-indigo-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {t.learnEnglish.badge}
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

      {/* Pricing Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.learnEnglish.pricing.title}</h2>
            <p className="text-gray-600 text-lg">{t.learnEnglish.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'ring-2 ring-indigo-600 shadow-2xl shadow-indigo-500/20 scale-105'
                    : 'border border-gray-200 hover:border-indigo-200 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {t.learnEnglish.mostPopular}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-gray-600">£</span>
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-indigo-100' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-indigo-600' : 'text-gray-600'}`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t.learnEnglish.getStarted}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Olena K.', country: 'Ukraine', text: 'SpeakEasy helped me prepare for my job interviews in English. I got the job!' },
              { name: 'Maria S.', country: 'Poland', text: 'The tutors are so patient and helpful. My confidence has grown so much.' },
              { name: 'Ahmed R.', country: 'Egypt', text: 'Flexible scheduling is perfect for my busy work life. Highly recommend!' },
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
    </div>
  );
}
