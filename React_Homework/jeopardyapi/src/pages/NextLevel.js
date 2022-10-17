import React from "react";
import { useState, useEffect } from "react";
import EachQuestions from "../components/EachQuestions";

function NextLevel() {
  const url = `https://jservice.io/api/random/?count=10`;
  let [questions, setQuestions] = useState([]);
 
  const getQuestions = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setQuestions(data);
    //   console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  
  return (
    <div className="gamepage">
      
      <button className="btn" onClick={getQuestions}>Get Next 10 set of Questions</button>
      {questions.length ? (
        <div className="txt">
            {questions.map((eachelement) => (<p> {eachelement.question} <EachQuestions data={eachelement}/> </p>))}
        </div>
      ) : null}
    </div>
  );
}

export default NextLevel;
