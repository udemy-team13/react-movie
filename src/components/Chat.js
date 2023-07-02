import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Chat() {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleMessage = (message) => {
    console.log("dddddd");
    setMessages((prev) => [...prev, message]);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        userName,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  useEffect(() => {
    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  return (
    <div className="chat-wrapper">
      <h1>Movie Forum</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="사용자 이름을 입력하세요."
      />
      <h3>채팅</h3>
      <div className="chat-list">
        {messages.map((message, index) => {
          console.log(message);
          return (
            <p key={index}>
              {message.userName} : {message.content} - {message.time}
            </p>
          );
        })}
      </div>
      <div style={{ marginBottom: "10px" }}>Message</div>
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
}
