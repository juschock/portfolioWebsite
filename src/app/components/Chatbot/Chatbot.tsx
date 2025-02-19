"use client";

import React, { useState } from "react";
import styles from "./Chatbot.module.css";

const LocalChatbot = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false); // New state for collapse

  const starterQuestions = [
    "How much Linux experience does Joshua have?",
    "How long did Joshua serve in the U.S. Army?",
    "What are Joshua's primary DevOps skills?",
    "Which programming languages is Joshua most experienced with?",
    "Can you summarize Joshua's professional background?",
  ];

  const handleSend = async () => {
    if (!input.trim() || requestCount >= 3) return;
    setHistory((prev) => [...prev, `You: ${input}`]);
    setLoading(true);
    setRequestCount((prev) => prev + 1);

    try {
      const res = await fetch("/api/openai", {
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

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  const handleClearChat = () => {
    setHistory([]);
    setRequestCount(0);
  };

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="layoutContainer">
      <div
        className={styles.sidebarContainer}
        style={{
          position: "fixed",
          right: isCollapsed ? "-18vw" : "2vw", // Adjust position based on collapse state
          top: "10vh",
          width: "20vw",
          height: "80vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
          transition: "right 0.3s ease", // Smooth transition
        }}
      >
        <button
          className={styles.collapseButton}
          onClick={toggleCollapse}
          style={{
            position: "absolute",
            left: "-2vw",
            top: "0",
            zIndex: 1001,
          }}
        >
          {isCollapsed ? "Chat" : "Collapse"}
        </button>

        {!isCollapsed && (
          <>
            <h2 className={styles.sidebarTitle}>Learn About Joshua</h2>

            <div className={styles.starterQuestions}>
              {starterQuestions.map((q, idx) => (
                <button
                  key={idx}
                  className={styles.questionButton}
                  onClick={() => handleQuestionClick(q)}
                  disabled={loading || requestCount >= 3}
                >
                  {q}
                </button>
              ))}
            </div>

            <div className={styles.sidebarHistory}>
              {history.map((msg, idx) => {
                let lineClass = styles.messageLine;
                if (msg.startsWith("You:")) {
                  lineClass += " " + styles.userLine;
                } else if (msg.startsWith("Bot:")) {
                  lineClass += " " + styles.botLine;
                }
                return (
                  <p key={idx} className={lineClass}>
                    {msg}
                  </p>
                );
              })}
              {loading && <p className={styles.messageLine}>Loading...</p>}
            </div>

            <textarea
              className={styles.sidebarInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading || requestCount >= 3}
            />

            <button
              className={styles.sidebarSendButton}
              onClick={handleSend}
              disabled={loading || requestCount >= 3}
            >
              Send
            </button>

            <button
              className={styles.clearButton}
              onClick={handleClearChat}
              disabled={loading}
            >
              Clear Chat
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LocalChatbot;
