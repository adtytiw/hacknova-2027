export interface Patron {
  id: string;
  name: string;
  title: string;
  organization: string;
  image: string;
  color: string;
  borderColor: string;
  details?: string[];
}

export const patrons: Patron[] = [
  {
    id: "shivajirao",
    name: "Hon'ble Prof. Dr. Shivajirao Kadam",
    title: "Chancellor",
    organization: "Bharati Vidyapeeth (Deemed to be University), Pune",
    image: "/patrons/Shivajirao Kadam.jpeg",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
  {
    id: "vishwajit",
    name: "Hon'ble Dr. Vishwajit Kadam",
    title: "Secretary- Bharati Vidyapeeth, Pro Vice Chancellor",
    organization: "Bharati Vidyapeeth (Deemed to be University), Pune",
    image: "/patrons/Vishwajit Kadam.jpeg",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
  {
    id: "vivek",
    name: "Hon'ble Prof. Dr. Vivek Saoji",
    title: "Vice Chancellor",
    organization: "Bharati Vidyapeeth (Deemed to be University), Pune",
    image: "/patrons/Vivek Saoji.jpeg",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
  {
    id: "swapnali",
    name: "Ms. Swapnali Kadam",
    title: "Chairperson",
    organization: "Bharati Vidyapeeth Rabindranath Tagore School of Excellence",
    image: "/patrons/swapnali kadam.jpeg",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
  {
    id: "vilasrao",
    name: "Dr. Vilasrao Kadam",
    title: "Director",
    organization: "Bharati Vidyapeeth's Educational Complex, Navi Mumbai",
    image: "/patrons/vilasrao kadam.jpeg",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
];

export const hackathonLeadership: Patron[] = [
  {
    id: "roy",
    name: "Dr. Premasish Roy",
    title: "Hackathon Chairperson",
    details: [
      "Dean - Faculty of Management Studies, Director & Professor",
      "Department of Management Studies (Off Campus), Navi Mumbai",
    ],
    organization: "Bharati Vidyapeeth (Deemed to be University), Pune",
    image: "/hackleadership/roy.png",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
  {
    id: "mona",
    name: "Dr. Mona Sinha",
    title: "Advisory Chair",
    details: [
      "Professor & HOD",
      "Department of Management Studies (Off Campus), Navi Mumbai",
    ],
    organization: "Bharati Vidyapeeth (Deemed to be University), Pune",
    image: "/hackleadership/mona.png",
    color: "from-surface/60 to-surface/60",
    borderColor: "border-border/50",
  },
];
