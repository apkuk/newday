import type { Application, StatusStep } from '@/types';

export const mockApplications: Application[] = [
  {
    id: 1,
    jobId: 1,
    jobTitle: "Junior Software Developer",
    company: "TechStart UK",
    status: "interview_invited",
    appliedDate: "2024-01-15",
    lastUpdate: "2024-01-18"
  },
  {
    id: 2,
    jobId: 2,
    jobTitle: "Healthcare Assistant",
    company: "NHS Trust London",
    status: "in_review",
    appliedDate: "2024-01-10",
    lastUpdate: "2024-01-12"
  },
  {
    id: 3,
    jobId: 4,
    jobTitle: "Restaurant Supervisor",
    company: "Olive Garden UK",
    status: "submitted",
    appliedDate: "2024-01-20",
    lastUpdate: "2024-01-20"
  }
];

export const statusSteps: StatusStep[] = [
  { key: "submitted", label: "Submitted", description: "Application received" },
  { key: "in_review", label: "In Review", description: "Being reviewed by employer" },
  { key: "interview_invited", label: "Interview", description: "Interview stage" },
  { key: "offer", label: "Offer", description: "Decision made" }
];
