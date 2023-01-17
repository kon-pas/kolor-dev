import styles from "./Header.module.scss";

import type { FC } from "react";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import { usePathName, useNavigation } from "@hooks";
import IconSVG from "@components/elements/IconSVG";
import NAV_ITEMS from "common/constants/nav-items";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const { navigateTo } = useNavigation();

  const handleNavigation = (path: string): void => {
    setIsOpened(false);
    navigateTo(path);
  };

  const { pathName } = usePathName();

  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <div className={styles["header__title"]}>
          <div
            className={styles["header__logo"]}
            onClick={() => handleNavigation("/")}
          >
            <Image
              // src="/assets/svgs/kolor_logo_cube_2_1.svg"
              src="/assets/svgs/kolor_dev_logo_0.svg"
              alt="Kolor Cube"
              height={64}
              width={64}
            />
          </div>

          {/* <h1 className={styles["header__heading"]}>KOLOR</h1> */}
          <span className={styles["header__subtitle"]}>
            &nbsp;{pathName !== "" ? ` / ${pathName}` : null}
          </span>
        </div>

        <button
          className={styles["header__burger"]}
          onClick={() => setIsOpened(isOpened => !isOpened)}
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
