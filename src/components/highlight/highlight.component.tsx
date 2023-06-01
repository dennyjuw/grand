import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './highlight.component.module.scss';

const Highlight: React.FC = (props: any) => {
  const { title, url, imageUrl, description } = props;
  return (
    <div className={styles['highlight']}>
      <Image
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        src={imageUrl}
      />
      <div className="text-left">
        <Link href={url} className="font-headline">
          {title}
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Highlight;
