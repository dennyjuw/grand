import React from 'react';
import Link from 'next/link';
import styles from './footer.component.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className="layout-main flex flex-row flex-space-between">
        <div>
          <h4>Customer service</h4>
          <ul>
            <li>
              <Link href="/">Contact Us1</Link>
            </li>
            <li>
              <Link href="/">Feedback</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Shop online</h4>
          <ul>
            <li>
              <Link href="/">Pick up</Link>
            </li>
            <li>
              <Link href="/">Delivery</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Useful links</h4>
          <ul>
            <li>
              <Link href="/">Store locations</Link>
            </li>
            <li>
              <Link href="/">Rewards</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>About</h4>
          <ul>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Brands</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
            <li>
              <Link href="/">link 1</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['copyright']}>
        <div className="layout-main">&copy; copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
