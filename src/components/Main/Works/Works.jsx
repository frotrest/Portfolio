import React from 'react';
import styles from './works.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import adnannike from '@assets/adnannike.webp';
import moneyguard from '@assets/moneyguard.webp';
import openweather from '@assets/openweather.webp';
import mntn from '@assets/mntn.webp';
import concerts from '@assets/concerts.webp';
import webstudio from '@assets/webstudio.webp';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'AdnanNike',
      desc: 'AdnanNike is a modern study project inspired by original Nike website.',
      tags: ['React', 'CSS Modules'],
      size: styles.large,
      img: adnannike,
      link: 'https://frotrest.github.io/AdnanNike/',
    },
    {
      id: 2,
      title: 'Money Guard',
      desc: 'Personal Finance Tracker is a adaptive multipage application for tracking personal income and expenses.',
      tags: ['React', 'CSS Modules', 'API'],
      size: styles.medium,
      img: moneyguard,
      link: 'https://frotrest.github.io/MoneyGuard/',
    },
    {
      id: 3,
      title: 'OpenWeather',
      desc: 'OpenWeather Dashboard is an adaptive single‑page application for fetching and displaying current weather and short‑term forecasts for user‑selected locations',
      tags: ['React', 'CSS Modules', 'API'],
      size: styles.tall,
      img: openweather,
      link: 'https://frotrest.github.io/OpenWeather/',
    },
    {
      id: 4,
      title: 'MNTN',
      desc: 'MNTN is a high-end landing page for an exciting hiking guide.',
      tags: ['React', 'Tailwind'],
      size: styles.small,
      img: mntn,
      link: 'https://frotrest.github.io/MNTN/',
    },
    {
      id: 5,
      title: 'Concerts',
      desc: 'A one-page website dedicated to music concerts and festivals.',
      tags: ['JavaScript', 'SASS', 'API'],
      size: styles.small,
      img: concerts,
      link: 'https://frotrest.github.io/concerts/',
    },
    {
      id: 6,
      title: 'WebStudio-2.0',
      desc: 'A responsive multisite platform developed using modern web technologies.',
      tags: ['HTML', 'SASS'],
      size: styles.medium,
      img: webstudio,
      link: 'https://frotrest.github.io/WebStudio-2.0/',
    },
  ];
  return (
    <section className={clsx(styles.works)} id="projects">
      <Container
        className={clsx(styles.worksContent)}
        dataAnimate="fadeInRight"
      >
        <h2 className={clsx(styles.worksContentTitle)}>Featured Works</h2>
        <p className={clsx(styles.worksContentDescription)}>
          A selection of recent interfaces and systems engineered for
          performance and clarity.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              href={project.link}
              target="blank"
              key={project.id}
              className={clsx(styles.card, project.size)}
            >
              <div className={clsx(styles.cardHeader)}>
                <div className={clsx(styles.tags)}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={clsx(styles.tag)}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={clsx(styles.projectTitle)}>{project.title}</h3>
                <p className={clsx(styles.projectDesc)}>{project.desc}</p>
              </div>
              <div className={clsx(styles.imageBox)}>
                <img
                  src={project.img}
                  alt={`img-${project.id}`}
                  className={clsx(styles.imageBoxItem)}
                  loading='lazy'
                />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Works;
