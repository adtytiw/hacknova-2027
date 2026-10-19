import {
  Award,
  Crown,
  Globe,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface AboutItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whatIsHacknova = [
  "HackNova is a national-level hackathon that brings together innovators, developers, and tech enthusiasts from all over India to solve real-world problems. It gives participants a platform to brainstorm, design, and build solutions in areas like Artificial Intelligence (AI), Web3, Internet of Things (IoT), HealthTech, Environmental Innovation, Open Innovation, and Education.",
  "HackNova encourages creativity, teamwork, and learning, helping participants turn their ideas into practical solutions that can make a difference in society, industry, and the environment. It's more than just a competition—it's a launchpad for India's future innovators, connecting people across the country to learn, create, and shape the future with technology.",
];

export const whyHacknova: AboutItem[] = [
  {
    title: "Solve Real Problems",
    description:
      "Participants get to work on challenges that have a real impact on society, industry, and the environment.",
    icon: Target,
  },
  {
    title: "Social Environments Sustainability",
    description:
      "'Real Problem real solution' to ensuring a healthy and thriving social environments for all.",
    icon: Leaf,
  },
  {
    title: "Innovate and Grow",
    description:
      "Access mentorship, workshops, and hands-on experience with emerging technologies like AI, Web3, IoT, HealthTech, and more.",
    icon: TrendingUp,
  },
  {
    title: "Showcase Talent",
    description:
      "Gain recognition and opportunities to present solutions on a national stage.",
    icon: Award,
  },
  {
    title: "Shape the Future",
    description:
      "Contribute to a culture of innovation and creativity that drives India's technological progress.",
    icon: Rocket,
  },
  {
    title: "Collaborate Nationwide",
    description:
      "Connect with innovators from across India, build diverse teams, and exchange ideas.",
    icon: Users,
  },
];

export const objectives: AboutItem[] = [
  {
    title: "Encourage Innovation",
    description:
      "Inspire participants to create creative and practical solutions for real-world challenges.",
    icon: Lightbulb,
  },
  {
    title: "Protect Environment",
    description:
      "'Real Problem real solution' to ensuring a healthy and thriving social environment for all.",
    icon: Leaf,
  },
  {
    title: "Promote Collaboration",
    description: "Build teamwork and networking among innovators from across India.",
    icon: Handshake,
  },
  {
    title: "Develop Skills",
    description:
      "Provide a platform for learning and experimenting with cutting-edge technologies.",
    icon: GraduationCap,
  },
  {
    title: "Impact Society",
    description:
      "Enable solutions that address social, industrial, and environmental problems.",
    icon: Globe,
  },
  {
    title: "Empower Future Leaders",
    description: "Nurture the next generation of tech innovators and problem-solvers.",
    icon: Crown,
  },
];
