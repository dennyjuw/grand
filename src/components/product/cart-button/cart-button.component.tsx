import React from 'react';
// import Link from 'next/link';
import styles from './cart-button.component.module.scss';

const CartButton: React.FC = (props: any) => {
  // const { title, description, imageUrl, price, unit } = props;

  return (
    <>
      <button className={`font-headline ${styles['cart-button']}`}>
        Add to cart
      </button>
    </>
  );
};

export default CartButton;
