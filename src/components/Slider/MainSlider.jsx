import React, { useRef } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import styles from './MainSlider.module.scss';
import 'slick-carousel/slick/slick-theme.css';
import EmptyCard from '../Feedback/EmptyCard';
import Card from '../Feedback/Card';

const MainSlider = () => {
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className={styles.slider_container}>
      <div className={styles.arrow_buttons}>
        <button
          className={styles.prevBtn}
          onClick={() => arrowRef.current.slickPrev()}>
          <img src="/img/arrow.svg" alt="Arrow left" />
        </button>
        <button onClick={() => arrowRef.current.slickNext()}>
          <img src="/img/arrow.svg" alt="Arrow right" />
        </button>
      </div>
      <Slider ref={arrowRef} {...settings}>
        <EmptyCard />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};

export default MainSlider;
