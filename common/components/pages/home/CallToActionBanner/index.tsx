import styles from './CallToActionBanner.module.scss';

interface CallToActionBannerProps {
  title: string;
  subtitle: string;
  desc: string;
  color?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title,
  subtitle
}) => {
  return (
    <article className={styles['call-to-action-banner']}>
      <header className={styles['call-to-action-banner__header']}>
        <h1 className={styles['call-to-action-banner__heading-1']}>
          {title}
        </h1>
        <h2 className={styles['call-to-action-banner__heading-2']}>
          {subtitle}
        </h2>
      </header>
      <p className={styles['call-to-action-banner__paragraph']}>
        Carefully selected
      </p>
    </article>
  )
}

export default CallToActionBanner;