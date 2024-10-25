import { sponsors } from '@/config/sponsor';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { Issue, IssueLabel, Paginated } from '@/types/events';
import Image from 'next/image';
import Link from 'next/link';

interface IssuesQueryResponse {
  data: {
    repository: {
      issues: Paginated<Issue>;
    };
  };
}

const issueQuery = `
  query {
    repository(name: "trobades", owner: "gironajs") {
      name
      description
      issues(first: 10, states: OPEN) {
        edges {
          node {
            id
            title
            url
            publishedAt
            labels(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const images = [
  { src: '/assets/events/P1080125.jpg', type: 'vertical' },
  { src: '/assets/events/P1080128.jpg', type: 'horizontal' },
  { src: '/assets/events/20231108_200715.jpg', type: 'horizontal' },
  { src: '/assets/events/20231108_171727.jpg', type: 'vertical' },
  { src: '/assets/events/20231108_190921.jpg', type: 'vertical' },
  { src: '/assets/events/P1080106.jpg', type: 'horizontal' },
  { src: '/assets/events/P1080123.jpg', type: 'horizontal' },
  { src: '/assets/events/20231108_191042.jpg', type: 'vertical' },
  { src: '/assets/events/20231108_192226.jpg', type: 'vertical' },
  { src: '/assets/events/P1080186.jpg', type: 'horizontal' },
  { src: '/assets/events/20231108_200742.jpg', type: 'vertical' },
  { src: '/assets/events/P1080173.jpg', type: 'vertical' },
  { src: '/assets/events/20231108_205607.jpg', type: 'vertical' },
];

async function EventsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query: issueQuery }),
  });
  const { data }: IssuesQueryResponse = await response.json();

  const hasEvents = (data?.repository.issues.edges.length ?? 0) > 0;

  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-stone-900 min-h-screen px-4">
      <section className="pt-24 pb-12">
        <div className="container px-4 mx-auto flex flex-wrap">
          <div className="w-full text-center max-w-2xl mx-auto md:mt-20">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              {dictionary.events.title}
            </h1>
            <p className="text-xl text-gray-400 mt-4">
              {dictionary.events.subtitle}
            </p>
            <div className="flex flex-wrap justify-center mt-8 md:flex-row flex-col">
              <div className="shadow border border-neutral-200 rounded-md mt-2 sm:mt-0">
                <a
                  href="https://github.com/gironajs/trobades/issues/new?assignees=&labels=&projects=&template=peticions.md&title="
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent leading-6 rounded-md hover:bg-slate-50 hover:text-black focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  <span className="mr-2"> {dictionary.events.propose}</span>
                </a>
              </div>
              <div className="shadow border border-neutral-200 rounded-md md:ml-3 mt-2 sm:mt-0">
                <a
                  href="https://github.com/gironajs/trobades/issues/new?assignees=&labels=&projects=&template=xerrades.md&title="
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent leading-6 rounded-md hover:bg-slate-50 hover:text-black focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  <span className="mr-2">{dictionary.events.organize}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full text-center max-w-2xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-slate-200 mb-5 text-center">
          {dictionary.events.list.title}
        </h2>
        <p className="text-xl text-gray-400 mt-4 text-center">
          {dictionary.events.list.subtitle}
        </p>
      </div>

      {hasEvents && (
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {data.repository.issues.edges.map((issue: { node: Issue }) => (
            <div
              className="bg-stone-800 shadow-md rounded-md p-6 flex flex-col"
              key={issue.node.id}
            >
              <div className="flex flex-wrap">
                {issue.node.labels.edges.map((label: { node: IssueLabel }) => (
                  <span
                    className="inline-block bg-slate-200 rounded-full text-xs font-semibold text-slate-900 mr-2 mb-2 px-3 py-1"
                    key={label.node.id}
                  >
                    {label.node.name}
                  </span>
                ))}
              </div>
              <a
                href={issue.node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-slate-100"
              >
                <h2 className="text-3xl font-bold mb-5">{issue.node.title}</h2>
              </a>
              <div className="flex-1" />
              <span className="text-sm font-bold text-gray-400">
                {issue.node.publishedAt}
              </span>
            </div>
          ))}
        </section>
      )}

      {!hasEvents && (
        <div className="w-full text-center max-w-2xl mx-auto mt-12">
          <p className="text-xl text-gray-400 mt-4 text-center">
            {dictionary.events.list.empty}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20">
        {images.map((el, i) => (
          <Image
            key={'grid' + i}
            src={el.src}
            className={cn(
              el.type === 'horizontal' && 'col-span-1 md:col-span-2',
              'h-80 w-full object-cover object-center-center rounded-lg gap-10 !m-0 !p-0'
            )}
            height="400"
            width="400"
            alt="thumbnail"
          />
        ))}
      </div>

      <div className="w-full max-w-2xl mx-auto mt-12 flex gap-8 md:flex-row flex-col">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-5 text-left">
            {dictionary.events.cta.message}
          </h2>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="">
            <h3 className="text-xl font-bold text-slate-200 mb-5 text-left">
              {dictionary.events.cta.one.title}
            </h3>
            <p className="text-md text-gray-400 mt-4 text-left">
              {dictionary.events.cta.one.subtitle}{' '}
              <a
                className="text-slate-200 hover:text-slate-100"
                href="https://github.com/gironajs/trobades/issues/new?assignees=&labels=&projects=&template=peticions.md&title="
              >
                link
              </a>
              .
            </p>
          </div>
          <div className="mt-12 mb-12">
            <h3 className="text-xl font-bold text-slate-200 mb-5 text-left">
              {dictionary.events.cta.two.title}
            </h3>
            <p className="text-md text-gray-400 mt-4 text-left">
              {dictionary.events.cta.two.subtitle}{' '}
              <a
                className="text-slate-200 hover:text-slate-100"
                href="https://github.com/gironajs/trobades/issues/new?assignees=&labels=&projects=&template=xerrades.md&title="
              >
                link
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 grid grid-cols-1 gap-4 max-w-6xl mx-auto justify-items-center">
        <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {dictionary.events.sponsors.title}
        </h3>

        <a
          href="mailto:contact.gironajs@gmail.com"
          className="m-8 shadow border border-neutral-200 rounded-md mt-2 sm:mt-0"
        >
          <p className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent leading-6 rounded-md hover:bg-slate-50 hover:text-black focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            {dictionary.events.sponsors.contact}
          </p>
        </a>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              aria-hidden={i === 1}
              key={`sponsors-${i}`}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {...sponsors.map((sponsor, index) => (
                <Link
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  className="flex items-center m-10"
                >
                  <div className="bg-white rounded-md shadow-md p-4">
                    <Image
                      className="object-cover w-[249px]"
                      src={sponsor.image.url}
                      width={sponsor.image.width}
                      height={sponsor.image.height}
                      alt={`${sponsor.name} sponsor image`}
                    />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EventsPage;
