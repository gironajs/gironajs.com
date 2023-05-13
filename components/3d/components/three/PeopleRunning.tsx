import { Instances } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import PersonInstance from './PersonInstance';

type Props = {
  positionStart: [number, number, number];
  positionEnd: [number, number, number];
  positionStartDispersionMeters?: [number, number, number];
  numberOfPeople?: number;
  speedRangeMultiplier?: [number, number];
  baseTimeMillis?: number;
  maxNumberPeopleDebug?: number;
};

type PersonData = {
  itemPositionStart: [number, number, number];
  animationTimeMillis: number;
};

export default function PeopleRunning({
  positionStart,
  positionEnd,
  positionStartDispersionMeters = [10, 1, 15],
  numberOfPeople = 10,
  speedRangeMultiplier = [0.75, 1.25],
  baseTimeMillis = 10000,
  maxNumberPeopleDebug = 150,
}: Props) {
  // - STATE
  const [peopleData, setPeopleData] = useState<PersonData[]>([]);
  const [currentMillis, setCurrentMillis] = useState<number>(0);

  // - ON PROPERTY CHANGE
  useEffect(() => {
    setPeopleData(
      _generatePeopleData(
        numberOfPeople,
        positionStart,
        baseTimeMillis,
        speedRangeMultiplier,
        positionStartDispersionMeters
      )
    );

    const dateNow = new Date();
    setCurrentMillis(dateNow.getTime());
  }, [
    numberOfPeople,
    positionStart,
    baseTimeMillis,
    speedRangeMultiplier,
    positionStartDispersionMeters,
  ]);

  return (
    <>
      <Instances //very performant way to initialize multiple identical meshes
        limit={maxNumberPeopleDebug} // Optional: max amount of items (for calculating buffer size)
      >
        <capsuleGeometry />
        <meshStandardMaterial />
        {peopleData.map((item, i) => (
          <PersonInstance
            key={i + currentMillis}
            positionStart={item.itemPositionStart}
            positionEnd={positionEnd}
            animationTimeMillis={item.animationTimeMillis}
          />
        ))}
      </Instances>
    </>
  );
}

function _generatePeopleData(
  numberOfPeople: number,
  positionStart: [number, number, number],
  baseTimeMillis: number,
  speedRangeMultiplier: [number, number],
  positionStartDispersionMeters: [number, number, number]
): PersonData[] {
  const data: PersonData[] = [];

  for (let i = 0; i < numberOfPeople; i++) {
    const animationTimeMillis: number =
      baseTimeMillis *
      _randomFromInterval(speedRangeMultiplier[0], speedRangeMultiplier[1]);
    const itemPositionStart: [number, number, number] = [
      _randomFromInterval(
        positionStart[0] - positionStartDispersionMeters[0] / 2,
        positionStart[0] + positionStartDispersionMeters[0] / 2
      ),
      _randomFromInterval(
        positionStart[1] - positionStartDispersionMeters[1] / 2,
        positionStart[1] + positionStartDispersionMeters[1] / 2
      ),
      _randomFromInterval(
        positionStart[2] - positionStartDispersionMeters[2] / 2,
        positionStart[2] + positionStartDispersionMeters[2] / 2
      ),
    ];

    data.push({
      itemPositionStart: itemPositionStart,
      animationTimeMillis: animationTimeMillis,
    });
  }

  return data;
}

function _randomFromInterval(min: number, max: number): number {
  // min and max included
  if (min == max) {
    return min;
  } else {
    return Math.random() * (max - min) + min;
  }
}
