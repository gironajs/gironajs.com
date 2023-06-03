'use client';

import { Leva } from 'leva';
import { Canvas } from '@react-three/fiber';
import LoadingScreen from '@/components/3d/components/three/LoadingScreen';
import { Suspense, useState } from 'react';
import { Perf } from 'r3f-perf';
import Experience from '@/components/3d/components/three/Experience';
import Interface from '@/components/3d/components/ui/Interface';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  isDebug?: boolean;
  dictionary: LangDictionary['map'];
};

export default function App3D({ isDebug = true, dictionary }: Props) {
  // - STATE
  const [is3DLoaded, set3DLoaded] = useState<boolean>(false);

  // - METHODS
  const onLoadingScreenCompleted = () => {
    set3DLoaded(true);
  };

  return (
    <div className="map">
      <Leva hidden={!isDebug} />

      <Canvas flat shadows>
        <Suspense fallback={<LoadingScreen dictionary={dictionary} />}>
          {isDebug && <Perf position="top-left" />}
          <Experience onMountCb={onLoadingScreenCompleted} />
        </Suspense>
      </Canvas>

      {is3DLoaded && <Interface dictionary={dictionary} />}
    </div>
  );
}
