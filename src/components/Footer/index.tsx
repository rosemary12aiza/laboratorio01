import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <span className={styles['text']}>SiteMaps</span>
            <span className={styles['text1']}>Home</span>
            <span className={styles['text2']}>Post</span>
            <span className={styles['text3']}>About</span>
          </div>
          <div className={styles['container4']}>
            <span className={styles['text4']}>Conectate con Nosotros</span>
            <span className={styles['text5']}>Facebook</span>
            <span className={styles['text6']}>Twiter</span>
            <span className={styles['text7']}>TickTock</span>
          </div>
        </div>
      </div>
      <div className={styles['container5']}>
        <img
          src='/images/next.svg'
          alt='image'
          className={styles['image']}
        />

        <img
          src='/images/vercel.svg'
          alt='image1'
          className={styles['image1']}
        />
        <img
          src='/images/seminario.jpeg'
          alt='image2'
          className={styles['image2']}
        />
      </div>
    </footer>
  );
};

export default Footer;
