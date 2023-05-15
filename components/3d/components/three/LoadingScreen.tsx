import { Html, useProgress } from '@react-three/drei';
import useGlobalStore from '../../stores/useGlobalStore';
import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function LoadingScreen() {
  //Wrapper hook of THREE.DefaultLoadingManager progress status
  const progress = useProgress((state) => state.progress);

  // - STATE
  //useProgress can give smaller numbers than current progress due to bug, we will only fetch when it increases (see useEffect)
  const [realProgress, setRealProgress] = useState(15); //UX: its much better if the user don't see a 0%

  // - STATE GLOBAL ZUSTAND
  const { set3DLoaded } = useGlobalStore((state) => {
    return {
      set3DLoaded: state.set3DLoaded,
    };
  });

  // - EFFECT
  useEffect(() => {
    //unmount - LoadingScreen is unmounted when the linked <Suspense fallback> is finished
    return () => {
      set3DLoaded(true);
    };
  }, [set3DLoaded]);

  useEffect(() => {
    if (progress > realProgress) {
      //protect from negative progresses
      setRealProgress(progress);
    }
  }, [progress, realProgress]);

  return (
    <Html center className="map__loading">
      <h1 className="map__loading__title">
        <span>GironaJS</span> La Comunitat JavaScript de Girona
      </h1>
      <h2 className="map__loading__subtitle">- Mapa 3D de la ciutat -</h2>
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
