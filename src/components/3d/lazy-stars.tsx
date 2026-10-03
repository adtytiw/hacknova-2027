"use client";

import { Suspense, lazy } from "react";

const StarsBackground = lazy(() =>
  import("@/components/3d/stars-background").then((mod) => ({
    default: mod.StarsBackground,
  }))
);

export function LazyStarsBackground() {
  return (
    <Suspense fallback={<div className="bg-background absolute inset-0" />}>
      <StarsBackground />
    </Suspense>
  );
}
