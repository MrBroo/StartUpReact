import "../main/QuizCard.css";

function QuizCard({
  title,
  description,
  maxMarks,
  numberOfQuestions,
  ...rest
}) {
  return (
    <div className="quiz" {...rest}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div>
        <div>{maxMarks}</div>
        <div>{numberOfQuestions}</div>
      </div>
    </div>
  );
}

export default QuizCard;
