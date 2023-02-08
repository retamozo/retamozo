import React, { FunctionComponent, PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  title?: string;
};

const AnitamedLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        duration: 0.4,
        type: "easeInOut",
      }}
      style={{
        position: "relative",
      }}
    >
      {children}
    </motion.main>
  );
};

export default AnitamedLayout;
