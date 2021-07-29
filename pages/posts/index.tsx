import AllPosts from '../../components/posts/all-posts';

const DUMMY_DATA = [
  {
    id: 'post1',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  },
  {
    id: 'post2',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  },
  {
    id: 'post3',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  },
  {
    id: 'post4',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  },
  {
    id: 'post5',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs5',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  },
  {
    id: 'post6',
    author: 'Dayo Oladapo',
    date: '2021-02-10',
    slug: 'getting-started-with-nextjs6',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is a full-stack React framwork built for production',
    image: 'getting-started-with-nextjs.png'
  }
];

const Posts: React.FC = () => {
  return (
    <AllPosts posts={DUMMY_DATA}/>
  );
};

export default Posts;
