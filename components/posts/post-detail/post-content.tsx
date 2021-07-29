import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
  date: '2021-02-10',
  slug: 'getting-started-with-nextjs6',
  title: 'Getting Started with NextJS',
  image: 'getting-started-with-nextjs.png',
  body: '# This is my first post'
};

const PostContent: React.FC = () => {
  const { image, title, slug, body } = DUMMY_POST;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={title}/>
      {body}
    </article>
  );
};

export default PostContent;