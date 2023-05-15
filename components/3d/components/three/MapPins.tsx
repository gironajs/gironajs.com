import { useEffect, useState } from 'react';
import Place from '../../entity/Place';
import PlaceDAO from '../../dao/PlaceDAO';
import { Billboard, Html } from '@react-three/drei';
import usePlaceStore from '../../stores/usePlaceStore';

export default function MapPins() {
  // - STATE
  const [places, setPlaces] = useState<Place[]>([]);

  // - STATE GLOBAL ZUSTAND
  const { setCurrentPlace } = usePlaceStore((state) => {
    return {
      setCurrentPlace: state.setCurrentPlace,
    };
  });

  // -- EFFECT
  useEffect(() => {
    setPlaces(PlaceDAO.getBillboarded());
  }, []);

  return (
    <>
      {places.map((place, i) => {
        return (
          <Billboard key={i} follow={true} position={place.billboardPosition}>
            <Html center={true} zIndexRange={[100, 0]}>
              <span className="map__pin" onClick={() => setCurrentPlace(place)}>
                <place.icon />
              </span>
            </Html>
          </Billboard>
        );
      })}
    </>
  );
}
