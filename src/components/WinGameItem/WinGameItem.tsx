import React from "react";
import { motion } from "framer-motion";

import styles from "./WinGameItem.module.scss";

interface WinGameItemProps {
  children: React.ReactNode;
}

const WinGameItem: React.FC<WinGameItemProps> = ({ children }) => {
  return (
    <div className={styles.winGameItem}>
      <motion.div
        className={styles.winEl}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { WinGameItem };
