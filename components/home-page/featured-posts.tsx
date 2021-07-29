import PropTypes from 'prop-types';
import PostGrid from '../posts/post-grid';
import classes from './featured-posts.module.css';

type PostProps = {
  posts?: IPost[];
}

const FeaturedPosts: React.FC<PostProps> = props => {
  return (
    <section className={classes.latest}>
      <h2>Feactured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

FeaturedPosts.propTypes = {
  posts: PropTypes.array
};

export default FeaturedPosts;
