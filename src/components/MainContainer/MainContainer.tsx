import React, { useEffect } from "react";

import styles from "./MainContainer.module.scss";
import { Choose } from "components/Choose";
import { Picked } from "components/Picked";
import { useGameItem, useCompGameItem, useWinStatus, useCounter } from "components/store";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const increaseCounter = useCounter((state) => state.increaseCounter);
  const decreaseCounter = useCounter((state) => state.decreaseCounter);
  const gameItem = useGameItem((state) => state.gameItem);
  const compGameItem = useCompGameItem((state) => state.compGameItem);
  const setCompGameItem = useCompGameItem((state) => state.setCompGameItem);
  const winStatus = useWinStatus((state) => state.winStatus);
  const setWinStatus = useWinStatus((state) => state.setWinStatus);

  useEffect(() => {
    if (gameItem != null) {
      setCompGameItem();
    }
  }, [gameItem]);

  useEffect(() => {
    gameItem != null && compGameItem != null && setWinStatus(gameItem, compGameItem);
  }, [gameItem, compGameItem]);

  useEffect(() => {
    switch (winStatus) {
      case "win":
        increaseCounter();
        break;
      case "lose":
        decreaseCounter();
        break;
      case "draw":
        break;
    }
  }, [winStatus]);

  return <div className={styles.mainContainer}>{gameItem === null ? <Choose /> : <Picked />}</div>;
};

export { MainContainer };
