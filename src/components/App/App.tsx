import React from "react";
import styles from "./App.module.scss";
import { Main } from "components/Main";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};

export { App };
