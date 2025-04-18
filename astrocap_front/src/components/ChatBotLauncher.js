import React, { useState, useRef, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import { FaCommentDots } from "react-icons/fa";

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);
  const windowSize = useRef({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      windowSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    ref.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const deltaX = ref.current.startX - e.clientX;
    const deltaY = ref.current.startY - e.clientY;

    const newX = Math.max(0, ref.current.startPosX + deltaX);
    const newY = Math.max(0, ref.current.startPosY + deltaY);

    const maxX = windowSize.current.width - 70;
    const maxY = windowSize.current.height - 70;

    setPosition({
      x: Math.min(newX, maxX),
      y: Math.min(newY, maxY),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: "fixed",
          bottom: position.y,
          right: position.x,
          zIndex: 9999,
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "none",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center transition-all"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgb(70, 146, 254)",
            boxShadow: "0 0 15px rgba(148, 208, 250, 0.6)",
            color: "white",
            border: "none",
            outline: "none",
            padding: 0,
          }}
        >
          <FaCommentDots style={{ fontSize: "20px" }} />
        </button>
      </div>

      {open && <ChatWindow onClose={() => setOpen(!open)} position={position} />}
    </>
  );
}
