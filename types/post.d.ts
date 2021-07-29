interface IPost {
  id?: string;
  title: string;
  author: string;
  body?: string;
  image?: string;
  date: Date;
  excerpt: string;
  slug?: string;
}