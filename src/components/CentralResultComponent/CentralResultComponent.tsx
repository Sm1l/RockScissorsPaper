import React from "react";
import { motion } from "framer-motion";

import styles from "./CentralResultComponent.module.scss";
import { useWinStatus, useGameItem, useCompGameItem } from "components/store";

interface CentralResultComponentProps {}

const CentralResultComponent: React.FC<CentralResultComponentProps> = () => {
  const setGameItem = useGameItem((state) => state.setGameItem);
  const clearCompGameItem = useCompGameItem((state) => state.clearCompGameItem);
  const winStatus = useWinStatus((state) => state.winStatus);
  const clearWinStatus = useWinStatus((state) => state.clearWinStatus);

  const handleClick = () => {
    setGameItem(null);
    clearCompGameItem();
    clearWinStatus();
  };

  return (
    <motion.div
      className={styles.centralResultComponent}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {winStatus === "draw" && <p className={styles.status}>draw</p>}
      {(winStatus === "win" || winStatus === "lose") && <p className={styles.status}>you {winStatus}</p>}
      <button
        className={styles.button}
        onClick={() => {
          handleClick();
        }}
      >
        play again
      </button>
    </motion.div>
  );
};

export { CentralResultComponent };
