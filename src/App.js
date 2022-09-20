import "./App.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:5852/api/questions/list").then((response) => {
      setQuestions(response.data.data);
    });
  }, []);
  const renderData = questions.map(({ questions, variants, id }) => (
    <Card questions={questions} variants={variants} />
  ));
  return (
    <div className="App">
      <div>{renderData}</div>
    </div>
  );
}

export default App;
