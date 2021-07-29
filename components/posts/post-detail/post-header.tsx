import Image from 'next/image';
import PropTypes from 'prop-types';

import classes from './post-header.module.css';

type PostHeaderProps = {
  title?: string;
  image: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({title, image}) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150}/>
    </header>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any
};

export default PostHeader;