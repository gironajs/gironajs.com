import { subscribeWithSelector } from 'zustand/middleware';
import { create } from 'zustand';
import PlaceDAO from '../dao/PlaceDAO';
import Place from '../entity/Place';

interface PlaceState {
  currentPlace: Place;
  setCurrentPlace: (place: Place) => void;
}

export default create<PlaceState>()(
  subscribeWithSelector((set) => {
    return {
      /** Attributes **/
      currentPlace: PlaceDAO.getEnum().GIRONAJS,

      /** Methods **/
      setCurrentPlace: (place: Place) => set(() => ({ currentPlace: place })),
    };
  })
);
