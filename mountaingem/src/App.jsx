import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./Question";
import Chatbot from "./ChatBot";
import { BufferMemory } from "langchain/memory";
import { AIMessage, SystemMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";

function App() {
  const [count, setCount] = useState(0); //TODO Change
  const [QA, setQA] = useState("");
  const [chatHistory, setChatHistory] = useState("");
  const [apiKey, setApiKey] = useState("");

  if (count < 6) {
    return (
      <div className="full-card">
        <Question
          questionNumber={count}
          questionSetCount={setCount}
          QA={QA}
          setQA={setQA}
          setApiKey={setApiKey}
        />
      </div>
    );
  }
  var context =
    "Questions and Answers: " +
    QA +
    " \nPrompt: " +
    `
    You are a chatbot designed to ask questions to build a financial profile of a potential investor. \
    You're goal is to understand the potential clients name, age, networth, income, details of potential loans, \
    future financial goals, risk tolerance, and typical expenses this person may have. If they have a question answer briefly, but your goal \
    is to collect information for a human financial advisor to review at a later time. \
    Additionally the human has already answered questions previously. You can use the answers from \
    the question and answers provided. Do not ask questions from the question and answer portion. \
    Be friendly, try not to sound robotic, and let the conversation flow naturally. \
    After about six messages from the human, say goodbye and give a summary of the conversation.
    `;
  var aiMess =
    "Hello! I'm here to help you with your financial goals. May I know your name and age, please?";

  context = [new SystemMessage(context), new AIMessage(aiMess)];
  if (chatHistory.length == 0) {
    setChatHistory(context);
  }
  console.log(apiKey);

  return (
    <Chatbot
      context={context}
      chatHistory={chatHistory}
      setChatHistory={setChatHistory}
      apiKey={apiKey}
    />
  );
}

export default App;
