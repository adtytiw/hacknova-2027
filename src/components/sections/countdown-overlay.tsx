"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(publishDate: string): TimeLeft {
  const diff = new Date(publishDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function useIsPublished(publishDate: string) {
  const [published, setPublished] = useState(() => new Date(publishDate).getTime() <= Date.now());
  useEffect(() => {
    if (published) return;
    const id = setInterval(() => {
      if (new Date(publishDate).getTime() <= Date.now()) {
        setPublished(true);
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [publishDate, published]);
  return published;
}

export function CountdownOverlay({ publishDate }: { publishDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(publishDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(publishDate)), 1000);
    return () => clearInterval(id);
  }, [publishDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="bg-background/60 absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <div className="bg-accent/10 border-accent/20 flex h-9 w-9 items-center justify-center rounded-full border">
          <Lock className="text-accent h-4 w-4" />
        </div>
        <p className="text-muted text-xs font-medium tracking-widest uppercase">Available in</p>
        <div className="flex items-center gap-2">
          {days > 0 && (
            <>
              <TimeUnit value={days} label="d" />
              <Colon />
            </>
          )}
          <TimeUnit value={hours} label="h" />
          <Colon />
          <TimeUnit value={minutes} label="m" />
          <Colon />
          <TimeUnit value={seconds} label="s" />
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-foreground font-mono text-xl leading-none font-bold tabular-nums">
        {pad(value)}
      </span>
      <span className="text-muted mt-0.5 text-[10px]">{label}</span>
    </div>
  );
}

function Colon() {
  return <span className="text-muted mb-3 font-mono text-lg font-bold">:</span>;
}
