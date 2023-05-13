import './map.css';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import App3D from '@/components/3d/components/three/App3D';

type Props = {
  params: { lang: Locale };
  searchParams: { isDebug: string };
};

export default async function MapPage({
  params: { lang },
  searchParams: { isDebug },
}: Props) {
  const dictionary = await getDictionary(lang);

  return <App3D isDebug={isDebug === 'true'} dictionary={dictionary['map']} />;
}
