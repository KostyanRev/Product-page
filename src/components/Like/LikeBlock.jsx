import React from 'react';

import styles from './Like.module.scss';
import LikeCard from './LikeCard';

const LikeBlock = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ще може сподобатись</h3>
      <div className={styles.cards}>
        <LikeCard />
        <LikeCard />
        <LikeCard />
      </div>
      <div className={styles.watchMore}>
        <p className={styles.watchText}>ДИВИТИСЬ БІЛЬШЕ</p>
        <img src="/img/arrows-down.svg" alt="arrow down" />
      </div>
    </div>
  );
};

export default LikeBlock;
