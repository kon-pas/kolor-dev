import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <a className={[styles['header__title'], styles['title']].join(' ')}>
          {/* <img className={styles['title__image']}/> */}

          <span className={styles['title__label']}>Kolor</span>
        </a>

        <button className={[styles['header__menu'], styles['burger']].join(' ')}>
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

        <ul className={[styles['header__menu'], styles['header__menu--desktop'], styles['menu']].join(' ')}>
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

      {/* <h1>Kolor</h1>
      <div className={styles['header__burger-wrapper']}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div> */}
    </header>
  )
}