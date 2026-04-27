import React from 'react';
import styles from './contact.module.css';
import clsx from 'clsx';
import Container from '../../../Container';

const Contact = () => {
  return (
    <section className={clsx(styles.contact)}>
      <Container className={clsx(styles.contactContent)} dataAnimate="fadeInUp">
        <h2 className={clsx(styles.contactContentTitle)}>
          Ready to start the next cycle?
        </h2>
        <p className={clsx(styles.contactContentDescription)}>
          I'm currently accepting new projects. Let's discuss your roadmap and
          see how I can help.
        </p>
        <a
          href="https://t.me/Kweiq5776"
          target="blank"
          className={clsx(styles.contactBtn)}
        >
          Get in touch
        </a>
      </Container>
    </section>
  );
};

export default Contact;
