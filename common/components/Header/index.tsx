import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={clsx(styles['content-container'], styles['header__top'])}>
        <a className={styles['header__title']}>
          <svg
            className={styles['header__logo']}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
          </svg>

          <h1 className={styles['header__heading']}>Kolor</h1>
        </a>

        <button className={clsx(styles['header__burger'], styles['icon'])}>
          <svg
            className={styles['icon__svg']}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <span className={styles['icon__label']}>Open menu</span>
        </button>
        
        <nav className={clsx(styles['header__nav'], styles['header__nav--desktop'])}>
          <ul>
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
      </div>

        {/* <nav className={styles['header__nav']}>
          <div className={styles['content-container']}>
            <ul>
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
          </div>
        </nav> */}

    </header>
  )
}

export default Header;