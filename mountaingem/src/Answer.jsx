import { useState } from "react";

var Answers = [
  [
    "Wealth Generation",
    "Wealth Accumulation",
    "Investing Knowledge",
    "Future Planning",
    "Other",
  ],
  ["A"],
  [
    "Substantially Greater",
    "Somewhat Greater",
    "About The Same",
    "Lower Than Today",
  ],
  [
    "Very Stable but Lower Growth",
    "Mix of Stable and Higher Growth",
    "High Growth Potential with Risks",
    "Not Quite Sure, Need Help",
  ],
  [
    "Optimistic",
    "Somewhat Optimistic",
    "Uncertain",
    "Somewhat Pessimistic",
    "Pessimistic",
  ],
];

function ListAnswer({ questionNumber, questionSetCount, QA, setQA, question }) {
  var answers = Answers[questionNumber];
  function submitAnswer(chosenAnswer) {
    var questionAnswerString =
      "Question: " + question + " Answer: " + chosenAnswer;
    setQA((QA) => QA.concat(" ", questionAnswerString));
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
      "Question: " + question + " Answer: " + chosenAnswer;
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

export default ListAnswer;
export { InputAnswer };
