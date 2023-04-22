'use client';

import { LangDictionary } from '@/get-dictionary';
import DiscordIcon from '@/components/icons/discord-icon';
import GitHubIcon from '@/components/icons/github-icon';
import { siteConfig } from '@/config/site';

import './intro.scss';

type Props = {
  dictionary: LangDictionary;
};

const Intro = ({ dictionary }: Props) => {
  return (
    <div id="intro" className="h-screen min-h-[500px]">
      <div className="container relative py-12 lg:pb-16 xl:pb-20 h-full flex flex-col justify-center items-center z-10">
        <div className="px-4 max-w-screen-xl sm:px-6 text-center flex flex-col gap-8 xl:gap-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-4xl sm:leading-none md:text-5xl">
            <span className="text-red-500 xl:mr-4">GironaJS</span>
            <br className="xl:hidden"></br>
            {dictionary.home.title}
          </h1>
          <p
            className="z-10 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl"
            dangerouslySetInnerHTML={{ __html: dictionary.home.subtitle }}
          />
          <div className="max-w-md mx-auto sm:flex sm:justify-center">
            <div
              id="discord-button"
              className="shadow border border-red-500 rounded-md"
            >
              <a
                href={siteConfig.links.discord}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-500 border border-transparent leading-6 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                <span className="mr-2">Discord</span>
                <DiscordIcon />
              </a>
            </div>
            <div className="shadow border border-neutral-200 rounded-md sm:ml-3 mt-2 sm:mt-0">
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
      <div className="absolute w-full h-full top-0 z-0 bg-slate-100">
        {Array.from(Array(6).keys()).map((i) => (
          <div key={i} className="cube" />
        ))}
        <div className="circles">
          {Array.from(Array(10).keys()).map((i) => (
            <div key={i} className="circle" />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Intro };
