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

  //   function getOption(id) {
  //     // setQuestionId(id);
  //     axios
  //       .get(`http://localhost:5852/api/option/question/${id}`)
  //       .then((response) => {
  //         setOption(response.data);
  //         console.log(response.data);
  //       });
  //   }

  // const renderData = questions?.map(({ content, id }) => (
  //   <QuestionCard content={content} key={id} />
  // ));

  return (
    <div>
      {questions?.map((obj, index) => {
        return (
          <QuestionCard
            key={index}
            content={obj.content}
            optionEntities={obj.optionEntities.option}
          />
        );
      })}
    </div>
  );
}

export default Question;
