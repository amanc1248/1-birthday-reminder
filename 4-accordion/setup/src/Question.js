import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [answerToogle, setAnswerToogle] = useState(false);
  const showHideAnswer = () => {
    setAnswerToogle(!answerToogle);
  };
  return (
    <article className="question">
      <h4>{title}</h4>
      <button className="btn">
        {answerToogle ? (
          <AiOutlineMinus
            onClick={() => {
              showHideAnswer();
            }}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            onClick={() => {
              showHideAnswer();
            }}
          ></AiOutlinePlus>
        )}
      </button>
      {answerToogle ? <p>{info}</p> : ""}
    </article>
  );
};

export default Question;
