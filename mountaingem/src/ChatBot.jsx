/*https://codesandbox.io/p/sandbox/chatbot-ui-m2ui4?file=%2Fsrc%2Findex.js%3A17%2C20 */

import React, { useState, useEffect } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";

import API from "./ChatbotAPI";

import "./styles.css";
import Header from "./components/Header";
import { AIMessage, HumanMessage, SystemMessage } from "langchain/schema";

function Chatbot({ context, chatHistory, setChatHistory, apiKey }) {
  const [messages, setMessages] = useState([]);
  const [botMessage, setBotMessage] = useState("");

  function setAll(message, text) {
    setMessages(message);

    setChatHistory([
      ...chatHistory,
      new HumanMessage(text),
      new AIMessage(botMessage),
    ]);
  }

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () =>
            await API.GetChatbotResponse("", chatHistory, apiKey)
          }
          setBotMessage={setBotMessage}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);
  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () =>
          await API.GetChatbotResponse(text, chatHistory, apiKey)
        }
        setBotMessage={setBotMessage}
      />
    );
    setAll(newMessages, text);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

export default Chatbot;
