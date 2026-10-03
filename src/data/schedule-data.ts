export type SessionType =
  | "keynote"
  | "fireside"
  | "talk"
  | "panel"
  | "break"
  | "logistics"
  | "award"
  | "workshop";

export interface Session {
  id?: number;
  start: string;
  end: string;
  type: SessionType;
  title: string;
  presenters?: string;
  moderator?: string;
  additionalProgramming?: boolean;
}

export interface ScheduleDay {
  date: string;
  label: string;
  value: string;
  sessions: Session[];
}

export const schedule: ScheduleDay[] = [
  {
    date: "2027-01-10",
    label: "Saturday, January 10",
    value: "saturday",
    sessions: [
      { start: "8:00 AM", end: "9:00 AM", type: "logistics", title: "Registration and Breakfast" },
      { start: "9:00 AM", end: "9:30 AM", type: "keynote", title: "Hackathon Kickoff and Challenge Briefing" },
      { start: "9:30 AM", end: "1:00 PM", type: "workshop", title: "Build Sprint: Problem Discovery and Prototyping" },
      { start: "1:00 PM", end: "2:00 PM", type: "break", title: "Lunch Break" },
      { start: "2:00 PM", end: "5:00 PM", type: "workshop", title: "Build Sprint: Team Development" },
      { start: "5:00 PM", end: "6:00 PM", type: "fireside", title: "Mentoring Round 1" },
    ],
  },
  {
    date: "2027-01-11",
    label: "Sunday, January 11",
    value: "sunday",
    sessions: [
      { start: "8:00 AM", end: "9:00 AM", type: "logistics", title: "Breakfast and Team Check-in" },
      { start: "9:00 AM", end: "12:00 PM", type: "workshop", title: "Build Sprint: Testing and Iteration" },
      { start: "12:00 PM", end: "1:00 PM", type: "break", title: "Lunch Break" },
      { start: "1:00 PM", end: "2:00 PM", type: "fireside", title: "Mentoring Round 2" },
      { start: "2:00 PM", end: "4:00 PM", type: "talk", title: "Final Demos and Project Submissions" },
      { start: "4:00 PM", end: "5:00 PM", type: "award", title: "Judging, Awards, and Closing Ceremony" },
    ],
  },
];
