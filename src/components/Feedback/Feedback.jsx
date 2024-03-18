import React from 'react';
import MainSlider from '../Slider/MainSlider';

import styles from './Feedback.module.scss';

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_title}>
        <h3>Відгуки про товар</h3>
        &nbsp;
        <p className={styles.counter}>(11)</p>
      </div>
      <MainSlider />
    </div>
  );
};

export default Feedback;
