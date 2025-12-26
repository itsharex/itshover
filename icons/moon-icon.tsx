import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MoonIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".moon",
      { rotate: [0, -15, 0], scale: [1, 1.1, 1] },
      { duration: 0.5, ease: "easeInOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(
      ".moon",
      { rotate: 0, scale: 1 },
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
        <motion.path
          className="moon"
          d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </motion.div>
  );
};

export default MoonIcon;
