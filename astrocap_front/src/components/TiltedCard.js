// src/components/TiltedCard.js
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./learnmorebutton.css";
import image from "../assets/Player456.jpg";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc = image,
  altText = "Tilted card image",
  containerHeight = "210px",
  containerWidth = "25%",
  imageHeight = "210px",
  imageWidth = "90%",
  scaleOnHover = 1.1,
  rotateAmplitude = 8,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  dampeningFactor = 1,
  speedFactor = 0.4,
  borderRadius = "15px",
  navigateTo,
  titleCard = "",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 250,
    damping: 20,
    mass: 1,
  });
  const [lastY, setLastY] = useState(0);
  const navigate = useNavigate();

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * dampeningFactor;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * dampeningFactor;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  const handleClick = () => {
    if (/^https?:\/\//.test(navigateTo)) {
      window.open(navigateTo, "_blank");
    } else {
      navigate(navigateTo);
    }
  };

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-between overflow-visible rounded-[15px] shadow-md glow-hover"
      style={{ height: "auto", width: containerWidth, borderRadius }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card with tilt + image */}
      <motion.div
        className="relative [transform-style:preserve-3d] rounded-[15px] overflow-hidden glow-hover group"
        onClick={handleClick}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          borderRadius,
          cursor: "pointer",
        }}
      >
        <motion.img
          id="tilted-image"
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform"
          style={{ width: imageWidth, height: imageHeight, borderRadius }}
        />
      </motion.div>

      {/* Always-visible title below the card */}
      <div className="mt-2 w-full flex">
        <h4
            className="font-semibold text-base sm:text-lg tracking-wide"
            style={{
            backgroundImage:
                "linear-gradient(135deg, rgb(163, 164, 240), rgb(148, 208, 250))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            }}
        >
            {titleCard}
        </h4>
        </div>
        <br/>

      {/* Optional overlay content */}
      {displayOverlayContent && overlayContent && (
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray bg-opacity-80 rounded-lg p-4 text-center"
          style={{ width: imageWidth }}
        >
          <p className="text-lg text-gray-800 font-medium mb-2">
            {overlayContent}
          </p>
        </motion.div>
      )}
    </figure>
    
  );
}
