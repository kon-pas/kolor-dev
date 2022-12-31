import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetStaticProps } from "next";
import type { GradientScheme } from "@types";

import { useEffect } from "react";
import { prisma } from "@lib";
import { usePath } from "@hooks";
import { MISC_TAGS, MAIN_COLORS } from "@constants";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
}

const Gradients: NextPage<GradientsProps> = ({ gradients }) => {
  const { setName } = usePath();

  useEffect(() => {
    setName("gradients");
  }, [setName]);

  

  return (
    <div className={styles["gradients-page"]}>
      <header className={styles["header"]}>
        <h1 className={styles["header__heading-1"]}>{gradients.length}</h1>

        <h2 className={styles["header__heading-2"]}>
          <TextUnderlined thickness={16} offset={2}>
            Gradients
          </TextUnderlined>
        </h2>

        <p className={styles["header__paragraph"]}>
          <span>Carefully selected for&nbsp;</span>

          <span>Artists</span>

          <span>,&nbsp;</span>

          <span>Designes</span>

          <span>&nbsp;&&nbsp;</span>

          <span>Developers</span>

          <span>.</span>
        </p>
      </header>

      <div className={styles["form"]}>
        <hr />

        <input
          className={styles["form__input"]}
          type="text"
          placeholder="Search by name"
        />

        <div className={styles["form__tags"]}>
          {Object.values(MAIN_COLORS).map((color, idx) => (
            <Tag type="color" color={color} key={idx}>
              {color}
            </Tag>
          ))}
        </div>

        <div className={styles["form__tags"]}>
          {Object.values(MISC_TAGS).map((label, idx) => (
            <Tag type="hash" key={idx}>
              {label}
            </Tag>
          ))}
        </div>
      </div>

      <div className={styles["gradients-list"]}>
        {gradients.map((gradient, index) => (
          <GradientCard key={index} gradient={gradient} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const gradients = await prisma.gradient.findMany();

    return {
      props: {
        gradients,
      },
    };
  } catch {
    return {
      props: {
        gradients: [],
      },
    };
  }
};

export default Gradients;
