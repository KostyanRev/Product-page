import React from 'react';

import styles from './Feedback.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.userInfo}>
          <img src="/img/Avatar.png" alt="Avatar" />
          <div className={styles.title}>
            <div className={styles.stars}>
              <img src="/img/filled_star.svg" alt="Star" />
              <img src="/img/filled_star.svg" alt="Star" />
              <img src="/img/filled_star.svg" alt="Star" />
              <img src="/img/filled_star.svg" alt="Star" />
              <img src="/img/filled_star.svg" alt="Star" />
            </div>
            <p className={styles.userName}>Жора Ремінгтон</p>
          </div>
        </div>
        <p className={styles.comment}>
          Дуже задоволений <br /> якістю обслуговування і самою продукцією.
          Купували термобілизну у подарунок, друзі...
        </p>
      </div>
    </div>
  );
};

export default Card;
