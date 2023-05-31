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
          <li>
            <Link href="/browse/special">Special</Link>
          </li>
          <li>
            <Link href="/browse/category-1">Category 1</Link>
          </li>
          <li>
            <Link href="/browse/category-2">Category 2</Link>
          </li>
          <li>
            <Link href="/browse/category-3">Category 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
