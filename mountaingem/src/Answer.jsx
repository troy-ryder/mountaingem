import { useState } from "react";
import { AIMessage, HumanMessage, SystemMessage } from "langchain/schema";

var Answers = [
  [
    "Saving for a big purchase",
    "Paying down student loans",
    "General financial planning",
    "Latest investment strategies",
    "Retirement Planning",
  ],
  [
    "Aggressive",
    "Growth",
    "Growth and Income",
    "Conservative",
    "I don't know yet",
  ],
  ["Student Loans", "Credit Card Debt", "Mortgage", "Auto Loan", "Other"],
  ["A"],
  ["0-2%", "2-4%", "4-6%", "6-8%", "Above 8%"],
];

function ListAnswer({ questionNumber, questionSetCount, QA, setQA, question }) {
  var answers = Answers[questionNumber];
  function submitAnswer(chosenAnswer) {
    var questionMessage = new AIMessage(question);
    var answerMessage = new HumanMessage(chosenAnswer);
    setQA([...QA, questionMessage, answerMessage]);
    questionSetCount(questionNumber + 1);
  }
  return (
    <>
      <ul className="answer-list">
        {answers.map((item) => (
          <div className="answer-card" key={item + "-card"}>
            <li
              className="answer-list-item"
              key={item}
              onClick={() => submitAnswer(item)}
            >
              {item}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

function InputAnswer({
  questionNumber,
  questionSetCount,
  QA,
  setQA,
  question,
}) {
  const [years, setYears] = useState(0);
  function increment() {
    setYears(years + 1);
  }
  function decrement() {
    if (years > 0) {
      setYears(years - 1);
    }
  }
  function submitAnswer(chosenAnswer) {
    var questionAnswerString =
      "Question: " + question + " Human Answer: " + chosenAnswer;
    setQA((QA) => QA.concat(" ", questionAnswerString));
    questionSetCount(questionNumber + 1);
  }
  return (
    <>
      <div className="year-answer-card">
        <div className="top-year-card">
          <div className="year-counter">
            <h1 className="year-display">{years}</h1>
            <h2 className="year-text">years</h2>
          </div>
        </div>
        <div className="bottom-year-card">
          <button className="year-button" onClick={increment}>
            +
          </button>
          <button className="year-button" onClick={decrement}>
            -
          </button>
        </div>
        <div className="year-card-submit">
          <button onClick={() => submitAnswer(years + " years")}>Submit</button>
        </div>
      </div>
    </>
  );
}

function TextAnswer({ questionNumber, questionSetCount, setAPI }) {
  const setAPIKey = (event) => {
    setAPI(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={setAPIKey}></input>
      <button onClick={() => questionSetCount(questionNumber + 1)}>
        Submit
      </button>
    </>
  );
}

export default ListAnswer;
export { InputAnswer, TextAnswer };
