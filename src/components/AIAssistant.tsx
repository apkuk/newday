import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import type { ChatMessage } from '@/types';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I'm your UK Job Pathway assistant. I can help you with:\n\n- Understanding UK job applications\n- CV and cover letter tips\n- Interview preparation\n- Right to work questions\n- UK workplace culture\n\nWhat would you like to know?"
    }
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
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
            onKeyPress={handleKeyPress}
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
}
