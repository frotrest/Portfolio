import React from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import Container from '../../../Container';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <h5 className={clsx(styles.heroContentSubTitle)}>
          AVAILABLE FOR NEW PROJECTS
        </h5>
        <h1 className={clsx(styles.heroContentTitle)}>
          Building digital things <span>without the irony.</span>
        </h1>
        <p className={clsx(styles.heroContentDescription)}>
          I help technical founders translate complex product visions into high-
          performance, aesthetically precise user interfaces.
        </p>
        <div className={clsx(styles.heroBtns)}>
          <a href="#projects" className={clsx(styles.heroBtn)}>
            View recent work
          </a>
          <a
            href="https://t.me/Kweiq5776"
            target="blank"
            className={clsx(styles.heroBtn)}
          >
            Get in touch
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
