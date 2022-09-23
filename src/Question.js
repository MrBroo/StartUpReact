import Card from "./Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Question.css";

function Question() {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5852/api/questions/${(5)}`)
      .then((response) => {
        setQuestions(response.data);
        console.log(response.data);
      });
  }, []);

  const renderData = questions?.map(
    ({ content, option1, option2, option3}) => (
      <Card
        content={content}
        option1={option1}
        option2={option2}
        option3={option3}
      />
    )
  );

  return <div>{renderData}</div>;
}

export default Question;
