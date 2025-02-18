"use client";

import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Optional: for styling

const LocalChatbot = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    // Add user input to chat history
    setHistory((prev) => [...prev, `You: ${input}`]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (data.text) {
        setHistory((prev) => [...prev, `Bot: ${data.text}`]);
      } else {
        setHistory((prev) => [...prev, "Bot: (No response)"]);
      }
    } catch (err) {
      console.error("Error generating text:", err);
      setHistory((prev) => [...prev, "Bot: Error generating response"]);
    }
    setLoading(false);
    setInput("");
  };

  return (
    <div className={styles.chatbotContainer}>
      <h2>Local Chatbot</h2>
      <div className={styles.chatHistory}>
        {history.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <textarea
        className={styles.chatInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button className={styles.sendButton} onClick={handleSend} disabled={loading}>
        Send
      </button>
    </div>
  );
};

export default LocalChatbot;
