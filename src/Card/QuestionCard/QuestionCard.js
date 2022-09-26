import "./Card.css";
function QuestionCard({ content, optionEntities, ...rest }) {
  return (
    <div className="card" {...rest}>
      <h4>{content}</h4>
      <p>{optionEntities}</p>
    </div>
  );
}

export default QuestionCard;
