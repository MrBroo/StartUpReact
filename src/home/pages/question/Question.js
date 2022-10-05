import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Question.css";
import QuestionCard from "../../../Card/QuestionCard/QuestionCard";

function Question() {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5852/api/questions/quiz/${id}`)
      .then((response) => {
        setQuestions(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      {questions?.map((obj) => {
        return (
          <QuestionCard
            key={obj.id}
            content={obj.content}
            optionEntities={obj.optionEntities.map((item) => {
              return <p>{item.option}</p>;
            })}
          />
        );
      })}
    </div>
  );
}

export default Question;
