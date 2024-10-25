export interface Paginated<T> {
  edges: {
    node: T;
  }[];
}

export interface IssueLabel {
  id: string;
  name: string;
}

export interface Issue {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  labels: Paginated<IssueLabel>;
}
