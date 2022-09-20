function Card({ questions, variants, id }) {
  const handleClick = (e) => {

  };
  return (
    <div className="card">
      <h4>{questions}</h4>
      <div onClick={(e) => handleClick(e)}>{variants}</div>
    </div>
  );
}

export default Card;
