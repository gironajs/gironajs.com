'use client';

import './social-share-buttons.scss';

// Taken from: https://sharingbuttons.io/

export default function SocialShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const facebookUrl = `https://facebook.com/sharer/sharer.php?u=${url}`;
  const twitterUrl = `https://twitter.com/intent/tweet/?text=${title}&url=${url}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const redditUrl = `https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`;
  const whatsappUrl = `whatsapp://send?text=${title} ${url}`;

  return (
    <div className="social-share-buttons">
      <div>
        {/* Sharingbutton Copy */}
        <button
          className="resp-sharing-button__link resp-sharing-button--copy"
          onClick={async () => {
            if ('clipboard' in navigator) {
              try {
                await navigator.clipboard.writeText(location.href);
              } catch (error) {
                console.error(error);
              }
            }
          }}
          aria-label="Copy link to post"
          type="button"
        >
          <div className="resp-sharing-button resp-sharing-button--copy resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </div>
          </div>
        </button>
        {/* Sharingbutton Facebook */}
        <a
          className="resp-sharing-button__link"
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </div>
          </div>
        </a>
        {/* Sharingbutton Twitter */}
        <a
          className="resp-sharing-button__link"
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
              </svg>
            </div>
          </div>
        </a>
        {/* Sharingbutton LinkedIn */}
        <a
          className="resp-sharing-button__link"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
              </svg>
            </div>
          </div>
        </a>
        {/* Sharingbutton Reddit */}
        <a
          className="resp-sharing-button__link"
          href={redditUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z" />
              </svg>
            </div>
          </div>
        </a>
        {/* Sharingbutton WhatsApp */}
        <a
          className="resp-sharing-button__link"
          href={whatsappUrl}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
