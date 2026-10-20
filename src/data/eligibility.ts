export interface EligibilityItem {
  id: string;
  question: string;
  points: string[];
}

export const eligibilityItems: EligibilityItem[] = [
  {
    id: "eligibility",
    question: "Eligibility Criteria — Who Can Apply",
    points: [
      "Students from any recognized institute across India.",
      "Includes Undergraduate (UG), Postgraduate (PG), and Junior College (11th & 12th) students.",
      "Industry professionals, working individuals, and start-up teams are also eligible to participate.",
    ],
  },
  {
    id: "team-composition",
    question: "Team Composition",
    points: [
      "Each team must consist of minimum 2 and maximum 4 members.",
      "Team members can be from the same institute or different institutes across India.",
      "Open to students from any recognized institute in India.",
      "No restriction on gender composition of the team.",
      "One team leader will serve as the official Single Point of Contact (SPOC).",
    ],
  },
];
