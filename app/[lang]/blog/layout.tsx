import { Header } from '@/components/header';
import { Locale } from '@/i18n-config';

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div>
      <Header lang={params.lang}></Header>
      <div>{children}</div>
    </div>
  );
}
