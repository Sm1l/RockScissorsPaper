import React from "react";
import { motion } from "framer-motion";

import styles from "./FooterContainer.module.scss";
import { useModal } from "components/store";

interface FooterContainerProps {}

const FooterContainer: React.FC<FooterContainerProps> = () => {
  const modalOpenHandleClick = useModal((state) => state.openModal);

  return (
    <motion.div
      className={styles.footerContainer}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button className={styles.button} onClick={modalOpenHandleClick}>
        rules
      </button>
    </motion.div>
  );
};

export { FooterContainer };
