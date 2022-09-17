import styles from './CallToActionBanner.module.scss';

interface CallToActionBannerProps {
  title: string;
  subtitle: string;
  color?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className={styles['call-to-action-banner']}>
      <header className={styles['call-to-action-banner__header']}>
        <h1 className={styles['call-to-action-banner__heading-1']}>
          30
        </h1>
        <h2 className={styles['call-to-action-banner__heading-2']}>
          Palletes
        </h2>
      </header>
      <p className={styles['call-to-action-banner__paragraph']}>
        Carefully selected
      </p>
    </div>
  )
}