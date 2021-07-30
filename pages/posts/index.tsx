import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

type PostsProps = {
  posts: IPost[];
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <AllPosts posts={posts} />
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
