import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import PlaceDAO, { PlacesDatabase } from '../../dao/PlaceDAO';
import usePlaceStore from '../../stores/usePlaceStore';
import { OrbitControls as OrbitControlsType } from 'three-stdlib'; //Correct OrbitControls type for useRef type: https://github.com/pmndrs/drei/discussions/719
import Place from '../../entity/Place';

type ORBITCONTROL_TARGETS_TYPE = {
  zoomDistance: number;
  target: THREE.Vector3;
};

export default function CameraOrbitController() {
  // -- CONSTANT DATA
  const ANIMATION_DURATION = 3000;

  // -- STATE
  const [isOrbitControlRotatedLeft, setOrbitControlRotatedLeft] =
    useState<boolean>(true);
  const [isOrbitControlRotatedRight, setOrbitControlRotatedRight] =
    useState<boolean>(false);
  const [orbitControlTarget, setOrbitControlTarget] =
    useState<ORBITCONTROL_TARGETS_TYPE>(
      PlaceDAO.getEnum().GIRONAJS.orbitControlTarget
    );

  // - STATE GLOBAL ZUSTAND
  const currentPlace = usePlaceStore((state) => state.currentPlace);
  const setCurrentPlace = usePlaceStore((state) => state.setCurrentPlace);

  // -- REF
  // Three React Fiber invites to use useRef(null!) as the official way to useRef three react fiber components -> https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#typing-with-useref
  // The exclamation mark is a non-null assertion that will let TS know that ref.current is defined when we access it in effects.
  const refOrbitControls: React.MutableRefObject<OrbitControlsType> = useRef(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    null!
  );
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // -- DEBUG
  const [{ nearCamera, farCamera }, setControlsStore] = useControls(
    'Camera',
    () => ({
      //Due z-fighting because lacking of zbuffer precision we need to finetune these settings: https://stackoverflow.com/questions/37858464/material-shines-through-when-zooming-out-three-js-r78
      nearCamera: {
        value: 0.1, //finetuned
        step: 0.1,
      },
      farCamera: {
        value: 100,
        step: 1,
      },
      target: {
        value: currentPlace.id,
        options: PlaceDAO.getAll().map((item) => item.id),
        onChange: (value: string) => {
          const dynamicKey = value as keyof PlacesDatabase;
          const newPlace: Place = PlaceDAO.getEnum()[dynamicKey];
          setCurrentPlace(newPlace);
        },
      },
    })
  );

  // -- EFFECT
  useEffect(() => {
    const unsubscribeCurrentPlace = usePlaceStore.subscribe(
      (state) => state.currentPlace,
      (place: Place) => {
        setOrbitControlTarget(place.orbitControlTarget);
        setControlsStore({ target: place.id });
      }
    );

    return () => {
      unsubscribeCurrentPlace();
    };
  }, [setControlsStore]);

  useEffect(() => {
    const orbitControls = refOrbitControls.current;

    if (!orbitControls.target.equals(orbitControlTarget.target)) {
      //Disable interaction meanwhile it moves
      orbitControls.enabled = false;

      //animate movement
      new TWEEN.Tween(orbitControls.target)
        .to(orbitControlTarget.target, ANIMATION_DURATION)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          orbitControls.update();
        })
        .onComplete(() => {
          orbitControls.enabled = true;
        })
        .start();

      //animate zoom
      if (orbitControls.minDistance != orbitControlTarget.zoomDistance) {
        new TWEEN.Tween(orbitControls)
          .to(
            {
              minDistance: orbitControlTarget.zoomDistance,
              maxDistance: orbitControlTarget.zoomDistance,
            },
            ANIMATION_DURATION
          )
          .easing(TWEEN.Easing.Cubic.InOut)
          .onUpdate(() => {
            orbitControls.update();
          })
          .start();
      }
    }
  }, [orbitControlTarget]);

  // -- ANIMATION
  useFrame(() => {
    //Invert the orbitControls rotation when the AzimuthAngle reaches a limit
    const orbitControlsData = refOrbitControls.current;
    const orbitControlsAzimuthAngle = orbitControlsData.getAzimuthalAngle();
    if (
      !isOrbitControlRotatedRight &&
      orbitControlsAzimuthAngle <= orbitControlsData.minAzimuthAngle
    ) {
      setOrbitControlRotatedRight(true);
      setOrbitControlRotatedLeft(false);
      orbitControlsData.autoRotateSpeed =
        orbitControlsData.autoRotateSpeed * -1; //rotate to the other side
    } else if (
      !isOrbitControlRotatedLeft &&
      orbitControlsAzimuthAngle >= orbitControlsData.maxAzimuthAngle
    ) {
      setOrbitControlRotatedRight(false);
      setOrbitControlRotatedLeft(true);
      orbitControlsData.autoRotateSpeed =
        orbitControlsData.autoRotateSpeed * -1; //rotate to the other side
    }
  });

  return (
    <>
      <PerspectiveCamera name="Main Camera" near={nearCamera} far={farCamera} />
      <OrbitControls
        ref={refOrbitControls}
        args={[camera, domElement]}
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={5}
        zoomSpeed={2}
        minPolarAngle={Math.PI / 2 - 0.6}
        maxPolarAngle={Math.PI / 2 - 0.6}
        enablePan={false}
      />
    </>
  );
}
