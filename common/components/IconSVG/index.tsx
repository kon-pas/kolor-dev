import styles from './IconSVG.module.scss';
import clsx from 'clsx';

interface IconSVGProps {
  children: React.ReactNode,
  className?: string
}

const IconSVG = ({ children, className='' }: IconSVGProps) => {
  return (
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

          // <span className={styles['icon__label']}>Open menu</span>



    // <div className={clsx(styles['icon'], className)}>
    //   {children}
    // </div>
  )
}

export default IconSVG;