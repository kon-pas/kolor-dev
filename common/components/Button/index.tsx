import styles from './Button.module.scss';

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  iconSide?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  iconSide = 'left'
}) => {
  return(
    <button className={styles['button']}>
      { iconSide === 'left' && children }

      { label &&
        <span className={styles['button__label']}>

        </span>
      }

      { iconSide === 'right' && children }
    </button>
  )
}

export default Button;