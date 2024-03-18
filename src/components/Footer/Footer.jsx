import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footerInfo}>
          <div className={styles.contacts}>
            <h4 className={styles.title}>Контакт - центр</h4>
            <p>098 900 09 09 </p>
            <p>Пн - Пт 09:00 - 21:00</p>
            <p>Пн - Пт 09:00 - 21:00</p>
          </div>
          <div className={styles.menu}>
            <div>
              <h4 className={styles.title}>Покупцям</h4>
              <p>Оплата і доставка</p>
              <p>Повернення</p>
              <p>Питання та відповіді</p>
            </div>
            <div>
              <h4 className={styles.title}>Особистий кабінет</h4>
              <p>Мої дані</p>
              <p>Історія замовлень</p>
              <p>Улюблені</p>
              <p>Розсилки</p>
            </div>
            <div>
              <h4 className={styles.title}>Про компанію</h4>
              <p>Про нас</p>
              <p>Новини</p>
              <p>Стати партнером</p>
              <p>Угода користувача</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerNav}>
        <nav className={styles.navigation}>
          <ul>
            <li>НОВИНКИ</li>
            <li>ЧОЛОВІКИ</li>
            <hr className={styles.underline} />
            <li>ЖІНКИ</li>
            <li>АКСЕСУАРИ</li>
            <li>АКЦІЇ</li>
          </ul>
        </nav>
        <div>
          <p className={styles.rights}>
            © 2022 — 2023 IGNAT. Усі права захищені.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
