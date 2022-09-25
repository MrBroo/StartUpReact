import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../main/Question.css";
import QuestionCard from "../Card/home/QuestionCard";
import OptionCard from "../Card/home/OptionCard";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [option, setOption] = useState([]);
  const { id } = useParams();
  const [questionId, setQuestionId] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5852/api/questions/quiz/${id}`)
      .then((response) => {
        setQuestions(response.data);
        console.log(response.data);
      });
  }, []);

  function getOption(id) {
    // setQuestionId(id);
    axios
      .get(`http://localhost:5852/api/option/question/${id}`)
      .then((response) => {
        setOption(response.data);
        console.log(response.data);
      });
  }

  const renderData = questions?.map(({ content, id }) => (
    <QuestionCard content={content} key={id} onClick={() => getOption(id)} />
  ));
  const renderData2 = option?.map(({ option, id }) => (
    <OptionCard option={option} key={id} />
  ));

  return <div>{renderData}</div>;
}

export default Question;
