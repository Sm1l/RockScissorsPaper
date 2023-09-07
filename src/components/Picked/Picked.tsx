import React from "react";
import { motion, LayoutGroup } from "framer-motion";

import styles from "./Picked.module.scss";
import { useCompGameItem, useGameItem, useWinStatus } from "components/store";
import { GameItem } from "components/GameItem";
import { CentralResultComponent } from "components/CentralResultComponent";
import { WinGameItem } from "components/WinGameItem";

interface PickedProps {}

const Picked: React.FC<PickedProps> = () => {
  const choosenGameItem = useGameItem((state) => state.gameItem);
  const compGameItem = useCompGameItem((state) => state.compGameItem);
  const winStatus = useWinStatus((state) => state.winStatus);

  return (
    <motion.div
      className={styles.picked}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LayoutGroup>
        <motion.div layout className={`${styles.gameItemContainer} ${styles.leftContainer}`}>
          <p className={styles.text}>you picked</p>
          <WinGameItem condition={winStatus === "win"}>
            {choosenGameItem != null && <GameItem gameItem={choosenGameItem} size="Big" />}
          </WinGameItem>
        </motion.div>
        {winStatus != null && <CentralResultComponent />}
        <motion.div layout className={`${styles.gameItemContainer} ${styles.rightContainer}`}>
          <p className={styles.text}>the house picked</p>
          <WinGameItem condition={winStatus === "lose"}>
            {compGameItem != null ? (
              <GameItem gameItem={compGameItem} size="Big" />
            ) : (
              <div className={styles.empty}> </div>
            )}
          </WinGameItem>
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
};

export { Picked };
