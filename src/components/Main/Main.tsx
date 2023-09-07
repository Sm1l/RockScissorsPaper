import React from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./Main.module.scss";
import { HeaderContainer } from "components/HeaderContainer";
import { MainContainer } from "components/MainContainer";
import { FooterContainer } from "components/FooterContainer";
import { Modal } from "components/Modal";
import { useModal, useCounter } from "components/store";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const modalIsVisible = useModal((state) => state.modalIsVisible);
  const totalCounter = useCounter((state) => state.totalCounter);

  //*totalCounter
  console.log("totalCounter:", totalCounter);

  return (
    <main className={styles.main}>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
      <AnimatePresence>{modalIsVisible && <Modal />}</AnimatePresence>
    </main>
  );
};

export { Main };
