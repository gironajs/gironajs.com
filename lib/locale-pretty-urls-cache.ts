import { i18n, Locale } from '@/i18n-config';
import { getBlogFilePaths } from '@/lib/blog';
import { decodeMdxFilePathData } from '@/lib/utils';

export type LocalePrettyUrlsData = {
  localePrettyUrls: Record<string, LocalePrettyUrls>;
  prettyUrlToIdMap: PrettyUrlToIdMap;
}; //slug, LocalePrettyUrls
export type LocalePrettyUrls = Record<Locale, string>; //locale, url
type PrettyUrlToIdMap = Record<string, string>; //prettyUrl, id

/**
 * This utils uses Singleton pattern to fetch the data only once per server startup.
 */
class LocalePrettyUrlsCache {
  private static instance: LocalePrettyUrlsCache;
  data: LocalePrettyUrlsData;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.data = {
      localePrettyUrls: {},
      prettyUrlToIdMap: {},
    } as LocalePrettyUrlsData;

    //On singleton initialization we cache all posts and their urls. In the future we can add more logic to fetch prettyUrl from other website pages.
    i18n.locales.map((lang: Locale) => {
      getBlogFilePaths(lang).map((filePath) => {
        const { id, prettyUrl, urlPath } = decodeMdxFilePathData(
          filePath,
          lang
        );
        this.data.prettyUrlToIdMap[prettyUrl] = id;
        if (!this.data.localePrettyUrls[id]) {
          this.data.localePrettyUrls[id] = {
            [lang]: urlPath,
          } as LocalePrettyUrls;
        } else {
          this.data.localePrettyUrls[id][lang] = urlPath;
        }
      });
    });
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): LocalePrettyUrlsCache {
    if (!LocalePrettyUrlsCache.instance) {
      LocalePrettyUrlsCache.instance = new LocalePrettyUrlsCache();
    }

    return LocalePrettyUrlsCache.instance;
  }

  public getByPrettyUrl(prettyUrl: string): LocalePrettyUrls {
    const id = this.getId(prettyUrl);
    return this.data.localePrettyUrls[id];
  }

  public getId(prettyUrl: string): string {
    return this.data.prettyUrlToIdMap[prettyUrl];
  }

  //On client componenets we cannot use the methods, therefore we pass the cache data and implement manually the logic on client.
  public getCacheForClientComponents(): LocalePrettyUrlsData {
    return this.data;
  }
}

const localePrettyUrlsCache = LocalePrettyUrlsCache.getInstance();
export default localePrettyUrlsCache;
