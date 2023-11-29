import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./Question";
import Chatbot from "./ChatBot";

function App() {
  const [count, setCount] = useState(0);
  const [QA, setQA] = useState([]);
  console.log(QA);
  if (count < 5) {
    return (
      <div className="full-card">
        <Question
          questionNumber={count}
          questionSetCount={setCount}
          QA={QA}
          setQA={setQA}
        />
      </div>
    );
  }
  return <Chatbot />;
}

export default App;
