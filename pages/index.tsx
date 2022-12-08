import styles from "@styles/pages/home.module.scss";

import type { NextPage, GetStaticProps } from "next";
import type { GradientsJSON } from "@interfaces";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

import { MAIN_COLORS } from "@constants";

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
                colors={[MAIN_COLORS.Y, MAIN_COLORS.M, MAIN_COLORS.C]}
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
                  colors={[MAIN_COLORS.C, MAIN_COLORS.M, MAIN_COLORS.Y]}
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
            width="1080px"
            height="1080px"
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
          ref={callToActionRef}
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
      <div className={styles["banner-actions"]}>
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res: Response = await fetch("http://localhost:3000/api/gradients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const gradients = (await res.json()) as GradientsJSON;

    return {
      props: {
        numGradients: Object.entries(gradients).length,
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
