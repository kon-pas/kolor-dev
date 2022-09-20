import styles from './CallToActionBanner.module.scss';

interface CallToActionBannerProps {
  children: React.ReactNode;
  desc: string;
  color?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  desc,
  children: title
}) => {
  return (
    <article className={styles['call-to-action-banner']}>
      <header className={styles['call-to-action-banner__header']}>
        <h1 className={styles['call-to-action-banner__heading']}>
          {title}
        </h1>
      </header>
      
      <p className={styles['call-to-action-banner__desc']}>
        {desc}
      </p>
    </article>
  )
}

export default CallToActionBanner;