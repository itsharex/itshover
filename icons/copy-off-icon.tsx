import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CopyOffIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    // Shake animation for the slash line
    animate(
      ".slash-line",
      { rotate: [0, -5, 5, 0] },
      { duration: 0.4, ease: "easeInOut" },
    );
    // Fade the copies
    animate(
      ".copy-elements",
      { opacity: [1, 0.5, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".slash-line", { rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(
      ".copy-elements",
      { opacity: 1 },
      { duration: 0.2, ease: "easeOut" },
    );
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
        <motion.g className="copy-elements">
          <path d="M19.414 19.415a2 2 0 0 1 -1.414 .585h-8a2 2 0 0 1 -2 -2v-8c0 -.554 .225 -1.055 .589 -1.417m3.411 -.583h6a2 2 0 0 1 2 2v6" />
          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-6m-3.418 .59c-.36 .36 -.582 .86 -.582 1.41v8a2 2 0 0 0 2 2h2" />
        </motion.g>
        <motion.path
          className="slash-line"
          d="M3 3l18 18"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </motion.div>
  );
};

export default CopyOffIcon;
