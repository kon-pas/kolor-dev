import styles from "./Header.module.scss";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import IconSVG from "@components/elements/IconSVG";
import NAV_ITEMS from "common/constants/nav-items";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <Link href="/" passHref>
          <a className={styles["header__title"]}>
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
          </a>
        </Link>

        <button className={styles["header__burger"]}>
          <IconSVG title="Open menu">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
        </button>

        <nav className={clsx(styles["nav"], styles["nav--desktop"])}>
          <ul>
            {NAV_ITEMS.map(({ label, path }, idx) => (
              <li className={styles["nav__item"]} key={idx}>
                {path ? <Link href={path}>{label}</Link> : <span>{label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles["header__bottom"]}>
        <nav className={styles["header__nav"]}>
          <ul>
            {NAV_ITEMS.map(({ label, path }, idx) => (
              <li className={styles["nav__item"]} key={idx}>
                {path ? <Link href={path}>{label}</Link> : <span>{label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
