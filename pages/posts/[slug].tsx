import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/post-util';

type Context = {
  params: {
    slug: string;
  }
};

type Post = {
  post: IPost;
}

const Post: React.FC<Post> = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt}/>
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context: Context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post
    }
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths:  slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  };
}

export default Post;
