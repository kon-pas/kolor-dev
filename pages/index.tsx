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
        </header>
        <p>
          Carefully selected
        </p>
      </div>

      <div>
        <header>
          <h1>
            30
          </h1>
          <h2>
            Palletes
          </h2>
        </header>
        <p>
          Carefully selected
        </p>
      </div>

      <div>
        <header>
          <h1>
            35
          </h1>
          <h2>
            Colors
          </h2>
        </header>
        <p>
          Carefully selected
        </p>
      </div>
    </div>
  );
};

export default Home;
