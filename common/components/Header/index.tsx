import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles['header']}>
      <nav>
        <a>
          {/* <img /> */}
          <span></span>
        </a>
        <button>
          <svg></svg>
          <span></span>
        </button>
        <ul>
          <li>
            <a></a>
          </li>
          <li>
            <a></a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>



      </nav>








      <h1>Kolor</h1>
      <div className={styles['header__burger-wrapper']}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </header>
  )
}