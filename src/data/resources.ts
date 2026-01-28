import { FileText, Video, Shield, Globe, TrendingUp, Heart } from 'lucide-react';
import type { Resource } from '@/types';

export const mockResources: Resource[] = [
  {
    id: 1,
    title: "UK CV Writing Guide",
    category: "CV & Applications",
    type: "guide",
    duration: "10 min read",
    icon: FileText,
    description: "Learn the UK CV format that employers expect"
  },
  {
    id: 2,
    title: "Interview Success Workshop",
    category: "Interviews",
    type: "video",
    duration: "15 min",
    icon: Video,
    description: "Master common UK interview questions"
  },
  {
    id: 3,
    title: "Understanding Your Rights",
    category: "Employment Law",
    type: "guide",
    duration: "8 min read",
    icon: Shield,
    description: "Know your workplace rights in the UK"
  },
  {
    id: 4,
    title: "Right to Work Explained",
    category: "Immigration",
    type: "guide",
    duration: "12 min read",
    icon: Globe,
    description: "Navigate visa and work permit requirements"
  },
  {
    id: 5,
    title: "Salary Negotiation Tips",
    category: "Offers",
    type: "video",
    duration: "10 min",
    icon: TrendingUp,
    description: "Confidently discuss compensation"
  },
  {
    id: 6,
    title: "UK Workplace Culture",
    category: "Getting Started",
    type: "guide",
    duration: "7 min read",
    icon: Heart,
    description: "Understand British workplace norms"
  }
];
