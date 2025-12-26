import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const KeyframesIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(
      ".frame-1",
      { x: [0, -2, 0] },
      { duration: 0.4, ease: "easeInOut" },
    );
    animate(
      ".frame-2",
      { x: [0, 2, 0] },
      { duration: 0.4, ease: "easeInOut", delay: 0.1 },
    );
    animate(
      ".frame-3",
      { x: [0, 4, 0] },
      { duration: 0.4, ease: "easeInOut", delay: 0.2 },
    );
  };

  const hoverEndAnimation = () => {
    animate(".frame-1", { x: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(".frame-2", { x: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(".frame-3", { x: 0 }, { duration: 0.2, ease: "easeOut" });
  };

  return (
    <motion.div
      ref={scope}
      onHoverStart={hoverAnimation}
      onHoverEnd={hoverEndAnimation}
      className={`inline-flex cursor-pointer items-center justify-center ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        {/* Main keyframe shape */}
        <motion.path
          className="frame-1"
          d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z"
        />
        {/* Second frame */}
        <motion.path
          className="frame-2"
          d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"
        />
        {/* Third frame */}
        <motion.path
          className="frame-3"
          d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"
        />
      </svg>
    </motion.div>
  );
};

export default KeyframesIcon;
