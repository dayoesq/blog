import React, { useState } from 'react';
import classes from './contact-form.module.css';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<Data>({
    email: '',
    name: '',
    message: ''
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  };
  return (
    <section className={classes.contact} onSubmit={submitFormHandler}>
      <h1>How May I Help?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required value={formState.email} name="email" onChange={onChangeHandler}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required value={formState.name} name="name" onChange={onChangeHandler}/>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows={5} required value={formState.message} name="message" onChange={onChangeHandler}/>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;