import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetStaticProps } from "next";
import type { GradientScheme } from "@types";

import { prisma } from "@lib";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";

interface GradientsProps {
  gradients: GradientScheme[];
}

const Gradients: NextPage<GradientsProps> = ({ gradients }) => {
  return (
    <div className={styles["gradients-page"]}>
      <header className={styles["header"]}>
        <h1 className={styles["header__heading-1"]}>
          {Object.keys(gradients).length}
        </h1>

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

      <div className={styles["gradients-list"]}>
        {Object.entries(gradients).map(([id, gradient], index) => (
          <GradientCard key={index} gradient={gradient} gradientId={id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gradients = await prisma.gradient.findMany();

  return {
    props: {
      gradients: gradients ?? [],
    },
  };
};

export default Gradients;
