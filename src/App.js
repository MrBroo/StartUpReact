import { Routes, Route } from "react-router-dom";
import Category from "./home/Category";
import Question from "./home/Question";
import Quiz from "./home/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="quiz/:id" element={<Quiz />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
