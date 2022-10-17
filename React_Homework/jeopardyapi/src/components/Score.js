import React from 'react'
import { useState } from "react";


function Score(props) {
    let [score, setScore] = useState(0);
    const handleScoreIncreament = () => setScore(score + props.apiquestion[0].value);
    const handleScoreDecreament = () => setScore(score - props.apiquestion[0].value);
    const handleReset = () => setScore(0);
  return (
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
  )
}

export default Score
