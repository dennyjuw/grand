import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-tile.component.module.scss';

const ProductTile: React.FC = (props: any) => {
  const { title, description, imageUrl, price, unit } = props;

  return (
    <div className={styles['product-tile']}>
      <div className={styles['image']}>
        <Image alt="" width={240} height={240} src={imageUrl} />
      </div>
      <div className={styles['bottom']}>
        <div className={styles['title']}>
          <Link href="/product/apple">{title}</Link>
        </div>

        {description && (
          <div className={styles['decription']}>{description}</div>
        )}

        <div className={styles['price']}>
          ${price}/{unit}
        </div>

        <button className="button">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductTile;
