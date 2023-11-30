import ListAnswer, { InputAnswer, TextAnswer } from "./Answer";

var Questions = [
  "What is your financial Goal?",
  "What time frame do you envision to achieve your financial goal?",
  "In five years how do you forsee your standard of living compared to today?",
  "Which investment strategy would you be most comfortable with?",
  "How optimistic do you feel about the long term growth of the economy?",
  "Input OpenAI API key",
];

function Question({ questionNumber, questionSetCount, QA, setQA, setApiKey }) {
  var question = Questions[questionNumber];
  var answerBlock;
  if (questionNumber == 1) {
    answerBlock = (
      <InputAnswer
        questionNumber={questionNumber}
        questionSetCount={questionSetCount}
        QA={QA}
        setQA={setQA}
        question={question}
      />
    );
  } else if (questionNumber == 5) {
    answerBlock = (
      <TextAnswer
        questionNumber={questionNumber}
        questionSetCount={questionSetCount}
        setAPI={setApiKey}
      />
    );
  } else {
    answerBlock = (
      <ListAnswer
        questionNumber={questionNumber}
        questionSetCount={questionSetCount}
        QA={QA}
        setQA={setQA}
        question={question}
      />
    );
  }
  return (
    <>
      <div className="question-card">
        <div className="question-card-header">
          <h1 className="question-title">{question}</h1>
        </div>
        {answerBlock}
      </div>
    </>
  );
}

export default Question;
