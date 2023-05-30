import { Locale } from '@/i18n-config';

export default async function Root({
  children,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
