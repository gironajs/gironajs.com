import { MdBook, MdClose, MdFullscreen, MdLink, MdMap } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import usePlaceStore from '../../stores/usePlaceStore';
import { LangDictionary } from '@/get-dictionary';
import { getDescendantProp } from '@/lib/utils';

type Props = {
  dictionary: LangDictionary['map'];
};

export default function Card({ dictionary }: Props) {
  // -- CONSTANTS
  const MAX_MAX_HEIGHT = 90; //%
  const MIN_MAX_HEIGHT = 15; //%

  // -- STATE
  const [isScroll, setIsScroll] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>('');

  // - STATE GLOBAL ZUSTAND
  const currentPlace = usePlaceStore((state) => state.currentPlace);

  // -- REF
  // Three React Fiber invites to use useRef(null!) as the official way to useRef three react fiber components -> https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#typing-with-useref
  // The exclamation mark is a non-null assertion that will let TS know that ref.current is defined when we access it in effects.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const refCard = useRef<HTMLDivElement>(null!);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const refScrollWrapper = useRef<HTMLDivElement>(null!);

  // -- EFFECTS
  useEffect(() => {
    const unsubscribeCurrentPlace = usePlaceStore.subscribe(
      (state) => state.currentPlace,
      () => {
        setIsFullscreen(false);
        refScrollWrapper.current.scrollTo(0, 0);
      }
    );

    return () => {
      unsubscribeCurrentPlace();
    };
  }, []);

  // -- Functions
  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const target: HTMLElement = e.nativeEvent.target as HTMLElement;
    setIsScroll(target.scrollTop > 0);
  }

  function toggleCard() {
    setMaxHeight('');
    setIsFullscreen(!isFullscreen);
  }

  function handleOnPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const target: HTMLDivElement = e.target as HTMLDivElement;
    target.onpointermove = handleOnPointerMove;
    target.setPointerCapture(e.pointerId);
  }

  function handleOnPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const target: HTMLDivElement = e.target as HTMLDivElement;

    target.onpointermove = null;
    target.releasePointerCapture(e.pointerId);
  }

  function handleOnPointerMove(e: PointerEvent) {
    const target: HTMLElement = e.target as HTMLElement;
    const parentNode: HTMLElement = target.parentNode as HTMLElement;
    if (parentNode && e.clientY > 0) {
      e.preventDefault();
      let maxHeight: number =
        ((window.innerHeight - e.clientY - 52) / window.innerHeight) * 100;
      maxHeight = Math.min(Math.max(maxHeight, MIN_MAX_HEIGHT), MAX_MAX_HEIGHT);
      //keep the fullscreen button with the last status
      if (maxHeight == MAX_MAX_HEIGHT) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
      const maxHeightValue: string = maxHeight + '%';
      setMaxHeight(maxHeightValue);
    }
  }

  // -- Render
  return (
    <div
      ref={refCard}
      className={'card' + (isFullscreen ? ' card--fullscreen' : '')}
      style={{ maxHeight: maxHeight }}
    >
      <div className="card__notch">
        <div
          className="card__notch__wrapper"
          onPointerDown={handleOnPointerDown}
          onPointerUp={handleOnPointerUp}
        ></div>
      </div>
      <p className={'card__title' + (isScroll ? ' card__title--scrolled' : '')}>
        {getDescendantProp(dictionary, currentPlace.titleI18nKey) as string}
      </p>
      <div className="card__close" onClick={toggleCard}>
        {isFullscreen ? <MdClose /> : <MdFullscreen />}
      </div>
      <div
        ref={refScrollWrapper}
        className="card__scrollwrapper"
        onScroll={handleScroll}
      >
        <p className="card__subtitle">
          {
            getDescendantProp(
              dictionary,
              currentPlace.subtitleI18nKey
            ) as string
          }
        </p>
        <div className="card__images">
          {currentPlace.images.map((imageUrl, i) => {
            //CSS BEM, I can't insert here a static width-height
            // eslint-disable-next-line @next/next/no-img-element
            return <img alt="" key={i} src={imageUrl} />;
          })}
        </div>

        <hr className="card__separator" />
        <div className="card__actions">
          {currentPlace.googleMapsUrl && (
            <a
              href={currentPlace.googleMapsUrl}
              className="card__actions__button"
              target="_blank"
            >
              <span>
                <MdMap />
              </span>
              {dictionary.cta_googlemaps}
            </a>
          )}
          {currentPlace.websiteUrl && (
            <a
              href={currentPlace.websiteUrl}
              className="card__actions__button"
              target="_blank"
            >
              <span>
                <MdLink />
              </span>
              {dictionary.cta_website}
            </a>
          )}
          {currentPlace.wikiUrl && (
            <a
              href={currentPlace.wikiUrl}
              className="card__actions__button"
              target="_blank"
            >
              <span>
                <MdBook />
              </span>
              {dictionary.cta_wikipedia}
            </a>
          )}
        </div>
        <div
          className="card__description"
          dangerouslySetInnerHTML={{
            __html: getDescendantProp(
              dictionary,
              currentPlace.descriptionHtmlI18nKey
            ) as string,
          }}
        ></div>
      </div>
    </div>
  );
}
