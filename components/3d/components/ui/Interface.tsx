import Navbar from './Navbar';
import Card from './Card';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  dictionary: LangDictionary['map'];
};

export default function Interface({ dictionary }: Props) {
  return (
    <div className="map__ui">
      <div className="map__ui__title">
        <h1>{dictionary.title}</h1>
      </div>
      <div className="map__ui__content">
        <Navbar dictionary={dictionary}></Navbar>
        <Card dictionary={dictionary}></Card>
      </div>
    </div>
  );
}
