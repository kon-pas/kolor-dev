import styles from './Header.module.scss';
import clsx from 'clsx';

export default function Header() {
  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <a className={styles['header__title']}>
          {/* <img className={styles['header__logo']}/> */}

          <h1 className={styles['header__heading']}>Kolor</h1>
        </a>

        <button className={clsx(styles['header__menu'], styles['burger'])}>
          <svg
            className={styles['burger__svg']}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <span className={styles['burger__label']}>Open menu</span>
        </button>

        <ul className={clsx(styles['header__menu'], styles['header__menu--desktop'])}>
          <li className={styles['header__item']}>
            <a>Item 1</a>
          </li>

          <li className={styles['header__item']}>
            <a>Item 2</a>
          </li>

          <li className={styles['header__item']}>
            <a>Item 3</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}