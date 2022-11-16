import styles from "./GradientCard.module.scss";

import { useRouter, NextRouter } from "next/router";

import IconSVG from "@components/elements/IconSVG";
import Gradient from "@components/elements/GradientBackground";
import Color from "@components/elements/ColorBackground";
import SpanMonochrome from "@components/elements/SpanMonochrome";
import Button from "@components/elements/Button";

import { getCleanHex } from "@utils";

import type { GradientScheme } from "@interfaces";
import type { GradientId } from "@types";

interface GradientCardProps {
  gradient: GradientScheme;
  gradientId: GradientId;
}

const GradientCard: React.FC<GradientCardProps> = ({
  gradient,
  gradientId,
}) => {
  const router: NextRouter = useRouter();

  return (
    <div
      onClick={() => router.push(`/gradient/${gradientId}`)}
      className={styles["card"]}
    >
      <div className={styles["card__colors"]}>
        {gradient.colors.map((color, idx) => (
          <div className={styles["card__color"]} key={idx}>
            <Color hex={color}>
              <SpanMonochrome color={color}>
                {getCleanHex(color)}
              </SpanMonochrome>
            </Color>
          </div>
        ))}
      </div>

      <div className={styles["card__gradient"]}>
        <Gradient colors={gradient.colors} />
      </div>

      <div className={styles["card__desc"]}>
        <Button label="Save">
          <IconSVG title="Like gradient" strokeWidth={1}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </IconSVG>
        </Button>

        {/* <button className={styles['card__like-button']}>
          <span>
            Save
          </span>
        </button> */}

        <Button label={gradient.title} />
      </div>
    </div>
  );
};

export default GradientCard;
