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
      { label &&
        <span className={styles['button__label']}>

        </span>
      }
    </button>
  )
}

export default Button;