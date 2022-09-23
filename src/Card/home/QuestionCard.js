import "../main/Card.css";
function QuestionCard({ content, ...rest }) {
  return (
    <div className="card" {...rest}>
      <h4>{content}</h4>
    </div>
  );
}

export default QuestionCard;
