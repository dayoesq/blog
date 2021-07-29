import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';

const PostItem: React.FC<IPost> = props => {
  const { author, date, slug, title, body, excerpt, image } = props;
  const fomattedDate = new Date(date).toLocaleDateString('en-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200}/>
          </div>
          <div className={classes.content}>
            <p>{author}</p>
            <h3>{title}</h3>
            <time>{fomattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;