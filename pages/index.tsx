import styles from "@styles/pages/home.module.scss";

import type { NextPage, GetServerSideProps } from "next";
import { useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

import { BRAND_COLORS } from "@constants";
import { getGradients } from "@api";
import { useNavigation, usePath } from "@hooks";

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

  const { navigateTo } = useNavigation();

  const { setName } = usePath();

  useEffect(() => {
    setName("");
  }, [setName]);

  return (
    <div className={styles["home-page"]}>
      {/* @@@ TODO: Clean up this section out of commented out code */}
      <section className={styles["hero-section"]}>
        <header className={styles["hero-section__header"]}>
          <h1 className={styles["hero-section__heading"]}>
            <strong className={styles["hero-section__strong"]}>Kolor</strong>

            <strong className={styles["hero-section__strong--underlined"]}>
              {/* <TextUnderlined
                colors={[BRAND_COLORS.Y, BRAND_COLORS.M, BRAND_COLORS.C]}
                thickness={16}
                offset={0}
              > */}
              Kolor
              {/* </TextUnderlined> */}
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

        <div className={styles["hero-section__hero-image"]}>
          <Image
            src="/assets/svgs/gradient_wave_0_1.svg"
            alt="Gradient Wave"
            width="100%"
            height="100%"
            layout="fill"
            objectPosition="relative"
            objectFit="contain"
            priority
          />
        </div>

        {/* <div className={styles["hero-section__hero-image-wrapper"]}>
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
        </div> */}

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

        <TextUnderlined
          colors={[BRAND_COLORS.Y, BRAND_COLORS.M, BRAND_COLORS.C]}
          thickness={16}
        />
      </section>

      {/* @@@ TODO: Get rid of the wrapping jargon */}
      <div className={styles["tools-section"]} ref={callToActionRef}>
        <div className={styles["tools-section__heading"]}>
            {"//"} Tools:
        </div>

        <div className={styles["banner-actions"]}>
          <div
            className={styles["banner-actions__card"]}
            onClick={() => navigateTo("/gradients")}
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
            <CallToActionBanner color="cyan" desc="Work in Progress" wip>
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
