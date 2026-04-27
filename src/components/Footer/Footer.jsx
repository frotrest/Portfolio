import React from 'react';
import styles from './footer.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const Footer = () => {
  const networks = [
    {
      networkText: 'Github',
      networkLink: 'https://github.com/frotrest',
    },
    {
      networkText: 'Telegram',
      networkLink: 'https://t.me/Kweiq5776',
    },
    {
      networkText: 'Email',
      networkLink: 'mailto:frotrest5776@gmail.com',
    },
  ];
  return (
    <footer className={clsx(styles.footer)} id="links">
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <a href="#" className={clsx(styles.footerContentLogo)}>
          Frotrest portfolio
        </a>
        <h3 className={clsx(styles.footerContentTitle)}>
          © 2026 CRAFTED WITH PRECISION. ALL RIGHTS RESERVED.
        </h3>
        <div className={clsx(styles.networks)}>
          {networks.map((item, index) => (
            <a
              key={index}
              href={item.networkLink}
              target="blank"
              className={clsx(styles.networkItem)}
            >
              {item.networkText}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
