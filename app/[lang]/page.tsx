import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import DiscordIcon from '@/components/icons/discord-icon';
import GitHubIcon from '@/components/icons/github-icon';
import { siteConfig } from '@/config/site';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <div className="container mx-auto relative pb-12 lg:pb-16 xl:pb-20">
        <div className="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-4xl sm:leading-none md:text-5xl">
              <span className="text-red-500">GironaJS</span>{' '}
              <br className="xl:hidden"></br>
              {dictionary.home.title}
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {dictionary.home.subtitle}
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="shadow rounded-md">
                <a
                  href={siteConfig.links.discord}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-500 border border-transparent leading-6 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  <span className="mr-2">Discord</span>
                  <DiscordIcon />
                </a>
              </div>
              <div className="mt-3 shadow rounded-md sm:mt-0 sm:ml-3">
                <a
                  href={siteConfig.links.github}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent leading-6 rounded-md hover:bg-slate-50 hover:text-black focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  <span className="mr-2">GitHub</span>
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl">
          {dictionary.home.members}:
        </h2>
        {'TODO: Afegir llista de membres'}
      </div>

      <div className="container mx-auto my-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl">
          {dictionary.home.sponsors}:
        </h2>
        {'TODO: Afegir llista de sponsors'}
      </div>
    </div>
  );
}
