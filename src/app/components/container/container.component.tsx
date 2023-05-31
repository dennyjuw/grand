import React from 'react';
import styles from './container.component.module.scss';

const ProductTileContainer: React.FC<React.PropsWithChildren<any>> = (
  props: React.PropsWithChildren<any>
) => {
  return <div className={styles['container']}>{props.children}</div>;
};

export default ProductTileContainer;
