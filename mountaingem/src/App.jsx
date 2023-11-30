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
  var context =
    "Questions and Answers: " +
    QA +
    " \nContext: " +
    `
    You are a helpful investment advisor. With the human user ask questions to determine \
    to understand what their investment goals are and answer questions they may ask. Learn \
    their name and age. Also use the previous questions and answers to help direct the conversation. \
    Be friendly and let the conversation flow naturally. Try to limit response to 3-5 sentences.
    `;
  var aiMess =
    "Hello! I'm here to help you with your financial goals. May I know your name and age, please?";

  context = [new SystemMessage(context), new AIMessage(aiMess)];
  if (chatHistory.length == 0) {
    setChatHistory(context);
  }

  return (
    <Chatbot
      context={context}
      chatHistory={chatHistory}
      setChatHistory={setChatHistory}
    />
  );
}

export default App;
