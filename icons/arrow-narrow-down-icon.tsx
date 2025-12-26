import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowNarrowDownIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".arrow-group",
      { y: [0, 4, 0] },
      { duration: 0.5, ease: "easeInOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".arrow-group", { y: 0 }, { duration: 0.2, ease: "easeOut" });
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
          <path d="M12 5l0 14" />
          <path d="M16 15l-4 4" />
          <path d="M8 15l4 4" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default ArrowNarrowDownIcon;
