import React, { useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = ({ images }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const goLeft = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const updateActiveButton = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.frame}>
        <div className={styles.trigger}>
          <button onClick={goLeft}>&lt;</button>
          <button onClick={goRight}>&gt;</button>
        </div>
        <div
          className={styles.cards}
          style={{
            transform: `translateX(${-sliderIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${image})` }}
              key={index}
            ></div>
          ))}
        </div>
        <div className={styles.rounds}>
          {images.map((_, index) => (
            <button
              key={index}
              className={index === sliderIndex ? styles.active : ""}
              onClick={() => updateActiveButton(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
