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
    date: "2026-10-20",
    label: "Registration & Evaluation",
    value: "registration",
    sessions: [
      {
        start: "20 Oct 2026",
        end: "20 Oct 2026",
        type: "keynote",
        title: "Problem Statement Launch",
      },
      {
        start: "20 Oct 2026",
        end: "20 Oct 2026",
        type: "workshop",
        title: "Team Registration & Initial Idea Submission (PPT) Opens",
      },
      {
        start: "20 Nov 2026",
        end: "20 Nov 2026",
        type: "talk",
        title: "Last Date for Registration & Idea Submission",
      },
      {
        start: "27 Nov 2026",
        end: "27 Nov 2026",
        type: "award",
        title: "Phase 1 Evaluation Results & Shortlisted Teams Announcement",
      },
    ],
  },
  {
    date: "2026-12-11",
    label: "Mentoring",
    value: "mentoring",
    sessions: [
      {
        start: "11 Dec 2026",
        end: "11 Dec 2026",
        type: "fireside",
        title: "Mentoring Session 1",
      },
      {
        start: "22 Dec 2026",
        end: "22 Dec 2026",
        type: "fireside",
        title: "Mentoring Session 2",
      },
    ],
  },
  {
    date: "2027-02-06",
    label: "Grand Finale",
    value: "grand-finale",
    sessions: [
      {
        start: "6 Feb 2027",
        end: "6 Feb 2027",
        type: "keynote",
        title: "Grand Finale Commences",
      },
      {
        start: "7 Feb 2027",
        end: "7 Feb 2027",
        type: "panel",
        title: "Final Product Evaluation by Jury Panel — Round 1 (1st Half)",
      },
      {
        start: "7 Feb 2027",
        end: "7 Feb 2027",
        type: "award",
        title: "Grand Finale Concludes (Round 2) & Final Results Declaration (2nd Half)",
      },
      {
        start: "7 Feb 2027",
        end: "7 Feb 2027",
        type: "award",
        title: "Awards & Prize Distribution Ceremony (2nd Half)",
      },
    ],
  },
];
