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
    <div className={styles['button']}>
      <div className={styles['button__content-container']}>
        { iconSide === 'left' && children }

        { label &&
          <span className={styles['button__label']}>

          </span>
        }

        { iconSide === 'right' && children }
      </div>
    </div>
  )
}

export default Button;