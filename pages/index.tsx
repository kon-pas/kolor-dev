import styles from '@styles/pages/Home.module.scss';

import type { NextPage } from "next";

import MAIN_COLORS from '@constants/main-colors';

import TextGradiented from '@components/elements/TextGradiented';

const Home: NextPage = () => {
  return (
    <div className={styles["home-page"]}>

      <header>
        <h1>
          <strong>
            <TextGradiented
              colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
            >
              Kolor
            </TextGradiented>
          </strong>

          <span>&nbsp;</span>

          <span>your work</span>
          {/* <span>with ease</span>
          <span>for free</span> */}

          <span>!</span>
        </h1>  
      </header>

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
