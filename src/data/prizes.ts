export interface MainPrize {
  id: string;
  rank: string;
  amount: string;
  medal: "gold" | "silver";
}

export interface SpecialAward {
  id: string;
  title: string;
  amount: string;
}

export const mainPrizes: MainPrize[] = [
  { id: "first", rank: "1st Prize", amount: "₹75,000", medal: "gold" },
  { id: "second", rank: "2nd Prize", amount: "₹50,000", medal: "silver" },
];

export const specialAwards: SpecialAward[] = [
  { id: "social-impact", title: "Best Social Impact Solution", amount: "₹10,000" },
  { id: "design-ux", title: "Best Design & User Experience", amount: "₹10,000" },
];
