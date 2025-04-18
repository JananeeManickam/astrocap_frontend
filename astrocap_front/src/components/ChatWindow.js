import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";

export default function ChatWindow({ onClose, position }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi there 👋\nWelcome to Astrocap!\nHow can I help you today?",
    },
  ]);
  const [file, setFile] = useState(null);
  const messageEndRef = useRef(null);

  const chatStyle = {
    position: "fixed",
    bottom: position.y + 70,
    right: position.x,
    zIndex: 9990,
    width: "320px",
    height: "500px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(66, 153, 225, 0.7)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#111827",
    border: "1px solid #2d3748",
  };

  const handleSendMessage = async () => {
    if (!message.trim() && !file) return;

    const newMessages = [];
    if (message.trim()) {
      newMessages.push({ type: "user", content: message });
    }

    if (file) {
      newMessages.push({
        type: "user",
        content: URL.createObjectURL(file),
        fileType: file.type,
      });
    }

    setMessages((prev) => [...prev, ...newMessages]);

    try {
      const formData = new FormData();
      formData.append("message", message);
      if (file) {
        formData.append("image", file);
      }

      const response = await fetch("http://localhost:8000/api/chatbot/chat/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const botMessage = {
        type: "bot",
        content: data.message || "Sorry, I couldn't understand that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "There was an error processing your request.",
        },
      ]);
    }

    setMessage("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickResponses = [
    "What can this assistant do?",
    "Tell me about astronomy features",
    "How do I track celestial events?",
    "Tell me about Astrocap",
  ];

  return (
    <div style={chatStyle}>
      {/* Header */}
      <div
        className="p-3 border-b flex items-center justify-between"
        style={{ backgroundColor: "#111827" }}
      >
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">🚀</span>
          <span className="font-medium text-white">Astrocap AI</span>
          <button style={{"marginLeft":"170px"}}
          onClick={onClose} 
          className="text-white hover:text-gray-300 font-bold"
        >
          X
        </button>
        </div>
        
      </div>

      {/* Message area */}
      <div
        className="flex-1 p-4 overflow-y-auto"
        style={{ backgroundColor: "black" }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 max-w-xs ${
              msg.type === "user" ? "ml-auto" : "mr-auto"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                msg.type === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-800 text-white rounded-bl-none"
              }`}
              style={{
                whiteSpace: "pre-line",
                boxShadow:
                  msg.type === "user"
                    ? "0 2px 5px rgba(66, 153, 225, 0.3)"
                    : "0 2px 5px rgba(45, 55, 72, 0.3)",
              }}
            >
              {msg.fileType?.startsWith("image/") ? (
                <img
                  src={msg.content}
                  alt="attachment"
                  className="rounded"
                  style={{ maxWidth: "100%" }}
                />
              ) : msg.fileType?.startsWith("video/") ? (
                <video
                  controls
                  src={msg.content}
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {messages.length === 1 && (
          <div className="mt-4">
            {quickResponses.map((text, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMessage(text);
                  handleSendMessage();
                }}
                className="block mb-2 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 text-left text-sm w-full"
              >
                {text}
              </button>
            ))}
          </div>
        )}

        <div ref={messageEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 bg-gray-900 border-t border-gray-700 flex items-center gap-2">
        <label className="cursor-pointer">
          <FaPaperclip className="text-white" />
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*,video/*"
            style={{ display: "none" }}
          />
        </label>
        <input
          type="text"
          placeholder="Write your message..."
          className="flex-1 bg-gray-800 text-black border border-gray-700 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
