'use client';

import useGlobalStore from '@/components/3d/stores/useGlobalStore';
import { Leva } from 'leva';
import { Canvas } from '@react-three/fiber';
import LoadingScreen from '@/components/3d/components/three/LoadingScreen';
import { Suspense } from 'react';
import { Perf } from 'r3f-perf';
import Experience from '@/components/3d/components/three/Experience';
import Interface from '@/components/3d/components/ui/Interface';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  isDebug?: boolean;
  dictionary: LangDictionary['map'];
};

export default function App3D({ isDebug = true, dictionary }: Props) {
  // - STATE GLOBAL ZUSTAND
  const { is3DLoaded } = useGlobalStore((state) => {
    return {
      is3DLoaded: state.is3DLoaded,
    };
  });

  return (
    <div className="root">
      <Leva hidden={!isDebug} />

      <Canvas flat shadows>
        <Suspense fallback={<LoadingScreen />}>
          {isDebug && <Perf position="top-left" />}
          <Experience />
        </Suspense>
      </Canvas>

      {is3DLoaded && <Interface dictionary={dictionary} />}
    </div>
  );
}
