"use client";

import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Optional: for styling

const LocalChatbot = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 300, height: 200 });
  const [resizing, setResizing] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

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

  // Drag & resize handlers remain unchanged...
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseDownResize = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setResizing(true);
  };

  const handleMouseMoveResize = (e: MouseEvent) => {
    if (resizing) {
      setSize({
        width: e.clientX - position.x,
        height: e.clientY - position.y,
      });
    }
  };

  const handleMouseUpResize = () => {
    setResizing(false);
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    if (resizing) {
      window.addEventListener("mousemove", handleMouseMoveResize);
      window.addEventListener("mouseup", handleMouseUpResize);
    } else {
      window.removeEventListener("mousemove", handleMouseMoveResize);
      window.removeEventListener("mouseup", handleMouseUpResize);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMoveResize);
      window.removeEventListener("mouseup", handleMouseUpResize);
    };
  }, [dragging, resizing]);

  return (
    <div
      className={styles.chatbotContainer}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        border: "3px solid black",
        cursor: "move",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Learn About Joshua</h2>
      <div className={styles.chatHistory} style={{ flex: 1, overflowY: "auto" }}>
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
        style={{ flexShrink: 0 }}
        disabled={requestCount >= 3}
      />
      <button
        className={styles.sendButton}
        onClick={handleSend}
        disabled={loading || requestCount >= 3}
        style={{ flexShrink: 0 }}
      >
        Send
      </button>
      <div
        onMouseDown={handleMouseDownResize}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "10px",
          height: "10px",
          cursor: "nwse-resize",
          backgroundColor: "gray",
        }}
      />
    </div>
  );
};

export default LocalChatbot;
