import React from "react";
import { motion } from "framer-motion";

import styles from "./GameItem.module.scss";
import imgRock from "../../images/icon-rock.svg";
import imgScissors from "../../images/icon-scissors.svg";
import imgPaper from "../../images/icon-paper.svg";
import { GameItemType } from "types/GameItem";
import { useCounter } from "components/store";

interface GameItemProps {
  gameItem: GameItemType;
  size: "Small" | "Big";
  handleClick?: (item: GameItemType) => void;
}

const GameItem: React.FC<GameItemProps> = ({ gameItem, size, handleClick }) => {
  const increaseTotalCounter = useCounter((state) => state.increaseTotalCounter);
  const imageType = () => {
    switch (gameItem) {
      case "rock":
        return imgRock;
      case "scissors":
        return imgScissors;
      case "paper":
        return imgPaper;
      default:
        return imgRock;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      // whileHover={{ scale: 1.05 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.gameItem} ${styles[gameItem]} ${styles["gameItem" + `${size}`]}`}
      onClick={() => {
        if (handleClick) {
          handleClick(gameItem);
          increaseTotalCounter();
        }
      }}
    >
      <div className={`${styles.container} ${styles["container" + `${size}`]}`}>
        <img className={`${styles.image} ${styles["image" + `${size}`]}`} src={imageType()} alt="game item"></img>
      </div>
    </motion.div>
  );
};

export { GameItem };
