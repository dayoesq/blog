import Image from 'next/image';

import classes from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/avatar.jpeg' alt='My avatar' width={300} height={300} />
      </div>
      <h1>Hi, I&#39;m Dayo Oladapo</h1>
      <p>I blog about web development generally</p>
    </section>
  );
};

export default Hero;
