import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.component.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <div className="flex flex-row">
        <Link href="/">
          <Image
            // className={styles.logo}
            src="/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </Link>
        <div className="flex-grow">search</div>
        <div>
          <Link href="/register">Login or sign up</Link>
        </div>
        <div>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
      <nav>
        <ul className="flex flex-row">
          <li>Special</li>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
