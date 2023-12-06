import React, { useState, useEffect } from "react";
import { AIMessage, HumanMessage, SystemMessage } from "langchain/schema";

export default function BotMessage({
  fetchMessage,
  setBotMessage,
  chatHistory,
  setChatHistory,
  humanMessage,
}) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  function setAll(msg) {
    setMessage(msg);
    setBotMessage(msg);
    setChatHistory([
      ...chatHistory,
      new HumanMessage(humanMessage),
      new AIMessage(msg),
    ]);
  }
  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setAll(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">{isLoading ? "..." : message}</div>
    </div>
  );
}
