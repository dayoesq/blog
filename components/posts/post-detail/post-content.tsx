import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

import classes from './post-content.module.css';

type PostProps = {
  post: IPost;
};

const PostContent: React.FC<PostProps> = ({post}) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title}/>
      <ReactMarkdown>
        {post.content ? post.content : ''}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;