interface IPost {
  id?: string;
  title?: string;
  author?: string;
  content?: string;
  image?: string;
  date?: string | number;
  excerpt?: string;
  slug?: string;
  isFeatured?: boolean;
}