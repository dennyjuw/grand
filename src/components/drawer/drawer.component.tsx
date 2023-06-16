import React from 'react';
import styles from './drawer.component.module.scss';

const Drawer: React.FC<React.PropsWithChildren<any>> = (
  props: React.PropsWithChildren<any>
) => {
  const { title, position, open } = props;

  const closeDrawer = (e: any) => {
    props.onClose(e);
  };

  return (
    open && (
      <>
        <div className={styles['mask']} onClick={closeDrawer}></div>
        <div className={`${styles['drawer']} ${styles[position]}`}>
          <h2>{title}</h2>
          {props.children}
        </div>
      </>
    )
  );
};

export default Drawer;
