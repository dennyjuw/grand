import React from 'react';
import styles from './loader.component.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles['loader']}>
      <div className={styles['jimu-primary-loading']}></div>
    </div>
  );
};

export default Loader;
