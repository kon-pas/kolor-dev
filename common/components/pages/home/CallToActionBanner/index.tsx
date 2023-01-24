import styles from "./CallToActionBanner.module.scss";

import type { FC, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

interface CallToActionBannerProps {
  children: ReactNode;
  desc: string;
  svgSrc?: `${string}.svg`;
  wip?: boolean;
}

const CallToActionBanner: FC<CallToActionBannerProps> = ({
  desc,
  children: title,
  svgSrc,
  wip,
}) => {
  return (
    <article
      className={clsx(
        styles["call-to-action-banner"],
        !wip && styles["call-to-action-banner--active"]
      )}
    >
      {!wip ? (
        <div className={styles["call-to-action-banner__image"]}>
          <Image
            src={`/assets/svgs/${svgSrc ?? "gradient_circle_0.svg"}`}
            alt="Gradient Wave"
            width="100%"
            height="10%"
            layout="fill"
            objectPosition="absolute"
            objectFit="contain"
            priority
          />
        </div>
      ) : null}

      <header
        className={clsx(
          styles["call-to-action-banner__header"],
          styles[
            wip
              ? "call-to-action-banner__header--inactive"
              : "call-to-action-banner__header--active"
          ]
        )}
      >
        <h1 className={styles["call-to-action-banner__heading"]}>{title}</h1>
        <p className={styles["call-to-action-banner__desc"]}>{desc}</p>
      </header>
    </article>
  );
};

export default CallToActionBanner;
