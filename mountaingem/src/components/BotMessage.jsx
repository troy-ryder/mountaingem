import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage, setBotMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  function setAll(msg) {
    setMessage(msg);
    setBotMessage(msg);
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
