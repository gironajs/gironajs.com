import { RoundedBox, Text3D, useCursor } from '@react-three/drei';
import { RootState, useFrame, Vector3 } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Group } from 'three';
import usePlaceStore from '../../stores/usePlaceStore';
import PlaceDAO from '../../dao/PlaceDAO';

type Props = {
  position: Vector3;
  scale: Vector3;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
};

export default function JavascriptLogo({
  position,
  scale,
  rotationIntensity = 15,
  floatIntensity = 1,
  floatingRange = [1.5, 2],
}: Props) {
  // -- REFS
  const offset: React.MutableRefObject<number> = useRef(Math.random() * 10000);
  // Three React Fiber invites to use useRef(null!) as the official way to useRef three react fiber components -> https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#typing-with-useref
  // The exclamation mark is a non-null assertion that will let TS know that ref.current is defined when we access it in effects.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rootRef: React.MutableRefObject<Group> = useRef(null!);

  // -- STATE
  const [hovered, setHovered] = useState(false);
  useCursor(hovered /*'pointer', 'auto'*/);

  // -- STATE GLOBAL ZUSTAND
  const { setCurrentPlace } = usePlaceStore((state) => {
    return {
      setCurrentPlace: state.setCurrentPlace,
    };
  });

  // -- EFFECT
  useFrame((state: RootState) => {
    const timeDelta: number = offset.current + state.clock.getElapsedTime();

    rootRef.current.rotation.y =
      (Math.sin(timeDelta / 4) / 8) * rotationIntensity;
    let position: number = Math.sin(timeDelta / 4) / 10;
    position = THREE.MathUtils.mapLinear(
      position,
      -0.1,
      0.1,
      floatingRange?.[0] ?? -0.1,
      floatingRange?.[1] ?? 0.1
    );
    rootRef.current.position.y = position * floatIntensity;
  });

  return (
    <group
      ref={rootRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setCurrentPlace(PlaceDAO.getEnum().GIRONAJS)}
    >
      <RoundedBox
        scale={[1, 1, 0.25]}
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshStandardMaterial color="#f5ed1e" />
      </RoundedBox>

      {/* Front Text */}
      <Text3D
        position={[0.05, -0.35, 0.1]}
        scale={0.25}
        font="/assets/3d/fonts/helvetiker_regular.typeface.json"
      >
        JS
        <meshStandardMaterial color={'#000000'} />
      </Text3D>

      {/* Back Text */}
      <Text3D
        position={[-0.05, -0.35, -0.1]}
        rotation={[0, Math.PI, 0]}
        scale={0.25}
        font="/assets/3d/fonts/helvetiker_regular.typeface.json"
      >
        JS
        <meshStandardMaterial color={'#000000'} />
      </Text3D>
    </group>
  );
}
