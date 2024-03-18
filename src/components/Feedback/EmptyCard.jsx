import React from 'react';

import styles from './Feedback.module.scss';

const EmptyCard = () => {
  return (
    <div className={styles.emptyCard}>
      <img src="/img/horizontalLine.svg" alt="Plus" />
      <img src="/img/verticalLine.svg" alt="Plus" />
    </div>
  );
};

export default EmptyCard;
