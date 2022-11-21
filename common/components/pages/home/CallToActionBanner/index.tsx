import styles from "./CallToActionBanner.module.scss";

import clsx from "clsx";

interface CallToActionBannerProps {
  children: React.ReactNode;
  desc: string;
  color?: string;
  wip?: boolean;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  desc,
  children: title,
  color,
  wip,
}) => {
  return (
    <article
      className={clsx(
        styles["call-to-action-banner"],
        styles[wip ? "inactive" : "active"]
      )}
    >
      <header className={styles["call-to-action-banner__header"]}>
        <h1 className={styles["call-to-action-banner__heading"]}>{title}</h1>
      </header>

      <p className={styles["call-to-action-banner__desc"]}>{desc}</p>
    </article>
  );
};

export default CallToActionBanner;
