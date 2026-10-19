export interface RuleGroup {
  heading?: string;
  points: string[];
}

export interface RuleEvaluation {
  label: string;
  weight: string;
}

export interface RulePhase {
  id: string;
  question: string;
  objective?: string;
  groups: RuleGroup[];
  deadline?: string;
  evaluationHeading?: string;
  evaluation?: RuleEvaluation[];
}

export const generalRules: string[] = [
  "All submissions must be original and created during the event.",
  "Teams must use the official PPT template for Idea-Problem Statements Submission.",
  "Plagiarism, misconduct, or violation of code of conduct will lead to disqualification.",
  "Judges' decisions will be final and binding.",
];

export const judgingCriteria: RuleEvaluation[] = [
  { label: "Problem Understanding & Relevance", weight: "20%" },
  { label: "Innovation & Novelty", weight: "25%" },
  { label: "Technical Feasibility & Implementation", weight: "25%" },
  { label: "Scalability & Sustainability", weight: "15%" },
  { label: "Presentation & Clarity", weight: "15%" },
];

export const phaseRules: RulePhase[] = [
  {
    id: "phase-1",
    question: "Phase 1 – Screening & Shortlisting",
    objective:
      "Shortlist teams for the final hackathon based on the idea and feasibility.",
    groups: [
      {
        heading: "Rules",
        points: [
          "Teams must consist of 2-4 members (and not more than 4) (from same or different institutes in India).",
          "Teams submit a Problem Statement + Idea + Solution in the PPT template.",
        ],
      },
      {
        heading: "Submissions must clearly include",
        points: [
          "Problem Statement chosen (from HackNova themes)",
          "Proposed approach / methodology",
          "Expected impact / benefits",
          "Preliminary tech stack (optional diagrams/mockups)",
        ],
      },
      {
        points: [
          "Teams can submit only one idea. Multiple submissions by the same team will be rejected.",
          "Idea originality is mandatory; plagiarism will lead to disqualification.",
        ],
      },
    ],
    deadline: "20th November 2026",
    evaluationHeading: "Evaluation Criteria (Phase 1)",
    evaluation: [
      { label: "Relevance & clarity of problem", weight: "30%" },
      { label: "Innovation & creativity of solution", weight: "30%" },
      { label: "Feasibility / practicality of implementation", weight: "20%" },
      { label: "Overall presentation & communication", weight: "20%" },
    ],
  },
  {
    id: "phase-2",
    question: "Phase 2 – Hackathon / Prototype Round",
    objective: "Develop a working prototype / solution within the hackathon duration.",
    groups: [
      {
        heading: "Rules",
        points: [
          "Only shortlisted teams from Phase 1 can participate.",
          "Teams have 36 hours to build a working prototype.",
          "All coding, designing, and prototyping must be done during the hackathon.",
          "Pre-existing code or frameworks are allowed only if declared during submission and do not constitute the main solution.",
        ],
      },
      {
        heading: "Teams must submit",
        points: [
          "Working prototype / demo",
          "Final presentation / demo video (if applicable)",
          "Source code repository / documentation link",
        ],
      },
      {
        points: [
          "Teams must present their solution to the judging panel within the allotted time.",
          "Judges' decisions are final; top teams will receive prizes from the ₹1.45 Lakh pool.",
        ],
      },
    ],
  },
];
