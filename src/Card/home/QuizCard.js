import "../main/QuizCard.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiWindows } from "react-icons/bi";

function QuizCard({ title, description, time, numberOfQuestions, ...rest }) {
  return (
    <div className="quiz" {...rest}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="quiz__footer">
        <div className="quiz__modul">
          <div className="quiz__icon">
            <MdOutlineWatchLater />
          </div>
          <div>{time}</div>
        </div>
        <div className="quiz__modul">
          <div className="quiz__icon">
            <BiWindows />
          </div>
          <div>{numberOfQuestions}</div>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
