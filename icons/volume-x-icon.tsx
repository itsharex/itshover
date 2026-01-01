import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const VolumeXIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".speaker",
      {
        x: [-1, 1, -1, 0],
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".x-mark",
      {
        scale: [1, 1.15, 1],
      },
      {
        duration: 0.4,
        ease: "easeOut",
      },
    );
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={hoverAnimation}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <motion.path
        className="speaker"
        d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      />

      <motion.g className="x-mark" style={{ transformOrigin: "19px 12px" }}>
        <line x1="22" x2="16" y1="9" y2="15" />
        <line x1="16" x2="22" y1="9" y2="15" />
      </motion.g>
    </motion.svg>
  );
};

export default VolumeXIcon;
