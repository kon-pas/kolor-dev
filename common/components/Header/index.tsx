import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles['header']}>
      <h1>Kolor</h1>
      <div className={styles['header__burger-wrapper']}>
      </div>
    </header>
  )
}