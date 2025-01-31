import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  startAndEndDate: string;
  week: number;
  art: [
    {
      label: string;
      title: string;
      author: string;
      link: string;
      suffix?: string;
    }
  ];
};
