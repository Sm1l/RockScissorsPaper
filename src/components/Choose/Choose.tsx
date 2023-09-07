import React from "react";

import styles from "./Choose.module.scss";
import { motion } from "framer-motion";

import { GameItem } from "components/GameItem";

import { useGameItem } from "components/store";

interface ChooseProps {}

const Choose: React.FC<ChooseProps> = () => {
  const setGameItem = useGameItem((state) => state.setGameItem);

  return (
    <motion.div
      className={styles.choose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.gameItemContainer}>
        <GameItem gameItem="paper" size="Small" handleClick={setGameItem} />
        <GameItem gameItem="scissors" size="Small" handleClick={setGameItem} />
      </div>
      <div className={styles.gameItemContainer}>
        <GameItem gameItem="rock" size="Small" handleClick={setGameItem} />
      </div>
    </motion.div>
  );
};

export { Choose };
