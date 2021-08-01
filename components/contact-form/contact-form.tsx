import React, { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';


const sendContactData = async (contactDetails: Data): Promise<void> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<Data>({
    email: '',
    name: '',
    message: '',
    requestStatus: undefined,
    requestError: undefined 
  });

  useEffect(() => {
    if (formState.requestStatus === 'error'
      || formState.requestStatus === 'success') {
      const timer =  setTimeout(() => {
        setFormState({
          ...formState,
          requestError: undefined,
          requestStatus: ''
        });
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    
  }, [formState]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prevState) => {
      return {
        ...prevState,
        requestStatus: 'pending'
      };
    });
    try {
      await sendContactData(formState);
      setFormState((prevState) => {
        return {
          ...prevState,
          requestStatus: 'success'
        };
      });
      setFormState((prevState) => {
        return {
          ...prevState,
          name: '',
          email: '',
          message: ''
        };
      });
    } catch (error) {
      setFormState((prevState) => {
        return {
          ...prevState,
          requestError: error.message
        };
      });
      setFormState((prevState) => {
        return {
          ...prevState,
          requestStatus: 'error'
        };
      });
    }
  };

  let notification;
  if (formState.requestStatus === 'pending') {
    notification = {
      title: 'Pending',
      status: 'pending',
      message: 'Your messge is on it\'s way'
    };
  }
  if (formState.requestStatus === 'success') {
    notification = {
      title: 'Success!',
      status: 'success',
      message: 'Message delivered successfully'
    };
  }
  if (formState.requestStatus === 'error') {
    notification = {
      title: 'Error!',
      status: 'error',
      message: formState.requestError
    };
  }

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
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />)}
    </section>
  );
};

export default ContactForm;