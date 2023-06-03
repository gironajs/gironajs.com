export interface BlogPostItemData {
  title: string;
  description: string;
  published: boolean;
  publishedDate: Date;
  image: string;
  author: string; // It may be a good idea to support authors in plural in the future. A blog may be co-authored by multiple members
  seo: {
    metatitle: string;
    metadescription: string;
    image: string;
  };
  relatedPosts?: {
    reddit?: string[];
  };
}

export interface BlogPostItem {
  id: string;
  content: any;
  data: BlogPostItemData;
  filePath: string;
  urlPath: string;
}
