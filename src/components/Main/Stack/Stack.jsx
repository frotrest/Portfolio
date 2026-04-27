import React from 'react';
import styles from './stack.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiGit,
  SiVercel,
  SiNetlify,
  SiVite,
  SiNpm,
  SiYarn,
  SiGithub,
} from 'react-icons/si';
import { LuPackage } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const Stack = () => {
  const stack = [
    {
      id: 1,
      title: 'HTML5',
      category: 'Markup Language',
      icon: <SiHtml5 size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 2,
      title: 'CSS3',
      category: 'Styling',
      icon: <SiCss size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 3,
      title: 'SASS',
      category: 'Preprocessor',
      icon: <SiSass size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 4,
      title: 'JavaScript',
      category: 'Programming Language',
      icon: <SiJavascript size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 5,
      title: 'TypeScript',
      category: 'Programming Language',
      icon: <SiTypescript size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 6,
      title: 'React',
      category: 'Frontend Library',
      icon: <SiReact size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 7,
      title: 'Tailwind',
      category: 'CSS Framework',
      icon: <SiTailwindcss size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 8,
      title: 'Bootstrap',
      category: 'CSS Framework',
      icon: <SiBootstrap size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 9,
      title: 'Figma',
      category: 'Design Tool',
      icon: <SiFigma size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 10,
      title: 'Git',
      category: 'Version Control',
      icon: <SiGit size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 11,
      title: 'Vite',
      category: 'Build Tool',
      icon: <SiVite size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 12,
      title: 'Parcel',
      category: 'Bundler',
      icon: <LuPackage size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 13,
      title: 'NPM',
      category: 'Package Manager',
      icon: <SiNpm size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 14,
      title: 'Yarn',
      category: 'Package Manager',
      icon: <SiYarn size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 15,
      title: 'Vercel',
      category: 'Deployment',
      icon: <SiVercel size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 16,
      title: 'Netlify',
      category: 'Deployment',
      icon: <SiNetlify size={20} color="rgba(200, 194, 235, 1)" />,
    },
    {
      id: 17,
      title: 'Github',
      category: 'Deployment',
      icon: <SiGithub size={20} color="rgba(200, 194, 235, 1)" />,
    },
  ];
  return (
    <section className={clsx(styles.stack)} id="stack">
      <Container className={clsx(styles.stackContent)} dataAnimate="fadeInLeft">
        <h2 className={clsx(styles.stackContentTitle)}>The Stack</h2>
        <p className={clsx(styles.stackContentDescription)}>
          Modern primitives for digital excellence.
        </p>
      </Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={clsx(styles.stackCards)}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {stack.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={clsx(styles.stackCard)}>
              {item.icon}
              <h3 className={clsx(styles.stackCardTitle)}>{item.title}</h3>
              <p className={clsx(styles.stackCardItem)}>{item.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Stack;
