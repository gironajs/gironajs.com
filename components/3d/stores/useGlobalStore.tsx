import { subscribeWithSelector } from 'zustand/middleware';
import { create } from 'zustand';

//Zustand Store for handling GLOBAL properties of the app

interface GlobalState {
  is3DLoaded: boolean;
  set3DLoaded: (is3DLoaded: boolean) => void;
}

export default create<GlobalState>()(
  subscribeWithSelector((set) => {
    return {
      /** Attributes **/
      is3DLoaded: false,

      /** Methods **/
      set3DLoaded: (is3DLoaded: boolean) =>
        set(() => ({ is3DLoaded: is3DLoaded })),
    };
  })
);
