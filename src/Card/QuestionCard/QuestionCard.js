import "./Card.css";
function QuestionCard({ content, optionEntities, ...rest }) {
  return (
    <div className="card" {...rest}>
      <h4>{content}</h4>
      <h3>{optionEntities}</h3>
    </div>
  );
}

export default QuestionCard;
