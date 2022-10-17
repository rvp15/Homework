import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Gamepage() {
  const url = `https://jservice.io/api/random`;
  ////////////////////////
  let [apiquestion, setQuestion] = useState([]);
  let [score, setScore] = useState(0);
  let [isActive, setActive] = useState(false);
  ////////////////////////////
  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestion(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getQuestion();
  }, []);
  ///////////////////////////////
  const handleScoreIncreament = () => setScore(score + apiquestion[0].value);
  const handleScoreDecreament = () => setScore(score - apiquestion[0].value);
  const handleReset = () => setScore(0);
  const handleToggle = () => setActive(!isActive);
  //////////////////////////////
  return (
    <div className="gamepage ">
    
      <div>
        <h1 className="txt score">
          Score:<span>{score}</span>
        </h1>
        <div>
          <button className="btn" onClick={handleScoreIncreament}>+</button>
          <button className="btn" onClick={handleScoreDecreament}>-</button>
          <button className="btn" onClick={handleReset}>Reset</button>
        </div>
      </div>
      <br />

      {/* /////////////////////////////////// */}
      <div className="box">
      <button className="btn" onClick={getQuestion}>Get Next Question</button>
      {apiquestion.length && apiquestion[0].value ? (
        <div className="txt">
          <p>Question: {apiquestion[0].question}</p>
          <p>Category: {apiquestion[0].category.title}</p>
          <p>Points: {apiquestion[0].value}</p>
          <div>
            <button className="btn reveal" onClick={handleToggle}>Click to Reveal Answer</button>
            <div>
              {isActive ? (
                <h2 className="displayanswer">{apiquestion[0].answer}</h2>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        "Error while Fetching data from API"
      )}
</div>
<div>
  
<Link to='/nextlevel'>
            <button className="btn"> Play Next Level </button>
        </Link>
</div>
    </div>
  );
}
