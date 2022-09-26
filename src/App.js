import { Routes, Route } from "react-router-dom";
import Register from "./home/pages/register/index";
import Presentation from "./home/Presentation";
import Quiz from "./home/pages/quiz/Quiz";
import Question from "./home/pages/question/Question";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
