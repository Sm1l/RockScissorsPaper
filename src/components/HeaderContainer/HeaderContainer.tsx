import React from "react";
import { motion } from "framer-motion";

import styles from "./HeaderContainer.module.scss";
import imgLogo from "images/logo.svg";
import { useCounter } from "components/store";

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const counter = useCounter((state) => state.counter);

  return (
    <motion.section
      className={styles.headerContainer}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.logo}>
        <img className={styles.image} src={imgLogo} alt="logo" />
      </div>
      <div className={styles.scoreContainer}>
        <p className={styles.text}>score</p>
        <div className={styles.score}>{counter}</div>
      </div>
    </motion.section>
  );
};

export { HeaderContainer };
