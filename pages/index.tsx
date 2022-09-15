import styles from '@styles/pages/Home.module.scss';

import type { NextPage } from "next";

import MAIN_COLORS from '@constants/main-colors';

import TextUnderlined from '@components/elements/TextUnderlined';
import TextGradiented from '@components/elements/TextGradiented';
import TextAnimated from '@components/elements/TextAnimated';

const Home: NextPage = () => {
  return (
    <div className={styles["home-page"]}>
      <header className={styles['header']}>
        <h1 className={styles['header__heading']}>
          <strong className={styles['header__text-underlined']}>
            <TextUnderlined
              colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
              thickness={12}
              offset={-2}
            >
              Kolor
            </TextUnderlined>
          </strong>

          <span className={styles['header__space']}>&nbsp;</span>

          <span>
            <span>placeholder</span>

            <TextGradiented
              colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
              to='top left'
            >
              .
            </TextGradiented>
          </span>
          {/* <span>with ease</span>
          <span>for free</span> */}
        </h1>
      </header>

      <TextAnimated labels={['your work', 'with ease', 'for free']} />

      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Home;
