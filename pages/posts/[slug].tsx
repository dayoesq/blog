import Head from 'next/head';
// import styles from '../styles/Home.module.css';

const Post: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name='description' content='Single blogpost' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Post;
