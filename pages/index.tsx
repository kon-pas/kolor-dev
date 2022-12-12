import styles from "@styles/pages/home.module.scss";

import type { NextPage, GetServerSideProps } from "next";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

import { BRAND_COLORS } from "@constants";
import { getGradients } from "@api";

import TextUnderlined from "@components/elements/TextUnderlined";
import TextGradiented from "@components/elements/TextGradiented";
import IconSVG from "@components/elements/IconSVG";
import CallToActionBanner from "@components/pages/home/CallToActionBanner";
import AnimatedText from "@components/pages/home/AnimatedText";

interface HomeProps {
  numGradients: number | "Plenty of";
}

const Home: NextPage<HomeProps> = (props) => {
  const callToActionRef = useRef<HTMLInputElement>(null);
  const { push: navigate } = useRouter();

  return (
    <div className={styles["home-page"]}>
      <section className={styles["hero-section"]}>
        <header className={styles["hero-section__header"]}>
          <h1 className={styles["hero-section__heading"]}>
            <strong className={styles["hero-section__strong"]}>Kolor</strong>

            <strong className={styles["hero-section__strong--underlined"]}>
              <TextUnderlined
                colors={[BRAND_COLORS.Y, BRAND_COLORS.M, BRAND_COLORS.C]}
                thickness={16}
                offset={0}
              >
                Kolor
              </TextUnderlined>
            </strong>

            <span className={styles["hero-section__text-animated"]}>
              {/* @@@ NOTE: Temporarily using less scalable `AnimatedText` */}
              {/* <TextAnimated labels={["your work", "with ease", "for free"]} 
              /> */}
              <AnimatedText />

              <span className={styles["hero-section__dot"]}>
                <TextGradiented
                  colors={[BRAND_COLORS.C, BRAND_COLORS.M, BRAND_COLORS.Y]}
                  to="top left"
                >
                  .
                </TextGradiented>
              </span>
            </span>
          </h1>
        </header>

        <div className={styles["hero-section__hero-image-wrapper"]}>
          <Image
            src="/assets/images/hero_page_phone.jpg"
            alt="Phone mockup"
            width="100%"
            height="100%"
            sizes="(min-width: 400px) 83.3%,
              (min-width: 1000px) 100%,
              75%"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>

        <div
          className={styles["call-to-action"]}
          onClick={() =>
            callToActionRef.current!.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className={styles["call-to-action__label"]}>Explore</span>

          <div className={styles["call-to-action__icon"]}>
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
      {/* @@@ TODO: Why is this section empty? */}
      {/* <section className={styles["tools-section"]}>
        <h1 className={styles["tools-section__header"]}>Explore tools</h1>
      </section> */}

      {/* @@@ TODO: Get rid of the wrapping jargon */}
      <div className={styles["banner-actions"]} ref={callToActionRef}>
        <div
          className={styles["banner-actions__card"]}
          onClick={() => navigate("/gradients")}
        >
          <CallToActionBanner
            color="yellow"
            desc="Carefully selected for Artists, Designers & Developers"
          >
            {props.numGradients} Gradients
          </CallToActionBanner>
        </div>

        <div className={clsx(styles["banner-actions__card"])}>
          <CallToActionBanner color="magenta" desc="Work in Progress" wip>
            Gradient Generator
          </CallToActionBanner>
        </div>

        <div className={clsx(styles["banner-actions__card"])}>
          <CallToActionBanner color="blue" desc="Work in Progress" wip>
            Color Palettes
          </CallToActionBanner>
        </div>

        <div className={clsx(styles["banner-actions__card"])}>
          <CallToActionBanner color="yellow" desc="Work in Progress" wip>
            Palette Generator
          </CallToActionBanner>
        </div>

        <div className={clsx(styles["banner-actions__card"])}>
          <CallToActionBanner color="magenta" desc="Work in Progress" wip>
            Color Finder
          </CallToActionBanner>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const numGradients: number = (await getGradients()).length;

    return {
      props: {
        numGradients,
      },
    };
  } catch {
    return {
      props: {
        numGradients: "Plenty of",
      },
    };
  }
};

export default Home;
