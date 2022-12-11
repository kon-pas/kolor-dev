import styles from "./CallToActionBanner.module.scss";

import type { FC, ReactNode } from "react";
import clsx from "clsx";

interface CallToActionBannerProps {
  children: ReactNode;
  desc: string;
  color: "yellow" | "magenta" | "blue";
  wip?: boolean;
}

const CallToActionBanner: FC<CallToActionBannerProps> = ({
  desc,
  children: title,
  color,
  wip,
}) => {
  return (
    <article
      className={clsx(styles["call-to-action-banner"], !wip && styles[color])}
    >
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
