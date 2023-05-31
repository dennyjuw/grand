import React from 'react';
import styles from './footer.component.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <h2>Footer</h2>
      <div className="flex flex-row flex-space-between">
        <ul>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
        </ul>
      </div>
      <div className={styles['copyright']}>&copy; copyright</div>
    </footer>
  );
};

export default Footer;
