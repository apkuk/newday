import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, User, FileText, Video, BookOpen, CheckCircle, Circle, ArrowLeft, Upload, Sparkles, Globe, Heart, Shield, TrendingUp, MessageCircle, Send, Bot, X, Menu, Bell, GraduationCap, Languages, Award, ChevronDown } from 'lucide-react';

// Mock Data
const mockJobs = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechStart UK",
    location: "London (Hybrid)",
    salary: "£28,000 - £35,000",
    type: "Full-time",
    posted: "2 days ago",
    sponsorship: true,
    description: "Join our growing team building innovative web applications. Perfect for graduates looking to start their tech career in the UK.",
    requirements: ["JavaScript/React basics", "Eager to learn", "Good communication skills"],
    benefits: ["Visa sponsorship available", "25 days holiday", "Learning budget", "Flexible working"],
    industry: "Technology",
    experience: "Entry Level"
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    company: "NHS Trust London",
    location: "London",
    salary: "£22,383 - £24,336",
    type: "Full-time",
    posted: "1 day ago",
    sponsorship: true,
    description: "Support patients and nursing staff in providing excellent care. Training provided for overseas qualified candidates.",
    requirements: ["Compassionate nature", "Basic English proficiency", "Right to work or eligible for Health & Care visa"],
    benefits: ["NHS pension", "Generous leave", "Career progression", "Relocation support"],
    industry: "Healthcare",
    experience: "Entry Level"
  },
  {
    id: 3,
    title: "Marketing Coordinator",
    company: "Global Brands Ltd",
    location: "Manchester",
    salary: "£26,000 - £30,000",
    type: "Full-time",
    posted: "5 days ago",
    sponsorship: false,
    description: "Coordinate marketing campaigns across multiple channels. Great opportunity for creative individuals with marketing experience.",
    requirements: ["1-2 years marketing experience", "Social media skills", "Creative mindset"],
    benefits: ["Bonus scheme", "Hybrid working", "Team events"],
    industry: "Marketing",
    experience: "1-2 Years"
  },
  {
    id: 4,
    title: "Restaurant Supervisor",
    company: "Olive Garden UK",
    location: "Birmingham",
    salary: "£24,000 - £28,000",
    type: "Full-time",
    posted: "3 days ago",
    sponsorship: true,
    description: "Lead a team in our busy restaurant. We value international experience and diverse perspectives.",
    requirements: ["Hospitality experience", "Leadership skills", "Customer focus"],
    benefits: ["Visa sponsorship", "Meals on shift", "Tips", "Career growth"],
    industry: "Hospitality",
    experience: "1-2 Years"
  },
  {
    id: 5,
    title: "Warehouse Operative",
    company: "FastShip Logistics",
    location: "Bristol",
    salary: "£11.50 - £13.00/hour",
    type: "Full-time",
    posted: "Today",
    sponsorship: false,
    description: "Pick, pack and dispatch orders in our modern distribution centre. Full training provided.",
    requirements: ["Physical fitness", "Attention to detail", "Flexible with shifts"],
    benefits: ["Weekly pay", "Overtime available", "Staff discounts"],
    industry: "Logistics",
    experience: "No Experience"
  },
  {
    id: 6,
    title: "Teaching Assistant",
    company: "Bright Futures Academy",
    location: "Leeds",
    salary: "£18,000 - £22,000",
    type: "Full-time",
    posted: "1 week ago",
    sponsorship: false,
    description: "Support teachers and students in a diverse, multicultural school environment.",
    requirements: ["Passion for education", "Good English", "DBS check required"],
    benefits: ["School holidays", "Training provided", "Pension scheme"],
    industry: "Education",
    experience: "Entry Level"
  }
];

const mockApplications = [
  { id: 1, jobId: 1, jobTitle: "Junior Software Developer", company: "TechStart UK", status: "interview_invited", appliedDate: "2024-01-15", lastUpdate: "2024-01-18" },
  { id: 2, jobId: 2, jobTitle: "Healthcare Assistant", company: "NHS Trust London", status: "in_review", appliedDate: "2024-01-10", lastUpdate: "2024-01-12" },
  { id: 3, jobId: 4, jobTitle: "Restaurant Supervisor", company: "Olive Garden UK", status: "submitted", appliedDate: "2024-01-20", lastUpdate: "2024-01-20" }
];

const mockResources = [
  { id: 1, title: "UK CV Writing Guide", category: "CV & Applications", type: "guide", duration: "10 min read", icon: FileText, description: "Learn the UK CV format that employers expect" },
  { id: 2, title: "Interview Success Workshop", category: "Interviews", type: "video", duration: "15 min", icon: Video, description: "Master common UK interview questions" },
  { id: 3, title: "Understanding Your Rights", category: "Employment Law", type: "guide", duration: "8 min read", icon: Shield, description: "Know your workplace rights in the UK" },
  { id: 4, title: "Right to Work Explained", category: "Immigration", type: "guide", duration: "12 min read", icon: Globe, description: "Navigate visa and work permit requirements" },
  { id: 5, title: "Salary Negotiation Tips", category: "Offers", type: "video", duration: "10 min", icon: TrendingUp, description: "Confidently discuss compensation" },
  { id: 6, title: "UK Workplace Culture", category: "Getting Started", type: "guide", duration: "7 min read", icon: Heart, description: "Understand British workplace norms" }
];

const statusSteps = [
  { key: "submitted", label: "Submitted", description: "Application received" },
  { key: "in_review", label: "In Review", description: "Being reviewed by employer" },
  { key: "interview_invited", label: "Interview", description: "Interview stage" },
  { key: "offer", label: "Offer", description: "Decision made" }
];

// Language translations for the qualification chatbot
const translations = {
  en: {
    title: "Qualification Recognition",
    subtitle: "Understand how your qualifications translate to UK standards",
    placeholder: "Describe your qualification (e.g., 'I have a Bachelor's degree in Engineering from India')",
    greeting: "Hello! I'm your Qualification Recognition Assistant. I can help you understand how your international qualifications compare to UK standards.\n\nTell me about your qualifications - include:\n- The qualification name\n- The country where you obtained it\n- The field of study\n- The year (if relevant)\n\nFor example: \"I have a Master's degree in Computer Science from Germany\" or \"I'm a qualified nurse from the Philippines\"",
    thinking: "Analyzing your qualification...",
    langLabel: "Language",
    commonQuestions: "Common questions:",
    questions: [
      "How do I get my degree recognized?",
      "What is ENIC-NARIC?",
      "Do I need to convert my qualification?"
    ]
  },
  fr: {
    title: "Reconnaissance des Qualifications",
    subtitle: "Comprenez comment vos qualifications se traduisent aux normes britanniques",
    placeholder: "Decrivez votre qualification (ex: 'J'ai une Licence en Ingenierie de France')",
    greeting: "Bonjour! Je suis votre Assistant de Reconnaissance des Qualifications. Je peux vous aider a comprendre comment vos qualifications internationales se comparent aux normes britanniques.\n\nParlez-moi de vos qualifications - incluez:\n- Le nom de la qualification\n- Le pays ou vous l'avez obtenue\n- Le domaine d'etudes\n- L'annee (si pertinent)\n\nPar exemple: \"J'ai un Master en Informatique d'Allemagne\" ou \"Je suis infirmiere qualifiee des Philippines\"",
    thinking: "Analyse de votre qualification...",
    langLabel: "Langue",
    commonQuestions: "Questions frequentes:",
    questions: [
      "Comment faire reconnaitre mon diplome?",
      "Qu'est-ce que ENIC-NARIC?",
      "Dois-je convertir ma qualification?"
    ]
  },
  de: {
    title: "Qualifikationsanerkennung",
    subtitle: "Verstehen Sie, wie Ihre Qualifikationen den UK-Standards entsprechen",
    placeholder: "Beschreiben Sie Ihre Qualifikation (z.B., 'Ich habe einen Bachelor in Ingenieurwesen aus Deutschland')",
    greeting: "Hallo! Ich bin Ihr Qualifikationsanerkennungs-Assistent. Ich kann Ihnen helfen zu verstehen, wie Ihre internationalen Qualifikationen mit den britischen Standards verglichen werden.\n\nErzahlen Sie mir von Ihren Qualifikationen - nennen Sie:\n- Den Namen der Qualifikation\n- Das Land, in dem Sie sie erworben haben\n- Das Studienfach\n- Das Jahr (falls relevant)\n\nZum Beispiel: \"Ich habe einen Master in Informatik aus Deutschland\" oder \"Ich bin ausgebildete Krankenschwester aus den Philippinen\"",
    thinking: "Analyse Ihrer Qualifikation...",
    langLabel: "Sprache",
    commonQuestions: "Haufige Fragen:",
    questions: [
      "Wie lasse ich meinen Abschluss anerkennen?",
      "Was ist ENIC-NARIC?",
      "Muss ich meine Qualifikation umwandeln?"
    ]
  },
  es: {
    title: "Reconocimiento de Cualificaciones",
    subtitle: "Comprenda como sus cualificaciones se traducen a los estandares del Reino Unido",
    placeholder: "Describa su cualificacion (ej: 'Tengo una Licenciatura en Ingenieria de Espana')",
    greeting: "Hola! Soy su Asistente de Reconocimiento de Cualificaciones. Puedo ayudarle a entender como sus cualificaciones internacionales se comparan con los estandares britanicos.\n\nCuenteme sobre sus cualificaciones - incluya:\n- El nombre de la cualificacion\n- El pais donde la obtuvo\n- El campo de estudio\n- El ano (si es relevante)\n\nPor ejemplo: \"Tengo una Maestria en Informatica de Alemania\" o \"Soy enfermera cualificada de Filipinas\"",
    thinking: "Analizando su cualificacion...",
    langLabel: "Idioma",
    commonQuestions: "Preguntas frecuentes:",
    questions: [
      "Como hago reconocer mi titulo?",
      "Que es ENIC-NARIC?",
      "Necesito convertir mi cualificacion?"
    ]
  }
};

// Qualification responses database
const qualificationResponses = {
  bachelor: {
    en: "**UK Equivalent: Bachelor's Degree (Level 6)**\n\nYour Bachelor's degree is generally well-recognized in the UK! Here's what you need to know:\n\n**Recognition Process:**\n1. Get a Statement of Comparability from UK ENIC (formerly NARIC)\n2. Cost: 49.50 GBP (standard) or 140+ GBP for verified\n3. Processing: 15-20 working days\n\n**Key Points:**\n- Most employers accept international Bachelor's degrees\n- Some regulated professions need additional registration\n- Your degree is equivalent to a UK Honours degree (3-4 years)\n\n**Next Steps:**\n- Visit enic.org.uk for official comparison\n- Check if your profession needs UK registration\n\nWould you like specific information about your field of study?",
    fr: "**Equivalent UK: Bachelor's Degree (Niveau 6)**\n\nVotre Licence est generalement bien reconnue au Royaume-Uni!\n\n**Processus de reconnaissance:**\n1. Obtenez une Declaration de Comparabilite de UK ENIC\n2. Cout: 49.50 GBP (standard)\n3. Delai: 15-20 jours ouvrables\n\n**Points cles:**\n- La plupart des employeurs acceptent les Licences internationales\n- Equivalent a un Honours degree britannique\n- Certaines professions reglementees necessitent une inscription supplementaire\n\n**Prochaines etapes:**\n- Visitez enic.org.uk pour une comparaison officielle\n\nVoulez-vous des informations specifiques sur votre domaine d'etudes?",
    de: "**UK-Aquivalent: Bachelor's Degree (Stufe 6)**\n\nIhr Bachelor-Abschluss wird im UK generell gut anerkannt!\n\n**Anerkennungsverfahren:**\n1. Vergleichbarkeitserklarung von UK ENIC beantragen\n2. Kosten: 49.50 GBP (Standard)\n3. Bearbeitung: 15-20 Werktage\n\n**Wichtige Punkte:**\n- Die meisten Arbeitgeber akzeptieren internationale Bachelor-Abschlusse\n- Entspricht einem britischen Honours degree\n- Einige regulierte Berufe erfordern zusatzliche Registrierung\n\n**Nachste Schritte:**\n- Besuchen Sie enic.org.uk fur offizielle Vergleiche\n\nMochten Sie spezifische Informationen zu Ihrem Studienfach?",
    es: "**Equivalente UK: Bachelor's Degree (Nivel 6)**\n\nSu Licenciatura/Grado es generalmente bien reconocido en el Reino Unido!\n\n**Proceso de reconocimiento:**\n1. Obtenga una Declaracion de Comparabilidad de UK ENIC\n2. Costo: 49.50 GBP (estandar)\n3. Plazo: 15-20 dias habiles\n\n**Puntos clave:**\n- La mayoria de empleadores aceptan titulos internacionales\n- Equivalente a un Honours degree britanico\n- Algunas profesiones reguladas requieren registro adicional\n\n**Proximos pasos:**\n- Visite enic.org.uk para comparacion oficial\n\nDesea informacion especifica sobre su campo de estudio?"
  },
  master: {
    en: "**UK Equivalent: Master's Degree (Level 7)**\n\nExcellent! Master's degrees are highly valued in the UK. Here's your guide:\n\n**Recognition:**\n- International Master's = UK Master's (Level 7)\n- Typically 1-2 years of postgraduate study\n- Well-recognized by UK employers\n\n**Official Recognition:**\n1. UK ENIC Statement of Comparability\n2. Cost: 49.50 GBP standard service\n3. Some employers may request this document\n\n**For Regulated Professions:**\n- Engineering: Register with Engineering Council\n- Healthcare: Register with relevant body (GMC, NMC, etc.)\n- Teaching: Apply for QTS (Qualified Teacher Status)\n\nWhat field is your Master's degree in? I can give you more specific guidance.",
    fr: "**Equivalent UK: Master's Degree (Niveau 7)**\n\nExcellent! Les diplomes de Master sont tres valorises au Royaume-Uni.\n\n**Reconnaissance:**\n- Master international = Master UK (Niveau 7)\n- Bien reconnu par les employeurs britanniques\n\n**Reconnaissance officielle:**\n1. Declaration de Comparabilite UK ENIC\n2. Cout: 49.50 GBP service standard\n\n**Pour les professions reglementees:**\n- Ingenierie: S'inscrire aupres du Engineering Council\n- Sante: S'inscrire aupres de l'organisme concerne\n- Enseignement: Demander le QTS\n\nDans quel domaine est votre Master?",
    de: "**UK-Aquivalent: Master's Degree (Stufe 7)**\n\nAusgezeichnet! Master-Abschlusse werden im UK sehr geschatzt.\n\n**Anerkennung:**\n- Internationaler Master = UK Master (Stufe 7)\n- Von britischen Arbeitgebern gut anerkannt\n\n**Offizielle Anerkennung:**\n1. UK ENIC Vergleichbarkeitserklarung\n2. Kosten: 49.50 GBP Standardservice\n\n**Fur regulierte Berufe:**\n- Ingenieurwesen: Beim Engineering Council registrieren\n- Gesundheitswesen: Bei zustandiger Stelle registrieren\n- Lehramt: QTS beantragen\n\nIn welchem Fach ist Ihr Master?",
    es: "**Equivalente UK: Master's Degree (Nivel 7)**\n\nExcelente! Los titulos de Master son muy valorados en el Reino Unido.\n\n**Reconocimiento:**\n- Master internacional = Master UK (Nivel 7)\n- Bien reconocido por empleadores britanicos\n\n**Reconocimiento oficial:**\n1. Declaracion de Comparabilidad UK ENIC\n2. Costo: 49.50 GBP servicio estandar\n\n**Para profesiones reguladas:**\n- Ingenieria: Registrarse en el Engineering Council\n- Sanidad: Registrarse en el organismo correspondiente\n- Ensenanza: Solicitar QTS\n\nEn que campo es su Master?"
  },
  phd: {
    en: "**UK Equivalent: Doctoral Degree (Level 8)**\n\nA PhD/Doctorate is the highest academic qualification and is well-respected globally!\n\n**Recognition in UK:**\n- International PhDs are generally recognized\n- UK ENIC can provide Statement of Comparability\n- Academic positions may require verification\n\n**For Academic Careers:**\n- Universities often verify directly with your institution\n- May need to provide thesis and publications\n- Postdoc positions widely available\n\n**For Industry:**\n- PhD holders are in high demand\n- Many don't require formal recognition\n- Your expertise speaks for itself!\n\nWhat field is your doctorate in?"
  },
  nursing: {
    en: "**Nursing Qualifications in the UK**\n\nTo work as a nurse in the UK, you must register with the **Nursing and Midwifery Council (NMC)**.\n\n**Requirements:**\n1. **English Language:** IELTS 7.0 overall (with minimums in each section) OR OET Grade B\n2. **CBT Test:** Computer-Based Test on UK nursing practices\n3. **OSCE:** Objective Structured Clinical Examination\n4. **Registration Fee:** ~140 GBP\n\n**Timeline:** 3-6 months typically\n\n**Good News:**\n- NHS actively recruits international nurses\n- Many trusts offer support packages\n- Skilled Worker visa sponsorship common\n\n**Countries with Automatic Recognition:**\n- EU/EEA qualifications (until recent changes)\n- Some Commonwealth agreements exist\n\nWhich country did you qualify in? I can give you more specific guidance."
  },
  medical: {
    en: "**Medical Doctor Qualifications in the UK**\n\nTo practice medicine in the UK, you must register with the **General Medical Council (GMC)**.\n\n**Pathways:**\n\n**1. PLAB Route (most common):**\n- PLAB 1: Written exam (268 GBP)\n- PLAB 2: Clinical exam (930 GBP)\n- English: IELTS 7.5 overall or OET\n\n**2. Sponsorship Route:**\n- Job offer from approved sponsor\n- Suitable for senior doctors\n\n**3. Recognized Qualifications:**\n- Some countries have direct recognition\n- Check GMC list of acceptable qualifications\n\n**Timeline:** 6-18 months typically\n\n**Important:**\n- You'll need to complete Foundation training or equivalent\n- Specialty training may need to restart\n- NHS offers many international doctor programs\n\nWhich country did you qualify in?"
  },
  engineering: {
    en: "**Engineering Qualifications in the UK**\n\nEngineering in the UK has professional registration through the **Engineering Council**.\n\n**Professional Titles:**\n- **CEng** (Chartered Engineer) - Level 7 equivalent\n- **IEng** (Incorporated Engineer) - Level 6 equivalent\n- **EngTech** (Engineering Technician) - Level 5\n\n**Your International Degree:**\n- Generally well-recognized for employment\n- Formal registration is optional but beneficial\n- Washington Accord members have easier pathways\n\n**Washington Accord Countries:**\nUSA, Canada, Australia, India, China, South Africa, Japan, South Korea, and more - degrees from these countries are recognized for CEng.\n\n**To Get Chartered:**\n1. Join relevant institution (IMechE, IET, ICE, etc.)\n2. Demonstrate competence\n3. Professional review interview\n\nWhat type of engineering is your degree in?"
  },
  teaching: {
    en: "**Teaching Qualifications in the UK**\n\nTo teach in UK state schools, you typically need **Qualified Teacher Status (QTS)**.\n\n**Routes to QTS:**\n\n**1. If you have teaching experience:**\n- Assessment Only route (4-12 weeks)\n- Must demonstrate UK Teachers' Standards\n- Cost: 1,500-4,000 GBP\n\n**2. If you need training:**\n- School Direct (salaried or fee-paying)\n- Postgraduate Certificate in Education (PGCE)\n\n**From Certain Countries:**\n- USA, Canada, Australia, New Zealand: Can apply for QTS directly\n- EU: Previous automatic recognition (check current rules)\n\n**Private/International Schools:**\n- Often don't require QTS\n- Your international qualification may be sufficient\n\n**English Requirement:**\n- GCSE Grade C/4 equivalent in English and Maths\n- May need to take equivalency test\n\nWhich country and subject did you qualify to teach?"
  },
  accounting: {
    en: "**Accounting Qualifications in the UK**\n\nThe UK has several recognized accounting bodies:\n\n**Main Professional Bodies:**\n- **ACCA** - Association of Chartered Certified Accountants\n- **ICAEW** - Institute of Chartered Accountants\n- **CIMA** - Chartered Institute of Management Accountants\n\n**Your International Qualification:**\n\n**Mutual Recognition Agreements:**\n- CPA (USA, Canada, Australia) - May get exemptions\n- CA (India, South Africa) - Partnership agreements exist\n\n**Typical Pathway:**\n1. Apply for exemptions based on your qualification\n2. Complete remaining exams\n3. Gain required work experience\n4. Become a member\n\n**Good News:**\n- Many international qualifications get significant exemptions\n- Can work in accounting while qualifying\n- Big 4 firms actively recruit internationally\n\nWhich accounting qualification do you hold and from which country?"
  },
  law: {
    en: "**Legal Qualifications in the UK**\n\nLegal practice in England & Wales requires specific requalification.\n\n**To Become a Solicitor:**\n- Must pass Solicitors Qualifying Examination (SQE)\n- SQE1: Legal knowledge (1,798 GBP)\n- SQE2: Practical skills (2,766 GBP)\n- 2 years Qualifying Work Experience\n\n**To Become a Barrister:**\n- Bar Training Course\n- Pupillage (12 months)\n\n**Your International Law Degree:**\n- Recognized for SQE entry\n- May exempt some academic requirements\n- Work experience can count toward QWE\n\n**Scotland & Northern Ireland:**\n- Have separate legal systems\n- Different qualification requirements\n\n**Alternative Paths:**\n- Legal executive (CILEx)\n- Paralegal roles (no requalification needed)\n- International law firms value foreign qualifications\n\nWhich country's legal system are you qualified in?"
  },
  enic: {
    en: "**UK ENIC (formerly NARIC) - Your Go-To Resource**\n\nUK ENIC is the official UK agency for international qualification recognition.\n\n**Services:**\n\n**1. Statement of Comparability (49.50 GBP)**\n- Compares your qualification to UK levels\n- Widely accepted by employers\n- Online application, 15-20 days\n\n**2. Career Path Report (140+ GBP)**\n- Detailed analysis\n- Includes verification\n- Professional guidance\n\n**UK Qualification Levels:**\n- Level 3: A-Levels\n- Level 4-5: Foundation/HND\n- Level 6: Bachelor's degree\n- Level 7: Master's degree\n- Level 8: Doctorate\n\n**Website:** enic.org.uk\n\n**Important:**\n- Many employers accept qualifications without ENIC\n- Regulated professions may need additional steps\n- ENIC statement is not mandatory but helpful\n\nWould you like help understanding which level your qualification might be?"
  },
  general: {
    en: "I can help you understand how various qualifications compare to UK standards. Could you please tell me more about:\n\n- **What qualification do you have?** (e.g., Bachelor's, Master's, professional certification)\n- **Which country did you obtain it from?**\n- **What field/subject is it in?**\n\nCommon areas I can help with:\n- **Academic:** Degrees, diplomas, school qualifications\n- **Healthcare:** Nursing, medicine, pharmacy, dentistry\n- **Technical:** Engineering, IT certifications\n- **Education:** Teaching qualifications\n- **Professional:** Accounting, law, HR\n\nJust describe your situation and I'll provide guidance!",
    fr: "Je peux vous aider a comprendre comment vos qualifications se comparent aux normes britanniques.\n\nPouvez-vous me dire:\n- **Quelle qualification avez-vous?**\n- **De quel pays?**\n- **Dans quel domaine?**\n\nDomaines courants:\n- **Academique:** Diplomes, certificats\n- **Sante:** Infirmier, medecin, pharmacien\n- **Technique:** Ingenierie, certifications IT\n- **Education:** Qualifications d'enseignement\n- **Professionnel:** Comptabilite, droit",
    de: "Ich kann Ihnen helfen zu verstehen, wie Ihre Qualifikationen mit den britischen Standards verglichen werden.\n\nBitte teilen Sie mir mit:\n- **Welche Qualifikation haben Sie?**\n- **Aus welchem Land?**\n- **In welchem Fachbereich?**\n\nHaufige Bereiche:\n- **Akademisch:** Abschlusse, Zertifikate\n- **Gesundheit:** Pflege, Medizin, Pharmazie\n- **Technisch:** Ingenieurwesen, IT-Zertifizierungen\n- **Bildung:** Lehrqualifikationen\n- **Beruflich:** Buchhaltung, Recht",
    es: "Puedo ayudarle a entender como sus cualificaciones se comparan con los estandares britanicos.\n\nPor favor, digame:\n- **Que cualificacion tiene?**\n- **De que pais?**\n- **En que campo?**\n\nAreas comunes:\n- **Academico:** Titulos, certificados\n- **Sanidad:** Enfermeria, medicina, farmacia\n- **Tecnico:** Ingenieria, certificaciones IT\n- **Educacion:** Cualificaciones docentes\n- **Profesional:** Contabilidad, derecho"
  }
};

// Qualification Recognition Chatbot Component
const QualificationChatbot = ({ language, setLanguage }) => {
  const t = translations[language];
  const [messages, setMessages] = useState([
    { role: "assistant", content: t.greeting }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reset messages when language changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: translations[language].greeting }]);
  }, [language]);

  const generateResponse = (userMessage, lang) => {
    const lowerInput = userMessage.toLowerCase();
    
    // Detect qualification type and provide appropriate response
    if (lowerInput.includes("bachelor") || lowerInput.includes("licence") || lowerInput.includes("licenciatura") || lowerInput.includes("grado") || lowerInput.includes("undergraduate") || lowerInput.includes("ba ") || lowerInput.includes("bs ") || lowerInput.includes("bsc") || lowerInput.includes("beng")) {
      return qualificationResponses.bachelor[lang] || qualificationResponses.bachelor.en;
    }
    if (lowerInput.includes("master") || lowerInput.includes("msc") || lowerInput.includes("ma ") || lowerInput.includes("mba") || lowerInput.includes("postgraduate") || lowerInput.includes("maestr")) {
      return qualificationResponses.master[lang] || qualificationResponses.master.en;
    }
    if (lowerInput.includes("phd") || lowerInput.includes("doctor") || lowerInput.includes("doctorat")) {
      return qualificationResponses.phd.en;
    }
    if (lowerInput.includes("nurs") || lowerInput.includes("infirm") || lowerInput.includes("kranken") || lowerInput.includes("enfermer")) {
      return qualificationResponses.nursing.en;
    }
    if (lowerInput.includes("medic") || lowerInput.includes("physician") || lowerInput.includes("arzt")) {
      return qualificationResponses.medical.en;
    }
    if (lowerInput.includes("engineer") || lowerInput.includes("ingenieur") || lowerInput.includes("ingenier")) {
      return qualificationResponses.engineering.en;
    }
    if (lowerInput.includes("teach") || lowerInput.includes("enseignant") || lowerInput.includes("lehrer") || lowerInput.includes("profesor") || lowerInput.includes("education")) {
      return qualificationResponses.teaching.en;
    }
    if (lowerInput.includes("account") || lowerInput.includes("comptab") || lowerInput.includes("buchhal") || lowerInput.includes("contab") || lowerInput.includes("cpa") || lowerInput.includes("acca")) {
      return qualificationResponses.accounting.en;
    }
    if (lowerInput.includes("law") || lowerInput.includes("legal") || lowerInput.includes("solicitor") || lowerInput.includes("barrister") || lowerInput.includes("droit") || lowerInput.includes("jura") || lowerInput.includes("derecho") || lowerInput.includes("avocat") || lowerInput.includes("anwalt") || lowerInput.includes("abogado")) {
      return qualificationResponses.law.en;
    }
    if (lowerInput.includes("enic") || lowerInput.includes("naric") || lowerInput.includes("recognition") || lowerInput.includes("statement") || lowerInput.includes("compare")) {
      return qualificationResponses.enic.en;
    }
    
    return qualificationResponses.general[lang] || qualificationResponses.general.en;
  };

  const handleSend = (messageText) => {
    const text = messageText || input;
    if (!text.trim()) return;
    
    const userMessage = text;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = generateResponse(userMessage, language);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Language Selector */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-gray-500" />
          <label className="text-sm font-medium text-gray-700">{t.langLabel}:</label>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="en">English</option>
              <option value="fr">Francais</option>
              <option value="de">Deutsch</option>
              <option value="es">Espanol</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-2 flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
              </div>
            )}
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-br-md' 
                : 'bg-gray-100 text-gray-800 rounded-bl-md'
            }`}>
              <p className="text-sm whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-md">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                </div>
                <span className="text-sm text-gray-500">{t.thinking}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">{t.commonQuestions}</p>
          <div className="flex flex-wrap gap-2">
            {t.questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.placeholder}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button 
            onClick={() => handleSend()}
            disabled={isLoading}
            className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// AI Chat Component
const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your UK Job Pathway assistant. I can help you with:\n\n- Understanding UK job applications\n- CV and cover letter tips\n- Interview preparation\n- Right to work questions\n- UK workplace culture\n\nWhat would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      let response = "";
      const lowerInput = userMessage.toLowerCase();
      
      if (lowerInput.includes("cv") || lowerInput.includes("resume")) {
        response = "Great question about CVs! Here are key UK CV tips:\n\n**Format:**\n- Keep it to 2 pages maximum\n- Use reverse chronological order\n- Include a personal statement at the top\n\n**UK-Specific Tips:**\n- Don't include a photo (unlike some countries)\n- No need for date of birth or marital status\n- Use British English spelling\n- Include your right to work status\n\nWould you like me to review your CV or explain any section in detail?";
      } else if (lowerInput.includes("interview")) {
        response = "Interview preparation is so important! Here's what to expect in UK interviews:\n\n**Common Questions:**\n- \"Tell me about yourself\" - Keep it professional, 2 minutes\n- \"Why do you want this job?\" - Show you've researched the company\n- Competency questions starting with \"Tell me about a time when...\"\n\n**UK Culture Tips:**\n- Arrive 10 minutes early\n- Firm handshake and eye contact\n- It's okay to ask about salary at the end\n- Send a thank-you email within 24 hours\n\nWant me to help you practice answering any specific questions?";
      } else if (lowerInput.includes("visa") || lowerInput.includes("right to work") || lowerInput.includes("sponsorship")) {
        response = "Right to work is crucial for job applications in the UK. Here's what you need to know:\n\n**Common Visa Types for Work:**\n- Skilled Worker Visa (needs employer sponsorship)\n- Graduate Visa (for recent UK graduates)\n- Youth Mobility Scheme (certain countries, ages 18-30)\n\n**Employer Sponsorship:**\n- Look for jobs marked 'Visa Sponsorship Available'\n- The employer must be a licensed sponsor\n- They'll guide you through the process\n\n**Important:** Always be honest about your visa status in applications. Many employers value international candidates!\n\nWhat's your current situation? I can give more specific guidance.";
      } else if (lowerInput.includes("salary") || lowerInput.includes("pay") || lowerInput.includes("money")) {
        response = "Understanding UK salaries is important! Here's a quick guide:\n\n**Typical Entry-Level Salaries (2024):**\n- Retail/Hospitality: 20,000-25,000 GBP\n- Admin/Office: 22,000-28,000 GBP\n- Graduate roles: 25,000-35,000 GBP\n- Healthcare (NHS): 22,000-28,000 GBP\n\n**Key Things to Know:**\n- Salaries are usually quoted annually (before tax)\n- National Minimum Wage is 11.44 GBP/hour (21+)\n- Tax and National Insurance are deducted automatically\n- Many jobs also offer benefits (pension, holidays)\n\nWould you like help understanding a specific job offer?";
      } else if (lowerInput.includes("culture") || lowerInput.includes("workplace")) {
        response = "UK workplace culture can be different from other countries. Here are some things to know:\n\n**Communication Style:**\n- British people often use indirect language\n- \"That's interesting\" might mean they disagree!\n- Politeness is very important - lots of \"please\" and \"thank you\"\n\n**Work Norms:**\n- Standard hours: 9am-5pm (37.5-40 hours/week)\n- Lunch break: usually 30-60 minutes\n- Tea/coffee breaks are common and social\n- After-work drinks on Fridays are popular\n\n**Good to Know:**\n- Small talk about weather is normal!\n- Punctuality is expected\n- Email is more formal than in some countries\n\nAnything specific about workplace culture you'd like to know?";
      } else {
        response = "That's a great question! While I'm a demo assistant, I can help with general guidance.\n\nHere are topics I know well:\n- CV/resume writing for UK jobs\n- Interview preparation\n- Visa and right to work\n- UK salary expectations\n- Workplace culture\n- Job application tips\n\nTry asking me about one of these topics, and I'll give you detailed, helpful information!";
      }
      
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          <span className="font-semibold">AI Career Assistant</span>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-1 rounded">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-md' 
                : 'bg-gray-100 text-gray-800 rounded-bl-md'
            }`}>
              <p className="text-sm whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function UKJobPathway() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationStep, setApplicationStep] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);
  const [showAI, setShowAI] = useState(false);
  const [filters, setFilters] = useState({ sponsorship: false, location: "", industry: "" });
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [interviewStep, setInterviewStep] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [qualLang, setQualLang] = useState("en");

  // Navigation
  const NavBar = () => (
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
            <button onClick={() => setCurrentPage("jobs")} className={`text-sm font-medium ${currentPage === 'jobs' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Find Jobs
            </button>
            <button onClick={() => setCurrentPage("qualifications")} className={`text-sm font-medium ${currentPage === 'qualifications' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Qualifications
            </button>
            <button onClick={() => setCurrentPage("dashboard")} className={`text-sm font-medium ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              My Applications
            </button>
            <button onClick={() => setCurrentPage("resources")} className={`text-sm font-medium ${currentPage === 'resources' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Resources
            </button>
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
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
            <button onClick={() => { setCurrentPage("jobs"); setMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Find Jobs</button>
            <button onClick={() => { setCurrentPage("qualifications"); setMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Qualifications</button>
            <button onClick={() => { setCurrentPage("dashboard"); setMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">My Applications</button>
            <button onClick={() => { setCurrentPage("resources"); setMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Resources</button>
          </div>
        )}
      </div>
    </nav>
  );

  // Job Card Component
  const JobCard = ({ job, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-lg font-bold text-gray-600">
          {job.company.charAt(0)}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setSavedJobs(prev => prev.includes(job.id) ? prev.filter(id => id !== job.id) : [...prev, job.id]); }}
          className="text-gray-400 hover:text-red-500 transition"
        >
          <Heart className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
      <p className="text-gray-500 text-sm mb-3">{job.company}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          <MapPin className="w-3 h-3" /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          <Clock className="w-3 h-3" /> {job.type}
        </span>
        {job.sponsorship && (
          <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            <Globe className="w-3 h-3" /> Visa Sponsor
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900">{job.salary}</span>
        <span className="text-xs text-gray-400">{job.posted}</span>
      </div>
    </div>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Job Search for Newcomers
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">UK Career Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find jobs, prepare for interviews, and navigate the UK job market with confidence. Built for immigrants, by people who understand the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage("jobs")}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Browse Jobs
            </button>
            <button 
              onClick={() => setCurrentPage("qualifications")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
            >
              Check My Qualifications
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Job title, company, or keyword..."
                className="w-full py-3 outline-none text-gray-700"
              />
            </div>
            <button 
              onClick={() => setCurrentPage("jobs")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "2,500+", label: "Active Jobs" },
            { number: "850+", label: "Visa Sponsors" },
            { number: "15,000+", label: "Success Stories" },
            { number: "50+", label: "Free Resources" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Jobs That Welcome You", desc: "Find positions from employers who value international talent", color: "blue", page: "jobs" },
              { icon: GraduationCap, title: "Qualification Check", desc: "Understand how your qualifications translate to UK standards", color: "emerald", page: "qualifications" },
              { icon: Video, title: "Practice Interviews", desc: "AI-powered mock interviews tailored to UK culture", color: "purple", page: "dashboard" },
              { icon: BookOpen, title: "Learn UK Norms", desc: "Guides on CVs, workplace culture, and your rights", color: "orange", page: "resources" }
            ].map((feature, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentPage(feature.page)}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition text-left"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100' :
                  feature.color === 'emerald' ? 'bg-emerald-100' :
                  feature.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'emerald' ? 'text-emerald-600' :
                    feature.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-6 h-6" />
                  <span className="text-emerald-200 font-medium">Available in 4 Languages</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Not Sure If Your Qualifications Are Recognized?</h2>
                <p className="text-emerald-100 mb-6">
                  Our AI assistant helps you understand how your international degrees, diplomas, and professional certifications compare to UK standards. Get personalized guidance in English, French, German, or Spanish.
                </p>
                <button 
                  onClick={() => setCurrentPage("qualifications")}
                  className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition inline-flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Check My Qualifications
                </button>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {['English', 'Francais', 'Deutsch', 'Espanol'].map((lang, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <button onClick={() => setCurrentPage("jobs")} className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.slice(0, 3).map(job => (
              <JobCard key={job.id} job={job} onClick={() => { setSelectedJob(job); setCurrentPage("jobDetail"); }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Jobs List Page
  const JobsPage = () => {
    const filteredJobs = mockJobs.filter(job => {
      if (filters.sponsorship && !job.sponsorship) return false;
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      if (filters.industry && job.industry !== filters.industry) return false;
      return true;
    });

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Find Your Next Opportunity</h1>
          
          <div className="bg-white rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="sponsorship"
                checked={filters.sponsorship}
                onChange={(e) => setFilters({...filters, sponsorship: e.target.checked})}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <label htmlFor="sponsorship" className="text-sm font-medium text-gray-700">Visa Sponsorship</label>
            </div>
            <select 
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Locations</option>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Leeds">Leeds</option>
              <option value="Bristol">Bristol</option>
            </select>
            <select 
              value={filters.industry}
              onChange={(e) => setFilters({...filters, industry: e.target.value})}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Industries</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Education">Education</option>
              <option value="Marketing">Marketing</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>

          <p className="text-gray-500 mb-4">{filteredJobs.length} jobs found</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onClick={() => { setSelectedJob(job); setCurrentPage("jobDetail"); }} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Job Detail Page
  const JobDetailPage = () => {
    if (!selectedJob) return null;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button onClick={() => setCurrentPage("jobs")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back to jobs
          </button>
          
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h1>
                <p className="text-xl text-gray-600">{selectedJob.company}</p>
              </div>
              <button 
                onClick={() => setSavedJobs(prev => prev.includes(selectedJob.id) ? prev.filter(id => id !== selectedJob.id) : [...prev, selectedJob.id])}
                className="p-3 rounded-full border hover:bg-gray-50 transition"
              >
                <Heart className={`w-6 h-6 ${savedJobs.includes(selectedJob.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-gray-500" /> {selectedJob.location}
              </span>
              <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <Briefcase className="w-4 h-4 text-gray-500" /> {selectedJob.type}
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                {selectedJob.salary}
              </span>
              {selectedJob.sponsorship && (
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4" /> Visa Sponsorship Available
                </span>
              )}
            </div>

            <div className="prose max-w-none mb-8">
              <h3 className="text-lg font-semibold mb-3">About this role</h3>
              <p className="text-gray-600 mb-6">{selectedJob.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2 mb-6">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {selectedJob.benefits.map((benefit, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => { setApplicationStep(0); setCurrentPage("apply"); }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
              <button className="px-8 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Application Flow
  const ApplicationPage = () => {
    const steps = ["Eligibility", "Your Details", "CV Upload", "Questions", "Review"];
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button onClick={() => setCurrentPage("jobDetail")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back to job
          </button>

          <div className="bg-white rounded-2xl p-6 mb-6">
            <div className="flex justify-between mb-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    idx <= applicationStep ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {idx < applicationStep ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-xs mt-2 ${idx <= applicationStep ? 'text-blue-600' : 'text-gray-400'}`}>{step}</span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${(applicationStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {applicationStep === 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Confirm Your Eligibility</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="eligibility" className="mt-1" />
                    <div>
                      <p className="font-medium">I have the right to work in the UK</p>
                      <p className="text-sm text-gray-500">British/Irish citizen, settled status, or valid work visa</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="eligibility" className="mt-1" />
                    <div>
                      <p className="font-medium">I require visa sponsorship</p>
                      <p className="text-sm text-gray-500">I need an employer to sponsor my work visa</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {applicationStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border rounded-lg px-4 py-3" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border rounded-lg px-4 py-3" placeholder="+44 7XXX XXXXXX" />
                  </div>
                </div>
              </div>
            )}

            {applicationStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Upload Your CV</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Drop your CV here or click to browse</p>
                  <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">AI CV Tip</p>
                    <p className="text-sm text-blue-700">UK CVs should be 2 pages max, use reverse chronological order, and include a personal statement. No photo needed!</p>
                  </div>
                </div>
              </div>
            )}

            {applicationStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Screening Questions</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why are you interested in this role? *
                    </label>
                    <textarea className="w-full border rounded-lg px-4 py-3 h-32" placeholder="Share what excites you about this opportunity..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When can you start? *
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3">
                      <option>Immediately</option>
                      <option>Within 2 weeks</option>
                      <option>Within 1 month</option>
                      <option>Within 3 months</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {applicationStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Review Your Application</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Applying for</p>
                    <p className="font-semibold">{selectedJob?.title} at {selectedJob?.company}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Your eligibility</p>
                    <p className="font-semibold">Right to work confirmed</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">CV</p>
                    <p className="font-semibold flex items-center gap-2">
                      <FileText className="w-4 h-4" /> my-cv.pdf
                    </p>
                  </div>
                </div>
                <label className="flex items-start gap-3 mt-6">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and I consent to my data being shared with the employer for this application.
                  </span>
                </label>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <button 
                onClick={() => applicationStep > 0 && setApplicationStep(applicationStep - 1)}
                className={`px-6 py-3 rounded-xl font-medium ${applicationStep === 0 ? 'invisible' : 'border hover:bg-gray-50'}`}
              >
                Back
              </button>
              <button 
                onClick={() => {
                  if (applicationStep < 4) {
                    setApplicationStep(applicationStep + 1);
                  } else {
                    setCurrentPage("applicationSuccess");
                  }
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                {applicationStep === 4 ? 'Submit Application' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Application Success
  const ApplicationSuccessPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Your application for {selectedJob?.title} at {selectedJob?.company} has been submitted successfully. You will receive a confirmation email shortly.
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => setCurrentPage("dashboard")}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View My Applications
          </button>
          <button 
            onClick={() => setCurrentPage("jobs")}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition border"
          >
            Browse More Jobs
          </button>
        </div>
      </div>
    </div>
  );

  // Dashboard
  const DashboardPage = () => {
    const getStatusColor = (status) => {
      const colors = {
        submitted: "bg-gray-100 text-gray-700",
        in_review: "bg-blue-100 text-blue-700",
        interview_invited: "bg-purple-100 text-purple-700",
        offer: "bg-green-100 text-green-700"
      };
      return colors[status] || "bg-gray-100 text-gray-700";
    };

    const getStatusLabel = (status) => {
      const labels = {
        submitted: "Submitted",
        in_review: "In Review",
        interview_invited: "Interview Invited",
        offer: "Offer"
      };
      return labels[status] || status;
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
  };

  // Application Detail with Timeline
  const ApplicationDetailPage = () => {
    if (!selectedApplication) return null;

    const currentStatusIndex = statusSteps.findIndex(s => s.key === selectedApplication.status);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button onClick={() => setCurrentPage("dashboard")} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back to dashboard
          </button>

          <div className="bg-white rounded-2xl p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-2xl font-bold mb-1">{selectedApplication.jobTitle}</h1>
                <p className="text-gray-500">{selectedApplication.company}</p>
              </div>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                Interview Invited
              </span>
            </div>

            <div className="mb-8">
              <h2 className="font-semibold mb-6">Application Timeline</h2>
              <div className="relative">
                {statusSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 mb-6 last:mb-0">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        idx <= currentStatusIndex ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {idx < currentStatusIndex ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </div>
                      {idx < statusSteps.length - 1 && (
                        <div className={`absolute top-10 left-1/2 w-0.5 h-8 -translate-x-1/2 ${
                          idx < currentStatusIndex ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className={`font-medium ${idx <= currentStatusIndex ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </p>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedApplication.status === 'interview_invited' && (
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-purple-900 mb-2">You have been invited to interview!</h3>
                <p className="text-purple-700 mb-4">Complete your video interview within the next 5 days.</p>
                <button 
                  onClick={() => setCurrentPage("interview")}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
                >
                  Start Interview
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Interview Module
  const InterviewPage = () => {
    const questions = [
      "Tell us about yourself and why you're interested in this role.",
      "Describe a challenging situation you've faced at work and how you handled it.",
      "What skills do you bring that make you a great fit for this position?"
    ];

    return (
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {interviewStep === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center">
              <Video className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Video Interview</h1>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                You will answer {questions.length} questions. Each response can be up to 2 minutes. You can practice first!
              </p>
              <div className="bg-yellow-50 rounded-xl p-4 mb-6 text-left">
                <h3 className="font-semibold text-yellow-800 mb-2">Tips for Success</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>- Find a quiet, well-lit space</li>
                  <li>- Look at the camera, not the screen</li>
                  <li>- Speak clearly and take your time</li>
                  <li>- It is okay to pause and think</li>
                </ul>
              </div>
              <button 
                onClick={() => setInterviewStep(1)}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition"
              >
                Start Practice Question
              </button>
            </div>
          )}

          {interviewStep >= 1 && interviewStep <= questions.length + 1 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-white font-medium">
                  {interviewStep === 1 ? 'Practice Question' : `Question ${interviewStep - 1} of ${questions.length}`}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  2:00 remaining
                </span>
              </div>

              <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-gray-500" />
                  </div>
                  <p className="text-gray-400">Camera preview will appear here</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-lg font-medium">
                  {interviewStep === 1 ? "Tell us about a hobby or interest you have outside of work." : questions[interviewStep - 2]}
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  Recording...
                </button>
                <button 
                  onClick={() => {
                    if (interviewStep <= questions.length) {
                      setInterviewStep(interviewStep + 1);
                    } else {
                      setInterviewStep(0);
                      setCurrentPage("interviewSuccess");
                    }
                  }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold"
                >
                  {interviewStep <= questions.length ? 'Next Question' : 'Submit Interview'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Interview Success
  const InterviewSuccessPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Video className="w-10 h-10 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Interview Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Great job! Your responses have been sent to the employer. They will review your interview and get back to you soon.
        </p>
        <button 
          onClick={() => setCurrentPage("dashboard")}
          className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );

  // Qualifications Page
  const QualificationsPage = () => {
    const t = translations[qualLang];
    
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
                <QualificationChatbot language={qualLang} setLanguage={setQualLang} />
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
  };

  // Resources Page
  const ResourcesPage = () => {
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
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage />;
      case "jobs": return <JobsPage />;
      case "jobDetail": return <JobDetailPage />;
      case "apply": return <ApplicationPage />;
      case "applicationSuccess": return <ApplicationSuccessPage />;
      case "dashboard": return <DashboardPage />;
      case "applicationDetail": return <ApplicationDetailPage />;
      case "interview": return <InterviewPage />;
      case "interviewSuccess": return <InterviewSuccessPage />;
      case "qualifications": return <QualificationsPage />;
      case "resources": return <ResourcesPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {renderPage()}
      
      {!showAI && currentPage !== 'qualifications' && (
        <button
          onClick={() => setShowAI(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      
      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />
    </div>
  );
}