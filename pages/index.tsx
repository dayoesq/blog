import { Fragment } from 'react';
import Head  from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/post-util';

type PostsProps = {
  posts: IPost[];
};

const Home: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Dayo&#39;s Blog</title>
        <meta name='description' content='I blog about programming in general'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts}/>
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default Home;
