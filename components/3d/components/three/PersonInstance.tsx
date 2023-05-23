import { Instance } from '@react-three/drei';
import TWEEN from '@tweenjs/tween.js';
import { useEffect, useRef } from 'react';
import { InstancedMesh } from 'three';

type Props = {
  positionStart: [number, number, number];
  positionEnd: [number, number, number];
  animationTimeMillis?: number;
};

export default function PersonInstance({
  positionStart,
  positionEnd,
  animationTimeMillis = 10000,
}: Props) {
  // Three React Fiber invites to use useRef(null!) as the official way to useRef three react fiber components -> https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#typing-with-useref
  // The exclamation mark is a non-null assertion that will let TS know that ref.current is defined when we access it in effects.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ref: React.MutableRefObject<InstancedMesh> = useRef(null!);

  useEffect(() => {
    const positionEndVector = {
      x: positionEnd[0],
      y: positionEnd[1],
      z: positionEnd[2],
    };
    const positionStartRef = ref.current.position;

    new TWEEN.Tween(positionStartRef)
      .to(positionEndVector, animationTimeMillis)
      .repeat(Infinity)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  }, [positionStart, positionEnd, animationTimeMillis]);

  return (
    <Instance ref={ref} color="black" scale={0.01} position={positionStart} />
  );
}
