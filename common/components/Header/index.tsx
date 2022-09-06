import styles from './Header.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import IconSVG from '@components/IconSVG';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__top']}>
        <a className={styles['header__title']}>
          <div className={styles['header__logo']}>
            <Image 
              src="/assets/svgs/kolor_logo_cube.svg"
              alt="Kolor Cube"
              height={40}
              width={40}
            />
          </div>

          <h1 className={styles['header__heading']}>
            Kolor
          </h1>
          {/* <span className={styles['header__subtitle']}>/gradients</span> */}
        </a>

        <button className={styles['header__burger']}>
          <IconSVG title="Open menu">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
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

      {/* <div className={styles['header__bottom']}>
        <nav className={styles['header__nav']}>
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
      </div> */}
    </header>
  )
}

export default Header;