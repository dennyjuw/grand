'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImageProps } from './product-image.model';
import styles from './product-image.component.module.scss';

const ProductImage: React.FC<ProductImageProps> = (
  props: ProductImageProps
) => {
  const { image } = props;
  const [mainImage, setMainImage] = useState(image[0]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const thumbnailClick = (e: any, selectedIndex: number, img: string) => {
    e.preventDefault();
    setMainImage(img);
    setMainImageIndex(selectedIndex);
  };

  return (
    <div className={styles['product-image-container']}>
      <div className={styles['product-image-main']}>
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          src={mainImage}
        />
      </div>
      {image.length > 1 && (
        <div className={styles['product-image-thumbnail']}>
          {image.map((img, i) => (
            <a
              key={i}
              onClick={(e) => thumbnailClick(e, i, img)}
              className={i === mainImageIndex ? styles['selected'] : ''}
            >
              <Image
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src={img}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImage;
