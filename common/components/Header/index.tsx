import styles from './Header.module.scss';
import clsx from 'clsx';

export default function Header() {
  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <h1 className={clsx(styles['header__title'], styles['title'])}>
          {/* <img className={styles['title__image']}/> */}

          <span className={styles['title__label']}>Kolor</span>
        </h1>

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

        <ul className={clsx(styles['header__menu'], styles['header__menu--desktop'], styles['menu'])}>
          <li className={styles['menu__item']}>
            <a>Item 1</a>
          </li>

          <li className={styles['menu__item']}>
            <a>Item 2</a>
          </li>

          <li className={styles['menu__item']}>
            <a>Item 3</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}