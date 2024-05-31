import React, { useState } from "react";
import "./styles.css";
import oneStar from "./img/oneStar.png";
import twoStar from "./img/twoStar.png";
import threeStar from "./img/threeStar.png";
import fourStar from "./img/VeryGood.png";
import AI from './img/AI.jpg'

const ratingList = [oneStar, twoStar, threeStar, fourStar];

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating__cont">
      <div className="rating__main">
        <h1>Very interesting article.</h1>
        <div className="rating__main-img">
          <img src={AI} alt="img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          aspernatur accusantium earum delectus asperiores inventore impedit,
          neque quam veniam. Praesentium dolor tenetur a tempore quod magni
          commodi, non deserunt in itaque perspiciatis accusantium. Explicabo
          sed debitis voluptatem exercitationem at temporibus praesentium, ex
          aliquid distinctio quidem eligendi quam? Voluptates, dicta ab!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          aspernatur accusantium earum delectus asperiores inventore impedit,
          neque quam veniam. Praesentium dolor tenetur a tempore quod magni
          commodi, non deserunt in itaque perspiciatis accusantium. Explicabo
          sed debitis voluptatem exercitationem at temporibus praesentium, ex
          aliquid distinctio quidem eligendi quam? Voluptates, dicta ab!
        </p>
      </div>
      <div className="rating__article">
        <h3>Did you like this article?</h3>

        <div className="rating__img">
          <img src={ratingList[ratingValue]} alt="img-star" />
        </div>
        <div className="rating__cont-btn">
          <button onClick={() => setRatingValue(0)}>Bad</button>
          <button onClick={() => setRatingValue(1)}>Normal</button>
          <button onClick={() => setRatingValue(2)}>Good</button>
          <button onClick={() => setRatingValue(3)}>Very good</button>
        </div>
      </div>
    </div>
  );
}

export default Rating;
