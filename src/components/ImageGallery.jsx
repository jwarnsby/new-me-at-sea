import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const cycle = (index) => {
    setCurrentIndex((prevIndex) => (index !== undefined ? index : prevIndex < data.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => cycle(), 6000);
    return () => clearInterval(intervalRef.current);
  }, [data.length]);

  const handleSelectorClick = (index) => {
    clearInterval(intervalRef.current);
    cycle(index);
    intervalRef.current = setInterval(() => cycle(), 6000);
  };

  const handleButtonClick = (direction) => {
    clearInterval(intervalRef.current);
    if (direction === 'prev') {
      cycle(currentIndex > 0 ? currentIndex - 1 : data.length - 1);
    } else {
      cycle();
    }
    intervalRef.current = setInterval(() => cycle(), 6000);
  };

  return (
    <div className={styles.container}>
      <div id="gallery" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Gallery</h2>
            <p>Explore the beautiful Celebrity Ascent!</p>
          </div>
        </div>
      </div>
      <ul className={styles.slides}>
  {data.map((item, index) => (
    <li
      key={index}
      className={`${styles.slide} ${currentIndex === index ? styles.active : ''}`}
      style={{ backgroundImage: `url(${item.largeImage})` }}
    >
      <h1 className={styles.title}>
        <span className={styles.titleText}>{item.title}</span>
      </h1>
    </li>
  ))}
</ul>

      <ul className={styles.slideSelect}>
        <li className={`${styles.btn} ${styles.prev}`} onClick={() => handleButtonClick('prev')}>&lt;</li>
        {data.map((_, index) => (
          <li key={index} className={`${styles.selector} ${currentIndex === index ? styles.current : ''}`} onClick={() => handleSelectorClick(index)}></li>
        ))}
        <li className={`${styles.btn} ${styles.next}`} onClick={() => handleButtonClick('next')}>&gt;</li>
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,small: PropTypes.string.isRequired, // Updated to use largeImage
    })
  ).isRequired,
};
