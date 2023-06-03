import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import TWEEN from '@tweenjs/tween.js';
import { useControls } from 'leva';
import City from './City';
import JavascriptLogo from './JavascriptLogo';
import PeopleRunning from './PeopleRunning';
import PositionInspector from './PositionInspector';
import CameraOrbitController from './CameraOrbitController';
import MapPins from './MapPins';
import Forest from './Forest';
import { Dragon } from './Dragon';
import { useEffect } from 'react';

type Props = {
  onMountCb: () => void;
};

export default function Experience({ onMountCb }: Props) {
  // - STATE

  // - DEBUG
  const { backgroundColor }: { backgroundColor: string } = useControls('Sky', {
    backgroundColor: '#9fedff',
  });
  const MAX_NUMBER_PEOPLE_DEBUG = 150;
  const {
    enablePositionInspector,
    numberOfPeopleStation,
    baseTimePeopleStationMillis,
  }: {
    enablePositionInspector: boolean;
    numberOfPeopleStation: number;
    baseTimePeopleStationMillis: number;
  } = useControls('Creative Tools', {
    enablePositionInspector: false,
    numberOfPeopleStation: {
      value: 50,
      step: 1,
      min: 1,
      max: MAX_NUMBER_PEOPLE_DEBUG,
    },
    baseTimePeopleStationMillis: {
      value: 10000,
      step: 100,
      min: 1000,
      max: 50000,
    },
  });

  useFrame(() => {
    //Do the TWEEN update only once for all components, therefore in the parent component
    TWEEN.update();
  });

  // - EFFECT
  useEffect(() => {
    onMountCb();
  }, [onMountCb]);

  // - JSX
  return (
    <>
      <CameraOrbitController />

      <color args={[backgroundColor]} attach="background" />
      <Environment preset="city" />
      <AccumulativeShadows
        temporal
        frames={100}
        color="#112b30"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.65}
        opacity={1}
        scale={100}
        position={[0, -0.2, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[5, 3, -5]}
          bias={0.00001}
          size={10}
          near={0.01}
          far={1000}
        />
      </AccumulativeShadows>

      <City scale={0.01} />
      <JavascriptLogo
        position={[-2.6, 1.5, 3]}
        floatingRange={[1.2, 1.6]}
        scale={[0.5, 0.5, 0.5]}
      />
      <MapPins />
      {/* Porta 1 */}
      <PeopleRunning
        numberOfPeople={numberOfPeopleStation}
        positionStart={[-2, 0.2, 4.7]}
        positionEnd={[-2.4015, 0.3, 3.1526]}
        positionStartDispersionMeters={[0.3, 0, 0.3]}
        speedRangeMultiplier={[1, 1.5]}
        baseTimeMillis={baseTimePeopleStationMillis}
        maxNumberPeopleDebug={MAX_NUMBER_PEOPLE_DEBUG}
      />
      {/* Porta 2 */}
      <PeopleRunning
        numberOfPeople={numberOfPeopleStation}
        positionStart={[-2.11, 0.2, 5.06]}
        positionEnd={[-2.4015, 0.3, 3.1526]}
        positionStartDispersionMeters={[0.3, 0, 0.3]}
        speedRangeMultiplier={[0.5, 1.5]}
        baseTimeMillis={
          baseTimePeopleStationMillis + baseTimePeopleStationMillis * 1.2
        }
        maxNumberPeopleDebug={MAX_NUMBER_PEOPLE_DEBUG}
      />
      {/* Porta 3 */}
      <PeopleRunning
        numberOfPeople={numberOfPeopleStation}
        positionStart={[-2.92, 0.2, 5.52]}
        positionEnd={[-2.4015, 0.3, 3.1526]}
        positionStartDispersionMeters={[0.3, 0, 0.3]}
        speedRangeMultiplier={[0.55, 1]}
        baseTimeMillis={
          baseTimePeopleStationMillis + baseTimePeopleStationMillis * 1.4
        }
        maxNumberPeopleDebug={MAX_NUMBER_PEOPLE_DEBUG}
      />

      <Dragon
        scale={0.05}
        centerPosition={[5.66, 1, -3.7]}
        radius={0.7}
        speedMultiplier={0.5}
        offsetInitialPosition={2}
        color={'#3b2d2d'}
      />

      {enablePositionInspector && (
        <PositionInspector
          onDragStartCb={() => null}
          onDragEndCb={() => null}
        />
      )}

      <Forest />
    </>
  );
}
