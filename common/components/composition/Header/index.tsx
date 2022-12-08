import styles from "./Header.module.scss";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

import IconSVG from "@components/elements/IconSVG";
import NAV_ITEMS from "common/constants/nav-items";

const Header: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { push } = useRouter();

  const navigateTo = (path: string): void => {
    setIsOpened(false);
    push(path);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <div
          onClick={() => navigateTo("/")}
          className={styles["header__title"]}
        >
          <div className={styles["header__logo"]}>
            <Image
              src="/assets/svgs/kolor_logo_cube_2_1.svg"
              alt="Kolor Cube"
              height={40}
              width={40}
            />
          </div>

          <h1 className={styles["header__heading"]}>Kolor</h1>
          {/* <span className={styles['header__subtitle']}>/gradients</span> */}
        </div>

        <button
          className={styles["header__burger"]}
          onClick={() => setIsOpened((isOpened) => !isOpened)}
        >
          <IconSVG title="Open main navigation">
            {isOpened ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </IconSVG>
        </button>

        <nav className={clsx(styles["nav"], styles["nav--desktop"])}>
          <ul>
            {NAV_ITEMS.map(({ label, path }, idx) => (
              <li className={styles["nav__item"]} key={idx}>
                {path ? (
                  <span onClick={() => navigateTo(path)}>{label}</span>
                ) : (
                  <span className={styles["nav__item--inactive"]}>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={clsx(
          styles["header__bottom"],
          !isOpened && styles["header__bottom--closed"]
        )}
      >
        <nav className={styles["header__nav"]}>
          <ul>
            {NAV_ITEMS.map(({ label, path }, idx) => (
              <li className={styles["nav__item"]} key={idx}>
                {path ? (
                  <span onClick={() => navigateTo(path)}>{label}</span>
                ) : (
                  <span className={styles["nav__item--inactive"]}>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
