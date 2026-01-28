export type Language = 'en' | 'uk';

export const translations = {
  en: {
    // Navigation
    nav: {
      findJobs: 'Find Jobs',
      qualifications: 'Qualifications',
      myApplications: 'My Applications',
      resources: 'Resources',
    },

    // Home page
    home: {
      badge: 'AI-Powered Job Search for Newcomers',
      title1: 'Your Journey to a',
      title2: 'UK Career Starts Here',
      subtitle: 'Find jobs, prepare for interviews, and navigate the UK job market with confidence. Built for immigrants, by people who understand the journey.',
      browseJobs: 'Browse Jobs',
      checkQualifications: 'Check My Qualifications',
      searchPlaceholder: 'Job title, company, or keyword...',
      search: 'Search',
      activeJobs: 'Active Jobs',
      visaSponsors: 'Visa Sponsors',
      successStories: 'Success Stories',
      freeResources: 'Free Resources',
      everythingYouNeed: 'Everything You Need to Succeed',
      features: {
        jobs: {
          title: 'Jobs That Welcome You',
          desc: 'Find positions from employers who value international talent',
        },
        qualifications: {
          title: 'Qualification Check',
          desc: 'Understand how your qualifications translate to UK standards',
        },
        interviews: {
          title: 'Practice Interviews',
          desc: 'AI-powered mock interviews tailored to UK culture',
        },
        resources: {
          title: 'Learn UK Norms',
          desc: 'Guides on CVs, workplace culture, and your rights',
        },
      },
      qualBanner: {
        languages: 'Available in 4 Languages',
        title: 'Not Sure If Your Qualifications Are Recognized?',
        desc: 'Our AI assistant helps you understand how your international degrees, diplomas, and professional certifications compare to UK standards. Get personalized guidance in English, French, German, or Spanish.',
      },
      featuredJobs: 'Featured Jobs',
      viewAll: 'View all',
    },

    // Jobs page
    jobs: {
      title: 'Find Your Next Opportunity',
      visaSponsorship: 'Visa Sponsorship',
      allLocations: 'All Locations',
      allIndustries: 'All Industries',
      jobsFound: 'jobs found',
      visaSponsor: 'Visa Sponsor',
      backToJobs: 'Back to jobs',
      aboutRole: 'About this role',
      requirements: 'Requirements',
      benefits: 'Benefits',
      applyNow: 'Apply Now',
      share: 'Share',
      visaSponsorshipAvailable: 'Visa Sponsorship Available',
    },

    // Application
    application: {
      backToJob: 'Back to job',
      steps: {
        eligibility: 'Eligibility',
        details: 'Your Details',
        cv: 'CV Upload',
        questions: 'Questions',
        review: 'Review',
      },
      eligibility: {
        title: 'Confirm Your Eligibility',
        rightToWork: 'I have the right to work in the UK',
        rightToWorkDesc: 'British/Irish citizen, settled status, or valid work visa',
        needSponsorship: 'I require visa sponsorship',
        needSponsorshipDesc: 'I need an employer to sponsor my work visa',
      },
      details: {
        title: 'Your Details',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
      },
      cv: {
        title: 'Upload Your CV',
        dropHere: 'Drop your CV here or click to browse',
        formats: 'PDF, DOC, or DOCX (max 5MB)',
        aiTip: 'AI CV Tip',
        aiTipText: 'UK CVs should be 2 pages max, use reverse chronological order, and include a personal statement. No photo needed!',
      },
      questions: {
        title: 'Screening Questions',
        whyInterested: 'Why are you interested in this role?',
        whyInterestedPlaceholder: 'Share what excites you about this opportunity...',
        whenStart: 'When can you start?',
        immediately: 'Immediately',
        within2Weeks: 'Within 2 weeks',
        within1Month: 'Within 1 month',
        within3Months: 'Within 3 months',
      },
      review: {
        title: 'Review Your Application',
        applyingFor: 'Applying for',
        eligibilityStatus: 'Your eligibility',
        rightToWorkConfirmed: 'Right to work confirmed',
        consent: 'I confirm that the information provided is accurate and I consent to my data being shared with the employer for this application.',
      },
      back: 'Back',
      continue: 'Continue',
      submit: 'Submit Application',
      success: {
        title: 'Application Submitted!',
        message: 'Your application has been submitted successfully. You will receive a confirmation email shortly.',
        viewApplications: 'View My Applications',
        browseMore: 'Browse More Jobs',
      },
    },

    // Dashboard
    dashboard: {
      title: 'My Applications',
      subtitle: 'Track your job applications and next steps',
      totalApplied: 'Total Applied',
      inReview: 'In Review',
      interviews: 'Interviews',
      offers: 'Offers',
      yourApplications: 'Your Applications',
      applied: 'Applied',
      updated: 'Updated',
      startInterview: 'Start Interview',
      status: {
        submitted: 'Submitted',
        in_review: 'In Review',
        interview_invited: 'Interview Invited',
        offer: 'Offer',
      },
      backToDashboard: 'Back to dashboard',
      timeline: 'Application Timeline',
      interviewInvited: 'You have been invited to interview!',
      completeWithin: 'Complete your video interview within the next 5 days.',
    },

    // Interview
    interview: {
      title: 'Video Interview',
      questionsInfo: 'You will answer {count} questions. Each response can be up to 2 minutes. You can practice first!',
      tips: {
        title: 'Tips for Success',
        quiet: 'Find a quiet, well-lit space',
        camera: 'Look at the camera, not the screen',
        speak: 'Speak clearly and take your time',
        pause: 'It is okay to pause and think',
      },
      startPractice: 'Start Practice Question',
      practiceQuestion: 'Practice Question',
      question: 'Question',
      of: 'of',
      remaining: 'remaining',
      recording: 'Recording...',
      nextQuestion: 'Next Question',
      submitInterview: 'Submit Interview',
      cameraPreview: 'Camera preview will appear here',
      success: {
        title: 'Interview Submitted!',
        message: 'Great job! Your responses have been sent to the employer. They will review your interview and get back to you soon.',
        backToDashboard: 'Back to Dashboard',
      },
    },

    // Resources
    resources: {
      title: 'Tips & Resources',
      subtitle: 'Everything you need to succeed in the UK job market. From CV writing to understanding your workplace rights.',
      all: 'All',
      video: 'Video',
      guide: 'Guide',
      start: 'Start',
      featuredCourse: 'Featured Course',
      masterclass: {
        title: 'UK Job Search Masterclass',
        desc: 'Complete guide covering CV writing, interview skills, salary negotiation, and workplace culture. Perfect for newcomers to the UK.',
        startFree: 'Start Free Course',
        modules: 'Modules',
        duration: 'Duration',
        templates: 'Templates',
      },
    },

    // Disclaimer
    disclaimer: {
      title: 'School Project Disclaimer',
      notReal: 'This is NOT a real website',
      schoolProject: 'This website was created as part of a school project to demonstrate web development skills. It is a mock-up designed for educational purposes only.',
      doNot1: 'Do NOT use this website for actual job applications or immigration advice.',
      doNot2: 'Do NOT enter any real personal information, CVs, or documents.',
      doNot3: 'Do NOT rely on any information displayed as factual immigration or employment guidance.',
      fictional: 'All job listings, companies, and features shown are fictional and created for demonstration purposes.',
      understand: 'I Understand - View Demo',
      createdBy: 'Created by Maren for a school project',
    },

    // AI Assistant
    ai: {
      title: 'AI Career Assistant',
      placeholder: 'Ask me anything...',
      greeting: "Hello! I'm your UK Job Pathway assistant. I can help you with:\n\n- Understanding UK job applications\n- CV and cover letter tips\n- Interview preparation\n- Right to work questions\n- UK workplace culture\n\nWhat would you like to know?",
    },

    // Common
    common: {
      at: 'at',
    },
  },

  uk: {
    // Navigation
    nav: {
      findJobs: 'Знайти роботу',
      qualifications: 'Кваліфікації',
      myApplications: 'Мої заявки',
      resources: 'Ресурси',
    },

    // Home page
    home: {
      badge: 'Пошук роботи з ШІ для новоприбулих',
      title1: 'Ваш шлях до',
      title2: "Кар'єри у Великобританії починається тут",
      subtitle: "Знаходьте роботу, готуйтеся до співбесід та впевнено орієнтуйтеся на ринку праці Великобританії. Створено для іммігрантів людьми, які розуміють цей шлях.",
      browseJobs: 'Переглянути вакансії',
      checkQualifications: 'Перевірити кваліфікацію',
      searchPlaceholder: 'Посада, компанія або ключове слово...',
      search: 'Пошук',
      activeJobs: 'Активних вакансій',
      visaSponsors: 'Візових спонсорів',
      successStories: 'Історій успіху',
      freeResources: 'Безкоштовних ресурсів',
      everythingYouNeed: 'Все необхідне для успіху',
      features: {
        jobs: {
          title: 'Вакансії, що вітають вас',
          desc: 'Знаходьте позиції від роботодавців, які цінують міжнародні таланти',
        },
        qualifications: {
          title: 'Перевірка кваліфікації',
          desc: 'Дізнайтеся, як ваші кваліфікації відповідають стандартам Великобританії',
        },
        interviews: {
          title: 'Практика співбесід',
          desc: 'Пробні співбесіди з ШІ, адаптовані до культури Великобританії',
        },
        resources: {
          title: 'Вивчайте норми Великобританії',
          desc: 'Посібники з резюме, робочої культури та ваших прав',
        },
      },
      qualBanner: {
        languages: 'Доступно 4 мовами',
        title: 'Не впевнені, чи визнаються ваші кваліфікації?',
        desc: 'Наш ШІ-асистент допоможе вам зрозуміти, як ваші міжнародні дипломи та професійні сертифікати порівнюються зі стандартами Великобританії.',
      },
      featuredJobs: 'Рекомендовані вакансії',
      viewAll: 'Переглянути всі',
    },

    // Jobs page
    jobs: {
      title: 'Знайдіть свою наступну можливість',
      visaSponsorship: 'Візова підтримка',
      allLocations: 'Усі локації',
      allIndustries: 'Усі галузі',
      jobsFound: 'вакансій знайдено',
      visaSponsor: 'Візовий спонсор',
      backToJobs: 'Назад до вакансій',
      aboutRole: 'Про цю роль',
      requirements: 'Вимоги',
      benefits: 'Переваги',
      applyNow: 'Подати заявку',
      share: 'Поділитися',
      visaSponsorshipAvailable: 'Візова підтримка доступна',
    },

    // Application
    application: {
      backToJob: 'Назад до вакансії',
      steps: {
        eligibility: 'Право на роботу',
        details: 'Ваші дані',
        cv: 'Завантаження CV',
        questions: 'Питання',
        review: 'Перевірка',
      },
      eligibility: {
        title: 'Підтвердіть ваше право на роботу',
        rightToWork: 'Я маю право на роботу у Великобританії',
        rightToWorkDesc: 'Громадянин Великобританії/Ірландії, статус осілості або дійсна робоча віза',
        needSponsorship: 'Мені потрібна візова підтримка',
        needSponsorshipDesc: 'Мені потрібен роботодавець для спонсорування робочої візи',
      },
      details: {
        title: 'Ваші дані',
        firstName: "Ім'я",
        lastName: 'Прізвище',
        email: 'Електронна пошта',
        phone: 'Телефон',
      },
      cv: {
        title: 'Завантажте ваше CV',
        dropHere: 'Перетягніть CV сюди або натисніть для вибору',
        formats: 'PDF, DOC або DOCX (макс. 5МБ)',
        aiTip: 'Порада ШІ щодо CV',
        aiTipText: 'CV у Великобританії має бути максимум 2 сторінки, у зворотному хронологічному порядку та з особистою заявою. Фото не потрібно!',
      },
      questions: {
        title: 'Відбіркові питання',
        whyInterested: 'Чому вас цікавить ця роль?',
        whyInterestedPlaceholder: 'Розкажіть, що вас приваблює в цій можливості...',
        whenStart: 'Коли ви можете почати?',
        immediately: 'Негайно',
        within2Weeks: 'Протягом 2 тижнів',
        within1Month: 'Протягом 1 місяця',
        within3Months: 'Протягом 3 місяців',
      },
      review: {
        title: 'Перегляд вашої заявки',
        applyingFor: 'Подання на',
        eligibilityStatus: 'Ваше право на роботу',
        rightToWorkConfirmed: 'Право на роботу підтверджено',
        consent: 'Я підтверджую, що надана інформація є точною, і даю згоду на передачу моїх даних роботодавцю для цієї заявки.',
      },
      back: 'Назад',
      continue: 'Продовжити',
      submit: 'Подати заявку',
      success: {
        title: 'Заявку подано!',
        message: 'Вашу заявку успішно подано. Ви отримаєте підтвердження електронною поштою.',
        viewApplications: 'Переглянути мої заявки',
        browseMore: 'Переглянути більше вакансій',
      },
    },

    // Dashboard
    dashboard: {
      title: 'Мої заявки',
      subtitle: 'Відстежуйте ваші заявки на роботу та наступні кроки',
      totalApplied: 'Всього подано',
      inReview: 'На розгляді',
      interviews: 'Співбесіди',
      offers: 'Пропозиції',
      yourApplications: 'Ваші заявки',
      applied: 'Подано',
      updated: 'Оновлено',
      startInterview: 'Почати співбесіду',
      status: {
        submitted: 'Подано',
        in_review: 'На розгляді',
        interview_invited: 'Запрошено на співбесіду',
        offer: 'Пропозиція',
      },
      backToDashboard: 'Назад до панелі',
      timeline: 'Хронологія заявки',
      interviewInvited: 'Вас запрошено на співбесіду!',
      completeWithin: 'Завершіть відео-співбесіду протягом наступних 5 днів.',
    },

    // Interview
    interview: {
      title: 'Відео-співбесіда',
      questionsInfo: 'Ви відповісте на {count} питань. Кожна відповідь може тривати до 2 хвилин. Спочатку можете потренуватися!',
      tips: {
        title: 'Поради для успіху',
        quiet: 'Знайдіть тихе, добре освітлене місце',
        camera: 'Дивіться в камеру, а не на екран',
        speak: 'Говоріть чітко і не поспішайте',
        pause: 'Можна зробити паузу і подумати',
      },
      startPractice: 'Почати пробне питання',
      practiceQuestion: 'Пробне питання',
      question: 'Питання',
      of: 'з',
      remaining: 'залишилося',
      recording: 'Запис...',
      nextQuestion: 'Наступне питання',
      submitInterview: 'Надіслати співбесіду',
      cameraPreview: 'Тут буде попередній перегляд камери',
      success: {
        title: 'Співбесіду надіслано!',
        message: 'Чудова робота! Ваші відповіді надіслано роботодавцю. Вони переглянуть співбесіду і зв\'яжуться з вами.',
        backToDashboard: 'Назад до панелі',
      },
    },

    // Resources
    resources: {
      title: 'Поради та ресурси',
      subtitle: 'Все необхідне для успіху на ринку праці Великобританії. Від написання CV до розуміння ваших прав.',
      all: 'Усі',
      video: 'Відео',
      guide: 'Посібник',
      start: 'Почати',
      featuredCourse: 'Рекомендований курс',
      masterclass: {
        title: 'Майстер-клас з пошуку роботи у Великобританії',
        desc: 'Повний посібник з написання CV, навичок співбесіди, переговорів про зарплату та робочої культури. Ідеально для новоприбулих.',
        startFree: 'Почати безкоштовний курс',
        modules: 'Модулів',
        duration: 'Тривалість',
        templates: 'Шаблонів',
      },
    },

    // Disclaimer
    disclaimer: {
      title: 'Застереження: Шкільний проект',
      notReal: 'Це НЕ справжній веб-сайт',
      schoolProject: 'Цей веб-сайт створено в рамках шкільного проекту для демонстрації навичок веб-розробки. Це макет, призначений лише для навчальних цілей.',
      doNot1: 'НЕ використовуйте цей сайт для реальних заявок на роботу чи імміграційних консультацій.',
      doNot2: 'НЕ вводьте реальну особисту інформацію, CV чи документи.',
      doNot3: 'НЕ покладайтеся на інформацію як на фактичні імміграційні чи трудові поради.',
      fictional: 'Усі вакансії, компанії та функції є вигаданими і створені для демонстрації.',
      understand: 'Я розумію - Переглянути демо',
      createdBy: 'Створено Мареном для шкільного проекту',
    },

    // AI Assistant
    ai: {
      title: 'ШІ-помічник з кар\'єри',
      placeholder: 'Запитайте що завгодно...',
      greeting: "Привіт! Я ваш помічник UK Job Pathway. Я можу допомогти з:\n\n- Розумінням заявок на роботу у Великобританії\n- Порадами щодо CV та супровідних листів\n- Підготовкою до співбесіди\n- Питаннями про право на роботу\n- Робочою культурою Великобританії\n\nЩо б ви хотіли дізнатися?",
    },

    // Common
    common: {
      at: 'у',
    },
  },
};

export type TranslationKeys = typeof translations.en;
export type Translations = Record<Language, TranslationKeys>;
