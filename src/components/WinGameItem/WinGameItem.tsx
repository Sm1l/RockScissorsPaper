import React from "react";
import { motion } from "framer-motion";

import styles from "./WinGameItem.module.scss";

interface WinGameItemProps {
  children: React.ReactNode;
  condition: boolean;
}

const WinGameItem: React.FC<WinGameItemProps> = ({ children, condition }) => {
  return (
    <div className={styles.winGameItem}>
      <motion.div
        className={styles.winEl}
        initial={condition && { scale: 1 }}
        animate={condition && { scale: 1.1 }}
        transition={condition ? { repeat: Infinity, repeatType: "reverse", duration: 1 } : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { WinGameItem };
