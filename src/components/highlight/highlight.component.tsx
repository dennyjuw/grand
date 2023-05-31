import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import styles from './highlight.component.module.scss';

const Highlight: React.FC = () => {
  return (
    <div className={styles['highlight']}>
      {/* <Image></Image>
      <Link></Link> */}
      <p>Highlight text</p>
    </div>
  );
};

export default Highlight;
