"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
        createTweet: (
          tweetId: string,
          el: HTMLElement,
          options?: Record<string, string>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

function extractTweetId(url: string): string | null {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

export function TweetEmbed({ tweetUrl }: { tweetUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !containerRef.current) return;
    const tweetId = extractTweetId(tweetUrl);
    if (!tweetId) return;

    // clear any previous render
    containerRef.current.innerHTML = "";

    window.twttr?.widgets.createTweet(tweetId, containerRef.current, {
      theme: "dark",
      dnt: "true",
      align: "center",
    });
  }, [scriptReady, tweetUrl]);

  if (!tweetUrl) return null;

  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="my-8 flex min-h-[120px] justify-center" />
    </>
  );
}
