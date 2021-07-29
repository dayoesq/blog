import PropTypes from 'prop-types';
import PostGrid from './post-grid';

import classes from './all-posts.module.css';

type AllPostsProps = {
  posts?: IPost[];
};


const AllPosts: React.FC<AllPostsProps> = props => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

AllPosts.propTypes = {
  posts: PropTypes.array
};

export default AllPosts;