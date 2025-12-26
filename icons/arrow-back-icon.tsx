import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowBackIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".arrow-group",
      { x: [0, -3, 0] },
      { duration: 0.4, ease: "easeInOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".arrow-group", { x: 0 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g className="arrow-group">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default ArrowBackIcon;
