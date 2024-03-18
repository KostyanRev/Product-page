import React from 'react';

import styles from './Product.module.scss';

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        <img src="/img/product_photo.png" alt="" />
      </div>
      <div>
        <h3 className={styles.title}>ЧОЛОВІЧИЙ ТЕРМОКОСТЮМ ATLANTIC</h3>
        <p className={styles.subtitle}>ТЕРМОКОСТЮМ</p>
        <p className={styles.price}>3700 грн.</p>
        <p className={styles.chooseSize}>ОБЕРІТЬ РОЗМІР</p>
        <div className={styles.sizes}>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
          <div className={styles.sizeBox}></div>
        </div>
        <p className={styles.chooseSize}>ОБЕРІТЬ КОЛІР</p>
        <div className={styles.selectColor}>
          <div className={styles.colorBoxWhite}></div>
          <div className={styles.colorBoxGray}></div>
          <div className={styles.colorBoxBlack}></div>
        </div>
        <img
          className={styles.pointerColor}
          src="/img/pointer.svg"
          alt="Pointer"
        />
        <h4 className={styles.descriptionTitle}>ІНФОРМАЦІЯ ПРО ТОВАР</h4>
        <div className={styles.description}>
          <p>
            <span>
              Терморегуляція забезпечить вам тепло в будь-якій ситуації.
            </span>
            <br />
            Сучасні технології дозволяють нашому термокостюму адаптуватися до
            <br />
            вашого тіла та навколишнього середовища.
          </p>
          <p>
            <span>
              Легкість та еластичність для максимальної свободи рухів.
            </span>
            <br />
            Забудьте про невигоди - наш термокостюм розроблений з урахуванням
            <br />
            вашої активності.
          </p>
          <p>
            <span>Дихаючі тканини для оптимальної вентиляції.</span>
            <br />
            Забудьте про потовиділення - наш термокостюм дозволяє шкірі
            "дихати",
            <br /> забезпечуючи вам комфорт під час активної діяльності.
          </p>
        </div>
        <hr className={styles.divider} />
        <div className={styles.buttons}>
          <button className={styles.order}>оформити замовлення</button>
          <button className={styles.buy}>купити у кредит</button>
          <img src="/img/Favourite.svg" alt="Favourite" />
          <img src="/img/Cart.svg" alt="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Product;
