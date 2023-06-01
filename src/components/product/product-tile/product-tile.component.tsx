import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from '../cart-button/cart-button.component';
import styles from './product-tile.component.module.scss';

const ProductTile: React.FC = (props: any) => {
  const { id, title, description, imageUrl, price, unit, special } = props;

  return (
    <div className={styles['product-tile']}>
      {special && (
        <div className={`${styles['tag']} font-headline`}>Special</div>
      )}

      <div className={styles['image']}>
        <Link className={styles['image-link']} href={`/product/${id}`}>
          <Image
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={imageUrl}
          />
        </Link>
      </div>
      <div className={styles['bottom']}>
        <div className={styles['title']}>
          <Link href={`/product/${id}`}>{title}</Link>
        </div>

        {description && (
          <div className={styles['decription']}>{description}</div>
        )}

        <div className={styles['price']}>
          ${price}/{unit}
        </div>

        <div className="text-center">
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
