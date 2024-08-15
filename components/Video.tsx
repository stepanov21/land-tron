export function Video({src} : {src: string}) {
    return (
      <video className="mx-auto" width="591" height="591" autoPlay muted loop>
        <source src={src} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }