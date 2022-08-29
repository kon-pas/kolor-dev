import styles from './IconSVG.module.scss';

interface IconSVGProps {
  children: React.ReactNode,
  title?: string,
  desc?: string
}

const IconSVG = ({children: path, title, desc }: IconSVGProps) => {
  return (
    <svg
      className={styles['icon-svg']}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      role="img"
      aria-hidden={title ? false : true}
      aria-labelledby={`${title ? 'titleID' : null} ${desc ? 'descID' : null}`}
    >
      {title && <title id="titleID">{title}</title>}
      {desc && <desc id="descID">{desc}</desc>}
      {path}
    </svg>

    // <span className={styles['icon__label']}>Open menu</span>

    // <div className={clsx(styles['icon'], className)}>
    //   {children}
    // </div>
  )
}

export default IconSVG;