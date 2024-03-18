import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <span className={styles.help_number}>
          <p>098 900 09 09</p>
          <p>Допомога</p>
        </span>
        <span className={styles.login}>
          <p>Увійти</p>
          &nbsp;
          <span>/</span>
          &nbsp;
          <p>Зареєструватися</p>
        </span>
      </div>
      <div className={styles.header__bottom}>
        <p className={styles.header__title}>IGNAT</p>
        <nav className={styles.header__navigation}>
          <ul>
            <li>НОВИНКИ</li>
            <li>ЧОЛОВІКИ</li>
            <hr className={styles.underline} />
            <li>ЖІНКИ</li>
            <li>АКСЕСУАРИ</li>
            <li>АКЦІЇ</li>
          </ul>
        </nav>
        <div className={styles.header__search}>
          <div className={styles.search_block}>
            <img src="/img/Search.svg" alt="Search" />
            <input type="text" />
          </div>
          <img
            className={styles.favourite_icon}
            src="/img/Favourite.svg"
            alt="Favourite"
          />
          <img className={styles.cart_icon} src="/img/Cart.svg" alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
