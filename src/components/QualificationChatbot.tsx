import { useState, useEffect } from 'react';
import { Languages, ChevronDown, GraduationCap, Send } from 'lucide-react';
import { translations } from '@/data/translations';
import { qualificationResponses } from '@/data/qualificationResponses';
import type { SupportedLanguage, ChatMessage } from '@/types';

interface QualificationChatbotProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

export function QualificationChatbot({ language, setLanguage }: QualificationChatbotProps) {
  const t = translations[language];
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t.greeting }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages([{ role: "assistant", content: translations[language].greeting }]);
  }, [language]);

  const generateResponse = (userMessage: string, lang: SupportedLanguage): string => {
    const lowerInput = userMessage.toLowerCase();

    if (lowerInput.includes("bachelor") || lowerInput.includes("licence") || lowerInput.includes("licenciatura") || lowerInput.includes("grado") || lowerInput.includes("undergraduate") || lowerInput.includes("ba ") || lowerInput.includes("bs ") || lowerInput.includes("bsc") || lowerInput.includes("beng")) {
      return qualificationResponses['bachelor']?.[lang] ?? qualificationResponses['bachelor']?.['en'] ?? '';
    }
    if (lowerInput.includes("master") || lowerInput.includes("msc") || lowerInput.includes("ma ") || lowerInput.includes("mba") || lowerInput.includes("postgraduate") || lowerInput.includes("maestr")) {
      return qualificationResponses['master']?.[lang] ?? qualificationResponses['master']?.['en'] ?? '';
    }
    if (lowerInput.includes("phd") || lowerInput.includes("doctor") || lowerInput.includes("doctorat")) {
      return qualificationResponses['phd']?.['en'] ?? '';
    }
    if (lowerInput.includes("nurs") || lowerInput.includes("infirm") || lowerInput.includes("kranken") || lowerInput.includes("enfermer")) {
      return qualificationResponses['nursing']?.['en'] ?? '';
    }
    if (lowerInput.includes("medic") || lowerInput.includes("physician") || lowerInput.includes("arzt")) {
      return qualificationResponses['medical']?.['en'] ?? '';
    }
    if (lowerInput.includes("engineer") || lowerInput.includes("ingenieur") || lowerInput.includes("ingenier")) {
      return qualificationResponses['engineering']?.['en'] ?? '';
    }
    if (lowerInput.includes("teach") || lowerInput.includes("enseignant") || lowerInput.includes("lehrer") || lowerInput.includes("profesor") || lowerInput.includes("education")) {
      return qualificationResponses['teaching']?.['en'] ?? '';
    }
    if (lowerInput.includes("account") || lowerInput.includes("comptab") || lowerInput.includes("buchhal") || lowerInput.includes("contab") || lowerInput.includes("cpa") || lowerInput.includes("acca")) {
      return qualificationResponses['accounting']?.['en'] ?? '';
    }
    if (lowerInput.includes("law") || lowerInput.includes("legal") || lowerInput.includes("solicitor") || lowerInput.includes("barrister") || lowerInput.includes("droit") || lowerInput.includes("jura") || lowerInput.includes("derecho") || lowerInput.includes("avocat") || lowerInput.includes("anwalt") || lowerInput.includes("abogado")) {
      return qualificationResponses['law']?.['en'] ?? '';
    }
    if (lowerInput.includes("enic") || lowerInput.includes("naric") || lowerInput.includes("recognition") || lowerInput.includes("statement") || lowerInput.includes("compare")) {
      return qualificationResponses['enic']?.['en'] ?? '';
    }

    return qualificationResponses['general']?.[lang] ?? qualificationResponses['general']?.['en'] ?? '';
  };

  const handleSend = (messageText?: string) => {
    const text = messageText ?? input;
    if (!text.trim()) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = generateResponse(text, language);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-gray-500" />
          <label className="text-sm font-medium text-gray-700">{t.langLabel}:</label>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
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

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
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
}
