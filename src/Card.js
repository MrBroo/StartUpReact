function Card({ content, option1, option2, option3, id }) {

  return (
    <div className="card">
      <h4>{content}</h4>
      <div>
      option1
        <input type="radio">{option1}</input>
        <input type="radio">{option2}</input>
        <input type="radio">{option3}</input>
      </div>
    </div>
  );
}

export default Card;
