
import React, { useState } from "react";
import styles from "../styles/CitySelector.module.css";

const CitySelector = ({ cities, onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onCitySelect(city);
  };

  return (
    <form className={styles.citySelectorForm}>
      <label htmlFor="city">Select a city:</label>
      <select id="city" value={selectedCity} onChange={handleChange}>
        <option value="" disabled>
          Choose a city
        </option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CitySelector;
