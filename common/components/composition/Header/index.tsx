import styles from "./Header.module.scss";

import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

import { usePathName, useNavigation } from "@hooks";
import IconSVG from "@components/elements/IconSVG";
import NAV_ITEMS from "common/constants/nav-items";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { navigateTo } = useNavigation();
  const { pathName } = usePathName();

  const handleNavigation = (path: string): void => {
    setIsOpened(false);
    navigateTo(path);
  };

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpened]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) setIsOpened(false);
    };

    window.addEventListener("resize", handleResize);

    return () => void window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollPosition) {
        setIsVisible(false);
      } else setIsVisible(true);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => void window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <header
      className={clsx(
        styles["header"],
        !isVisible && styles["header--invisible"]
      )}
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className={styles["header__top"]}>
        <div className={styles["header__title"]}>
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
              <li
                className={clsx(
                  styles["nav__item"],
                  !path && styles["nav__item--inactive"]
                )}
                key={idx}
                onClick={() => path && navigateTo(path)}
              >
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={styles["header__logo"]}
        onClick={() => handleNavigation("/")}
      >
        <Image
          // src="/assets/svgs/kolor_logo_cube_2_1.svg"
          src="/assets/svgs/kolor_dev_logo_0.svg"
          alt="Kolor Dev Logo"
          layout="fill"
        />
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
              <li
                className={clsx(
                  styles["nav__item"],
                  !path && styles["nav__item--inactive"]
                )}
                key={idx}
                onClick={() => path && navigateTo(path)}
              >
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
