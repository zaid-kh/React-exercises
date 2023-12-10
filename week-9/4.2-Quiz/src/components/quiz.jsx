import React from "react";
import "./quiz.css";

//QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title, Q2Input
const QuizTitle = () => {
  return <h2>How do you like front end?</h2>;
};
const Q1 = () => {
  return (
    <div className="question">
      <Q1Title />
      <Q1Input />
    </div>
  );
};
const Q1Title = () => {
  return <h4>How much do you love front end?</h4>;
};
const Q1Input = () => {
  return <input type="range" name="front-end-love-meter" id="love-range" />;
};
const Q2 = () => {
  return (
    <div className="question">
      <Q2Title />
      <Q1Input />
    </div>
  );
};
const Q2Title = () => {
  return <h4>What is your favourite front end feature/topic?</h4>;
};
const Q2Input = () => {
  return <input type="text" name="q2input" />;
};
const Quiz = () => {
  return <div>quiz</div>;
};

export default Quiz;
