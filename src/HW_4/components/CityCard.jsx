// src/HW_4/components/CityCard.jsx
import React from "react";
import Slider from "./Slider"; // Импортируйте компонент Slider
import styles from "../styles/CityCard.module.css";

const CityCard = ({ city }) => {
  return (
    <div className={styles.cityCard}>
      <h2>{city.name}</h2>
      <p className={styles.container_p}>{city.description}</p>
      <div className={styles.cityCard_line}></div>
      <h3>Images</h3>
      {city.images && city.images.length > 0 ? (
        <Slider images={city.images} /> // Используйте Slider для отображения изображений
      ) : (
        <p>No images available.</p>
      )}
      <div className={styles.cityCard_line}></div>
      <h3>Attractions</h3>
      <ul className={styles.container_ul}>
        {city.facts.map((fact, index) => (
          <li key={index}>
            <a href={fact.url} target="_blank" rel="noopener noreferrer">
              {fact.text}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.cityCard_line}></div>
    </div>
  );
};

export default CityCard;
