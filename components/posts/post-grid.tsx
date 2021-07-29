import PropTypes from 'prop-types';
import PostItem from './post-item';

import classes from './post-grid.module.css';

type PostProps = {
  posts?: IPost[]
};

const PostGrid: React.FC<PostProps> = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts?.map(post => (
        <PostItem
          key={post.id}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
          title={post.title}
          
        />
      ))}
    </ul>
  );
};

PostGrid.propTypes = {
  posts: PropTypes.array
};

export default PostGrid;
