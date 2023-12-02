import ListAnswer, { InputAnswer, TextAnswer } from "./Answer";

var Questions = [
  "Tell me about what you want help with:",
  "What is your preferred investment strategy?",
  "What is your largest source of debt right now?",
  "What is the length of time remaining on your loan?",
  "Approximately what is the interest rate on the loan?",
  "Input OpenAI API key",
];

function Question({ questionNumber, questionSetCount, QA, setQA, setApiKey }) {
  var question = Questions[questionNumber];
  var answerBlock;
  if (questionNumber == 3) {
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
