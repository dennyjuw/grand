import React from 'react';
import Link from 'next/link';
import styles from './breadcrumb.component.module.scss';

const Breadcrumb: React.FC = () => {
  return (
    <div className={styles['breadcrumb']}>
      <ul>
        <li className={styles['link']}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles['link']}>
          <Link href="/">Test</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
