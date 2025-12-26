import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AlignCenterIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    // Stagger animation for each line
    animate(
      ".line-1",
      { scaleX: [1, 0.8, 1] },
      { duration: 0.3, ease: "easeInOut" },
    );
    animate(
      ".line-2",
      { scaleX: [1, 1.2, 1] },
      { duration: 0.3, ease: "easeInOut", delay: 0.1 },
    );
    animate(
      ".line-3",
      { scaleX: [1, 0.9, 1] },
      { duration: 0.3, ease: "easeInOut", delay: 0.2 },
    );
  };

  const hoverEndAnimation = () => {
    animate(".line-1", { scaleX: 1 }, { duration: 0.2, ease: "easeOut" });
    animate(".line-2", { scaleX: 1 }, { duration: 0.2, ease: "easeOut" });
    animate(".line-3", { scaleX: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.path
          className="line-1"
          d="M4 6l16 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-2"
          d="M8 12l8 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-3"
          d="M6 18l12 0"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </motion.div>
  );
};

export default AlignCenterIcon;
