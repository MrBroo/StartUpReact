import "./Quiz.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuizCard from "../../../Card/QuizCard/QuizCard";

function Quiz() {
  const [quiz, setQuiz] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const getQuiz = async () => {
      axios
        .get(`http://localhost:5852/api/quiz/category/${id}`)
        .then((response) => {
          setQuiz(response.data);
          console.log(response.data);
        });
    };
    getQuiz();
  }, []);

  const renderData = quiz.map(
    ({ title, description, time, numberOfQuestions, id }) => (
      <QuizCard
        key={id}
        title={title}
        description={description}
        time={time}
        numberOfQuestions={numberOfQuestions}
        onClick={() => navigate(`/question/${id}`)}
      />
    )
  );
  return <div className="quiz__page">{renderData}</div>;
}

export default Quiz;
