import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Modal.module.scss";
import ImgRules from "images/image-rules.svg";
import { ReactComponent as CrossRound } from "images/cross-round.svg";
import { useModal } from "components/store";
import { modalVariants } from "./modalVariants";

interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const modalIsVisible = useModal((state) => state.modalIsVisible);
  const closeModalHandleClick = useModal((state) => state.closeModal);

  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsVisible]);

  return (
    <div className={styles.overlay} onClick={closeModalHandleClick}>
      <motion.div
        className={styles.container}
        onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        key="container"
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        variants={modalVariants}
      >
        <div className={styles.header}>
          <p className={styles.text}>rules</p>
          <button className={styles.close} onClick={closeModalHandleClick}>
            <CrossRound className={styles.svg} width="40px" height="40px" />
          </button>
        </div>
        <img src={ImgRules} alt="rules" />
      </motion.div>
    </div>
  );
};

export { Modal };
