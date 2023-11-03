import React from 'react';
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p className={styles.footer__text}>Code w/ ❤</p>
                <p className={styles.footer__text}>
                    <a className={styles.footer__text__link}
                       href="https://drive.google.com/file/d/1_znNdyQlrwVfbhpRLHrHT2EKQH5stU8q/view?usp=sharing"
                       target={'_blank'}>💼 My CV</a>
                </p>
                <p  className={styles.footer__text}>
                    <a className={styles.footer__text__link} href="https://github.com/w1llow1sp/edstein-test-task"
                       target={'_blank'}>💻 Source code</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;