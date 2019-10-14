export interface SortInterface {
  dir: 'asc' | 'desc';
  prop: string;
}

export interface SearchInterface {
  value?: string;
  prop?: string;
}

export interface PageInterface {
  page?: number;
  per_page?: number;
  search?: SearchInterface;
  sort?: SortInterface;
}
