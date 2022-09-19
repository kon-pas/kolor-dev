import styles from '@styles/pages/home.module.scss';

import type { NextPage } from "next";

import MAIN_COLORS from '@constants/main-colors';

import TextUnderlined from '@components/elements/TextUnderlined';
import TextGradiented from '@components/elements/TextGradiented';
import TextAnimated from '@components/elements/TextAnimated';
import GradientBackground from '@components/elements/GradientBackground';
import CallToActionBanner from '@components/pages/home/CallToActionBanner';

const Home: NextPage = () => {
  return (
    <div className={styles["home-page"]}>
      <header className={styles['header']}>
        <h1 className={styles['header__heading']}>
          <strong className={styles['header__text-underlined']}>
            <TextUnderlined
              colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
              thickness={12}
              offset={-5}
            >
              Kolor
            </TextUnderlined>
          </strong>

          <strong className={styles['header__text-underlined--desktop']}>
            <span className={styles['header__text-underlined--desktop__text']}>
              Kolor
            </span>

            <div className={styles['header__text-underlined--desktop__line']}>
              <GradientBackground colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}/>
            </div>
          </strong>

          <div className={styles['header__animated-text']}>
            <TextAnimated labels={['your work', 'with ease', 'for free']} />

            <span className={styles['header__dot']}>
              <TextGradiented
                colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
                to='top left'
              >
                .
              </TextGradiented>
            </span>
          </div>

        </h1>
      </header>



    </div>
  );
};

export default Home;
