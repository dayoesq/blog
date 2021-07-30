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

const Post: React.FC<Post> = ({post}) => {
  return (
    <PostContent post={post}/>
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
