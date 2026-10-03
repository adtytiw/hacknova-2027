import {
  Rocket,
  Users,
  Clock,
  MapPin,
  Trophy,
  Code,
  Lightbulb,
  Sparkles,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface KeyDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description?: string;
  isHighlight?: boolean;
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

export interface Prize {
  place: string;
  percentage: number;
  color: string;
}

export interface JudgingCriterion {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EligibleDomain {
  name: string;
  description: string;
}

export const keyDetails: KeyDetail[] = [
  { label: "Prize Pool", value: "$20,000+", icon: Trophy },
  { label: "Date", value: "April 10-12, 2026", icon: Clock },
  { label: "Duration", value: "36 Hours", icon: Rocket },
  { label: "Location", value: "MIT Campus", icon: MapPin },
  { label: "Team Size", value: "1-5 Members", icon: Users },
  { label: "Format", value: "In-Person Only", icon: Code },
];

export const schedule: ScheduleDay[] = [
  {
    day: "Friday",
    date: "April 10",
    events: [
      { time: "6:00 PM", title: "Kickoff & Opening Ceremony", isHighlight: true },
      { time: "7:00 PM", title: "Sponsor Introductions" },
      { time: "8:00 PM", title: "Workshop Sessions" },
      { time: "9:00 PM", title: "Hacking Begins!", isHighlight: true },
    ],
  },
  {
    day: "Saturday",
    date: "April 11",
    events: [
      { time: "All Day", title: "Hacking Continues" },
      { time: "12:00 PM", title: "Lunch Break" },
      { time: "2:00 PM", title: "Mentor Office Hours" },
      { time: "6:00 PM", title: "Dinner Break" },
      { time: "10:00 PM", title: "Midnight Snacks" },
    ],
  },
  {
    day: "Sunday",
    date: "April 12",
    events: [
      { time: "6:00 AM", title: "Hacking Ends", isHighlight: true },
      { time: "6:00-8:00 AM", title: "Submission Period" },
      { time: "8:00 AM", title: "Submission Deadline", isHighlight: true },
      { time: "8:00 AM - 12:00 PM", title: "Judging Period" },
      { time: "12:30 PM", title: "Finalist Presentations", isHighlight: true },
      { time: "2:00 PM", title: "Winners Announced", isHighlight: true },
    ],
  },
];

export const prizes: Prize[] = [
  { place: "1st Place", percentage: 15, color: "#FFD700" },
  { place: "2nd Place", percentage: 10, color: "#C0C0C0" },
  { place: "3rd Place", percentage: 5, color: "#CD7F32" },
  { place: "Community Split", percentage: 70, color: "#F97316" },
];

export const judgingCriteria: JudgingCriterion[] = [
  {
    title: "Technical",
    description: "Completeness, functionality, and relevance of resources utilized.",
    icon: Code,
  },
  {
    title: "Originality",
    description: "Novel approach or solution that hasn't been done before.",
    icon: Lightbulb,
  },
  {
    title: "Ambitious",
    description: "Complexity of the problem or the approach to solving it.",
    icon: Rocket,
  },
  {
    title: "Design & UX",
    description: "Pleasant and delightful user experience and flow.",
    icon: Palette,
  },
  {
    title: "Wow Factor",
    description: "The project is exceptional in some manner.",
    icon: Sparkles,
  },
  {
    title: "Sponsor Criteria",
    description: "Specific requirements from sponsor challenge descriptions.",
    icon: Trophy,
  },
];

export const eligibleDomains: EligibleDomain[] = [
  { name: "Bitcoin", description: "Core, Lightning Network, Taproot" },
  { name: "DeFi", description: "Decentralized Finance applications" },
  { name: "Wallets & Payments", description: "Payment solutions and wallet tech" },
  { name: "Privacy Tech", description: "Privacy-preserving technologies" },
  { name: "Smart Contracts", description: "On-chain programmable logic" },
  { name: "Dev Tools", description: "Developer tools and infrastructure" },
];

export const faqItems: FAQItem[] = [
  {
    question: "Do I need blockchain experience to participate?",
    answer:
      "Not at all! This hackathon is beginner-friendly. We'll have workshops and mentors to help you get started. Historically, some of our best submissions come from people new to the space.",
  },
  {
    question: "Can I participate remotely?",
    answer:
      "No, this is an in-person only event at MIT Campus. We believe the collaborative atmosphere, networking opportunities, and hands-on mentorship are best experienced in person.",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "You can participate solo or in teams of up to 5 members. We encourage individual applications - you can find teammates through our Discord #team-search channel after being accepted.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop, charger, and enthusiasm! We'll provide food, drinks, workspace, and WiFi. Bring any hardware you might need for your project.",
  },
  {
    question: "How does the community prize split work?",
    answer:
      "70% of the prize pool is distributed among all qualifying submissions based on ranked or tiered scoring. This means your hard work is rewarded even if you don't place in the top 3.",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer:
      "You can develop concepts and ideas beforehand, but all code must be written during the hackathon period. Version control with regular commits is mandatory to verify this.",
  },
  {
    question: "What happens if I'm selected as a finalist?",
    answer:
      "Finalists will be announced on Discord around 8:00 AM on Sunday. You'll pitch your project in person between 12:30 PM and 2:00 PM the same day.",
  },
  {
    question: "Is there an age requirement?",
    answer: "Yes, participants must be 18 years of age or older at the time of the event.",
  },
];

export const submissionRequirements = [
  "Short slide deck with project motivation, description, and technology",
  "GitHub repository with proper commit history during hackathon",
  "Demo video (3-5 minutes) showing your project in action",
  "Optional: Link to live application with access credentials",
];

export const getStartedSteps = [
  {
    step: 1,
    title: "Register",
    description: "Create a Devpost account and complete the application form.",
  },
  {
    step: 2,
    title: "Join Discord",
    description: "Once accepted, join our Discord to connect with participants.",
  },
  {
    step: 3,
    title: "Form Your Team",
    description: "Pitch ideas and form teams in person on Day 1.",
  },
  {
    step: 4,
    title: "Attend Kickoff",
    description: "Join us at MIT on Friday, April 10th at 6:00 PM ET.",
  },
  {
    step: 5,
    title: "Build & Submit",
    description: "Code your project and submit on Devpost before the deadline.",
  },
];
