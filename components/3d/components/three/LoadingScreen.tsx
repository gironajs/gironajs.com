import { Html, useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  onUnmountCb: () => void;
  dictionary: LangDictionary['map'];
};

export default function LoadingScreen({ onUnmountCb, dictionary }: Props) {
  //Wrapper hook of THREE.DefaultLoadingManager progress status
  const progress = useProgress((state) => state.progress);

  // - STATE
  //useProgress can give smaller numbers than current progress due to bug, we will only fetch when it increases (see useEffect)
  const [realProgress, setRealProgress] = useState(15); //UX: its much better if the user don't see a 0%

  // - EFFECT
  useEffect(() => {
    //unmount - LoadingScreen is unmounted when the linked <Suspense fallback> is finished
    return () => {
      onUnmountCb();
    };
  }, [onUnmountCb]);

  useEffect(() => {
    if (progress > realProgress) {
      //protect from negative progresses
      setRealProgress(progress);
    }
  }, [progress, realProgress]);

  return (
    <Html center className="map__loading">
      <h1
        className="map__loading__title"
        dangerouslySetInnerHTML={{ __html: dictionary.loading_title_html }}
      ></h1>
      <h2 className="map__loading__subtitle">{dictionary.loading_subtitle}</h2>
      <div className="map__loading__spinner">
        <div></div>
        <div></div>
      </div>
      <ProgressBar
        className="map__loading__bar"
        completed={Math.round(realProgress)}
        bgColor="#757575"
        height="30px"
        borderRadius="8px"
        labelColor="#ffffff"
        transitionTimingFunction="linear"
        transitionDuration="0.1s"
      />
    </Html>
  );
}
