import React from 'react';
import styles from './flyout.component.module.scss';

const Flyout: React.FC<React.PropsWithChildren<any>> = (
  props: React.PropsWithChildren<any>
) => {
  return <div className={styles['flyout']}>{props.children}</div>;
};

export default Flyout;
