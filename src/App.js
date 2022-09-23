import Question from "./Question";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
