import styles from '@styles/pages/Home.module.scss';

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles["home-page"]}>
      <div>
        <header>
          <h1>
            25
          </h1>
          <h2>
            Gradients
          </h2>
          <p>
            Carefully selected
          </p>
        </header>
      </div>
    </div>
  );
};

export default Home;
