/**
 * The place for the video sales letter. No video exists yet, so the frame says
 * so instead of pretending with a fake thumbnail. Designs style `.vsl*`.
 */
export function VideoSlot({ caption }: { caption?: string }) {
  return (
    <figure className="vsl">
      <div className="vsl__frame" role="img" aria-label="Platz für das Video. Es ist noch nicht gedreht.">
        <div className="vsl__mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" focusable="false">
            <path d="M18 14v20l17-10z" fill="currentColor" />
          </svg>
        </div>
        <p className="vsl__text">Hier kommt das Video. Es ist noch nicht gedreht.</p>
      </div>
      {caption ? <figcaption className="vsl__caption">{caption}</figcaption> : null}
    </figure>
  )
}
