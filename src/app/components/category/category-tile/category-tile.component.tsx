import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './category-tile.component.module.scss';

const CategoryTile: React.FC = () => {
  return (
    <div className={styles['category-tile']}>
      <div className={styles['image']}>
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          src="/mock/img/product-img.jpg"
        />
      </div>
      <div className={styles['title']}>
        <Link href="/product/apple">Sub category</Link>
      </div>
    </div>
  );
};

export default CategoryTile;
