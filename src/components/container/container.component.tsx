import React from 'react';
import styles from './container.component.module.scss';

const Container: React.FC<React.PropsWithChildren<any>> = (
  props: React.PropsWithChildren<any>
) => {
  const { center } = props;
  return (
    <div
      className={[styles['container'], center ? 'flex-center' : '']
        .join(' ')
        .trim()}
    >
      {props.children}
    </div>
  );
};

export default Container;
