import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  children?: React.ReactNode;
  iconSide?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  children,
  iconSide = 'left'
}) => {
  return(
    <button
      className={styles['button']}
      onClick={onClick}
    >
      { iconSide === 'left' &&
        <span className={styles['button__icon']}>
          {children}
        </span>
      }

      { label &&
        <span className={styles['button__label']}>
          {label}
        </span>
      }

      { iconSide === 'right' &&
        <span className={styles['button__icon']}>
          {children}
        </span>
      }
    </button>
  )
}

export default Button;