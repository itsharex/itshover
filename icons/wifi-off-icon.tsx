import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const WifiOffIcon = ({
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
      { pathLength: [0, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );
    // Fade waves
    animate(
      ".wifi-waves",
      { opacity: [1, 0.5, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".slash-line", { rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(".wifi-waves", { opacity: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g className="wifi-waves">
          {/* Dot */}
          <path d="M12 18l.01 0" />
          {/* Inner wave */}
          <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
          {/* Middle wave */}
          <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
          {/* Outer wave */}
          <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
        </motion.g>
        {/* Slash line */}
        <motion.path
          className="slash-line"
          d="M3 3l18 18"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </motion.div>
  );
};

export default WifiOffIcon;
