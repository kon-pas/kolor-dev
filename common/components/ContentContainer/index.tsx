import styles from './ContentContainer.module.scss';
import clsx from 'clsx';

interface ContentContainerProps {
  children: React.ReactNode,
  className?: string
}

const ContentContainer = ({ children, className='' }: ContentContainerProps) => {
  return (
    <div className={clsx(styles['content-container'], className)}>
        {children}
    </div>
  )
}

export default ContentContainer;