import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-tile.component.module.scss';

const ProductTile: React.FC = () => {
  return (
    <div className={styles['product-tile']}>
      <div className={styles['image']}>
        <Image
          alt=""
          width={240}
          height={240}
          src="/mock/img/product-img.jpg"
        />
      </div>
      <div className={styles['bottom']}>
        <div className={styles['title']}>
          <Link href="/product/apple">product title</Link>
        </div>
        <div className={styles['decription']}>description</div>
        <div className={styles['price']}>price</div>
        <button className="button">button</button>
      </div>
    </div>
  );
};

export default ProductTile;
