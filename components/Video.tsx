'use client'

import { cn } from "@/lib/utils";

export function Video({ src, className }: { src: string, className: string }) {
  return (
    <video className={cn("mx-auto", className)} width="591" height="591" autoPlay muted loop>
      <source src={`${src}.mp4`} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
