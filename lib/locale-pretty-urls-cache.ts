import { i18n, Locale } from '@/i18n-config';
import { getBlogFilePaths } from '@/lib/blog';
import { decodeMdxFilePathData } from '@/lib/utils';

export type LocalePrettyUrlsData = Record<string, LocalePrettyUrls>; //id, LocalePrettyUrls
export type LocalePrettyUrls = Record<string, string>; //locale, url

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
    this.data = {};

    //On singleton initialization we cache all posts and their urls. In the future we can add more logic to fetch prettyUrl from other website pages.
    i18n.locales.map((lang: Locale) => {
      getBlogFilePaths(lang).map((filePath) => {
        const { id, urlPath } = decodeMdxFilePathData(filePath, lang);
        if (!this.data[id]) {
          this.data[id] = { [lang]: urlPath };
        } else {
          this.data[id][lang] = urlPath;
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

  public getPostUrlsById(id: string): LocalePrettyUrls {
    return this.data[id];
  }

  public get() {
    return this.data;
  }
}

const localePrettyUrlsCache = LocalePrettyUrlsCache.getInstance();
export default localePrettyUrlsCache;
