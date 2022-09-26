import styles from '@styles/pages/home.module.scss';

import Image from "next/image";
import type { NextPage } from "next";

import { MAIN_COLORS } from '@constants';

import TextUnderlined from '@components/elements/TextUnderlined';
import TextGradiented from '@components/elements/TextGradiented';
import TextAnimated from '@components/elements/TextAnimated';
import GradientBackground from '@components/elements/GradientBackground';
import IconSVG from '@components/elements/IconSVG';
import CallToActionBanner from '@components/pages/home/CallToActionBanner';

const Home: NextPage = () => {
  return (
    <div className={styles['home-page']}>
      <section className={styles['hero-section']}>
        <header className={styles['hero-section__header']}>
          <h1 className={styles['hero-section__heading']}>
            <strong className={styles['hero-section__strong']}>
              Kolor
            </strong>

            <strong className={styles['hero-section__strong--underlined']}>
              <TextUnderlined
                colors={[MAIN_COLORS.Y, MAIN_COLORS.M, MAIN_COLORS.C]}
                thickness={16}
                offset={0}
              >
                Kolor
              </TextUnderlined>
            </strong>

            <span className={styles['hero-section__text-animated']}>
              <TextAnimated labels={['your work', 'with ease', 'for free']} />
              
              <span className={styles['hero-section__dot']}>
                <TextGradiented
                  colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
                  to='top left'
                >
                  .
                </TextGradiented>
              </span>
            </span>

          </h1>
        </header>

        <div className={styles['hero-section__hero-image-wrapper']}>
          <Image
            src='/assets/images/hero_page_phone.jpg'
            alt='Phone mockup'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
          />
        </div>

        <div className={styles['call-to-action']}>
          <span className={styles['call-to-action__label']}>
            Explore
          </span>

          <div className={styles['call-to-action__icon']}>
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </IconSVG>
          </div>
        </div>

      </section>

      <section className={styles['tools-section']}>
        <header className={styles['tools-section__header']}>
          <h1>
            Explore tools
          </h1>
        </header>
      


      </section>




      <div className={styles['banner-actions']}>
        <div className={styles['banner-actions__card']}>
          <CallToActionBanner desc='Carefully selected for Artists, Designers & Developers'>
            <b>25</b> Gradients
          </CallToActionBanner>
        </div>

        <div className={styles['banner-actions__card']}>
          <CallToActionBanner desc='Work in Progress'>
            Gradient Generator
          </CallToActionBanner>
        </div>

        <div className={styles['banner-actions__card']}>
          <CallToActionBanner desc='Work in Progress'>
            Color Palettes
          </CallToActionBanner>
        </div>

        <div className={styles['banner-actions__card']}>
          <CallToActionBanner desc='Work in Progress'>
            Palette Generator
          </CallToActionBanner>
        </div>

        <div className={styles['banner-actions__card']}>
          <CallToActionBanner desc='Work in Progress'>
            Color Finder
          </CallToActionBanner>
        </div>
      </div>

    </div>
  );
};

export default Home;
