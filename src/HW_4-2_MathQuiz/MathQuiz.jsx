
import React, { useState } from "react";
import confetti from "canvas-confetti";
import Answer from "./Answer";
import "./MathQuiz.css";

const MathQuiz = () => {
  const [points, setPoints] = useState(0);
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));

  const updatePoints = (correct) => {
    if (correct) {
      setPoints(points + 1);
      triggerConfetti();
    } else {
      setPoints(points - 1);
    }
    // Generate new question
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 300,
      startVelocity: 40,
      spread: 360,
      origin: {
        x: 0.5,
        y: 0.5,
      },
    });
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <h2>Ваши очки: {points}</h2>
        <p>
          {a} + {b} = ?
        </p>
        <Answer a={a} b={b} updatePoints={updatePoints} />
      </div>
    </div>
  );
};

export default MathQuiz;
