import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navBar = [
    {
      navBarText: 'Projects',
      navBarAnchor: '#projects',
    },
    {
      navBarText: 'Stack',
      navBarAnchor: '#stack',
    },
    {
      navBarText: 'Links',
      navBarAnchor: '#links',
    },
  ];
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <a href="#" className={clsx(styles.headerContentLogo)}>
          Frotrest portfolio
        </a>
        <nav className={clsx(styles.navBar)}>
          {navBar.map((item, index) => (
            <a
              key={index}
              href={item.navBarAnchor}
              className={clsx(styles.navBarItem)}
            >
              {item.navBarText}
            </a>
          ))}
        </nav>
        <a
          href="https://t.me/Kweiq5776"
          target="blank"
          className={clsx(styles.headerContentBtn)}
        >
          Contact
        </a>
        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <HiMenuAlt3 size={32} />
        </button>
      </Container>
      <div
        className={clsx(styles.menuOverlay, isOpen && styles.active)}
        onClick={toggleMenu}
      />
      <div className={clsx(styles.mobileMenu, isOpen && styles.active)}>
        <div className={styles.mobileMenuHeader}>
          <button className={clsx(styles.closeBtn)} onClick={toggleMenu}>
            <IoClose size={35} />
          </button>
        </div>

        <nav className={clsx(styles.mobileNav)}>
          {navBar.map((item, index) => (
            <a
              href={item.navBarAnchor}
              key={index}
              className={clsx(styles.mobileNavItem)}
              onClick={toggleMenu}
            >
              {item.navBarText}
            </a>
          ))}
        </nav>

        <div className={styles.mobileFooter}>
          <a
            href="https://t.me/Kweiq5776"
            target="blank"
            className={clsx(styles.mobileFooterBtn)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
