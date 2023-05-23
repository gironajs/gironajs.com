import { useEffect, useState } from 'react';
import PlaceDAO from '../../dao/PlaceDAO';
import Place from '../../entity/Place';
import usePlaceStore from '../../stores/usePlaceStore';
import { getDescendantProp } from '@/lib/utils';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  dictionary: LangDictionary['map'];
};

export default function Navbar({ dictionary }: Props) {
  // - STATE
  const [places, setPlaces] = useState<Place[]>([]);

  // - STATE GLOBAL ZUSTAND
  const { currentPlace, setCurrentPlace } = usePlaceStore((state) => {
    return {
      currentPlace: state.currentPlace,
      setCurrentPlace: state.setCurrentPlace,
    };
  });

  // -- Effect
  useEffect(() => {
    setPlaces(PlaceDAO.getFiltered(false));
  }, []);

  return (
    <div className="map__navbar">
      {places.map((place, i) => {
        return (
          <div
            key={i}
            className={
              'map__navbar__icon' +
              (place.id == currentPlace.id ? ' map__navbar__icon--active' : '')
            }
            onClick={() => setCurrentPlace(place)}
          >
            <span>
              <place.icon />
            </span>
            {getDescendantProp(dictionary, place.navbarNameI18nKey) as string}
          </div>
        );
      })}
    </div>
  );
}
