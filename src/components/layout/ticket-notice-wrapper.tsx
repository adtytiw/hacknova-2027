"use client";

import dynamic from "next/dynamic";

const TicketNotice = dynamic(
  () => import("@/components/layout/ticket-notice").then((mod) => mod.TicketNotice),
  { ssr: false }
);

export function TicketNoticeWrapper() {
  return <TicketNotice />;
}
