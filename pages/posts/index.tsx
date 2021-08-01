import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

type PostsProps = {
  posts: IPost[];
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='All of my blogposts'/>
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps () {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  };
}


export default Posts;
