import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { schedule } from "@/data/schedule-data";
import type { Session, SessionType } from "@/data/schedule-data";

const TYPE_CONFIG: Record<SessionType, { label: string; className: string }> = {
  keynote: { label: "Keynote", className: "bg-[#C0FF70]/15 text-[#C0FF70] border-[#C0FF70]/30" },
  fireside: { label: "Fireside", className: "bg-[#C0FF70]/10 text-[#C0FF70] border-[#C0FF70]/20" },
  talk: { label: "Talk", className: "bg-[#78716C]/15 text-[#FAFAF9] border-[#78716C]/30" },
  panel: { label: "Panel", className: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
  break: { label: "Break", className: "" },
  logistics: { label: "", className: "" },
  award: { label: "Award", className: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  workshop: {
    label: "Workshop",
    className: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
};

function isStructural(s: Session) {
  return s.type === "break" || s.type === "logistics";
}

function SessionBadge({ type }: { type: SessionType }) {
  const { label, className } = TYPE_CONFIG[type];
  if (!label) return null;
  return <Badge className={cn("shrink-0 border text-xs font-medium", className)}>{label}</Badge>;
}

function ScheduleList({ sessions }: { sessions: Session[] }) {
  const mainSessions = sessions.filter((s) => !s.additionalProgramming);

  return (
    <div className="space-y-4">
      {/* Main track */}
      <div className="divide-y divide-[#292524] overflow-hidden rounded-xl border border-[#292524]">
        <div className="hidden gap-4 bg-[#1C1917]/60 px-5 py-2.5 sm:grid sm:grid-cols-[7rem_6rem_1fr]">
          <span className="text-xs tracking-widest text-[#78716C] uppercase">Time</span>
          <span className="text-xs tracking-widest text-[#78716C] uppercase">Type</span>
          <span className="text-xs tracking-widest text-[#78716C] uppercase">Session</span>
        </div>

        {mainSessions.map((s, i) => {
          if (isStructural(s)) {
            return (
              <div
                key={i}
                className="grid grid-cols-[5rem_1fr] gap-3 bg-[#0C0A09]/40 px-5 py-2.5 sm:grid-cols-[7rem_6rem_1fr] sm:gap-4"
              >
                <span className="pt-px font-mono text-xs whitespace-nowrap text-[#78716C]/70 tabular-nums">
                  {s.start}
                </span>
                <span className="text-xs text-[#78716C]/70 italic sm:col-start-3">{s.title}</span>
              </div>
            );
          }

          return (
            <div
              key={i}
              className="grid grid-cols-[5rem_1fr] gap-3 px-5 py-4 transition-colors hover:bg-[#1C1917]/60 sm:grid-cols-[7rem_6rem_1fr] sm:gap-4"
            >
              <span className="pt-0.5 font-mono text-xs whitespace-nowrap text-[#78716C] tabular-nums">
                {s.start}
              </span>
              <div className="hidden items-start pt-0.5 sm:flex">
                <SessionBadge type={s.type} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-start gap-2">
                  <div className="sm:hidden">
                    <SessionBadge type={s.type} />
                  </div>
                  <span
                    className={cn(
                      "text-sm leading-snug font-medium break-words",
                      s.title === "TBA" ? "text-[#78716C] italic" : "text-[#FAFAF9]"
                    )}
                  >
                    {s.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Demo use case: restore the additional-programming track when side programming returns. */}
    </div>
  );
}

export function Schedule({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="schedule" className="relative overflow-hidden pt-8 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent/[0.03] absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        {!hideHeader && (
        <div className="mb-10">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <p className="text-xs font-medium tracking-widest text-[#C0FF70] uppercase">Program</p>
            {/* Change 6: agenda published highlight */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C0FF70]/30 bg-[#C0FF70]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#C0FF70]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C0FF70]" />
              Agenda published
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#FAFAF9] sm:text-3xl">Schedule</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#C0FF70]" />
          <p className="mt-3 text-sm text-[#78716C]">
            April 11–12, 2026 · MIT Campus, Cambridge MA
          </p>
          {/* Change 3: preliminary disclaimer */}
          <p className="mt-1.5 text-xs text-[#78716C]/70 italic">
            Preliminary agenda — subject to change.
          </p>
        </div>
        )}

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="saturday">
            <TabsList className="mb-6 h-auto w-full rounded-lg border border-[#292524] bg-[#1C1917] p-1">
              {schedule.map((day) => (
                <TabsTrigger
                  key={day.value}
                  value={day.value}
                  className={cn(
                    "flex-1 rounded-md px-4 py-2 text-sm",
                    "data-[state=active]:bg-[#C0FF70] data-[state=active]:font-semibold data-[state=active]:text-[#0C0A09]",
                    "text-[#78716C] transition-colors hover:text-[#FAFAF9]"
                  )}
                >
                  {day.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {schedule.map((day) => (
              <TabsContent key={day.value} value={day.value}>
                <ScheduleList sessions={day.sessions} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Demo use case: restore the schedule legend when the type key is needed again. */}
      </div>
    </section>
  );
}
