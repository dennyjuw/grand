'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Drawer from '../drawer/drawer.component';
import styles from './header.component.module.scss';

const Header: React.FC<any> = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    push(`search?term=${searchTerm}`);
  };

  const [browseOpen, setBrowseOpen] = useState(false);

  const toggleBrowse = (e: any) => {
    e.preventDefault();
    setBrowseOpen(!browseOpen);
  };

  return (
    <header className={styles['header']}>
      <div className="flex flex-row align-items-center">
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={80} height={80} priority />
        </Link>
        <div className="flex-grow">
          <form onSubmit={handleSearch}>
            <input type="text" name="searchTerm" placeholder="Search"></input>
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </div>
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
            <Link href="/browse" onClick={toggleBrowse}>
              Browse
            </Link>
          </li>
          <li
            className={pathname === '/browse/specials' ? styles['active'] : ''}
          >
            <Link href="/browse/specials">Specials</Link>
          </li>
          <li
            className={
              pathname === '/browse/category-1' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-1">Category 1</Link>
          </li>
          <li
            className={
              pathname === '/browse/category-2' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-2">Category 2</Link>
          </li>
          <li
            className={
              pathname === '/browse/category-3' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-3">Category 3</Link>
          </li>
        </ul>
      </nav>
      <Drawer
        title="Browse"
        position="left"
        open={browseOpen}
        onClose={toggleBrowse}
      >
        <ul>
          <li
            className={
              pathname === '/browse/category-1' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-1">Category 1</Link>
          </li>
          <li
            className={
              pathname === '/browse/category-2' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-2">Category 2</Link>
          </li>
          <li
            className={
              pathname === '/browse/category-3' ? styles['active'] : ''
            }
          >
            <Link href="/browse/category-3">Category 3</Link>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
