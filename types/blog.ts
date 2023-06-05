export interface BlogPostItemData {
  title: string;
  description: string;
  published: boolean;
  publishedDate: Date;
  image: string;
  authors: string;
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
