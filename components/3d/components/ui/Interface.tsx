import Navbar from './Navbar';
import Card from './Card';
import { LangDictionary } from '@/get-dictionary';

type Props = {
  dictionary: LangDictionary['map'];
};

export default function Interface({ dictionary }: Props) {
  return (
    <div className="ui">
      <div className="ui__title">
        <h1>{dictionary.title}</h1>
      </div>
      <div className="ui__content">
        <Navbar dictionary={dictionary}></Navbar>
        <Card dictionary={dictionary}></Card>
      </div>
    </div>
  );
}
