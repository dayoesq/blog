import { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from '../components/contact-form/contact-form';

const Contact: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Page</title>
        <meta name='description' content='Contact me with your messages!'/>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
