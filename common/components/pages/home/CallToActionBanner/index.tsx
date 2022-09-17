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
    <div>
      <header>
        <h1>
          30
        </h1>
        <h2>
          Palletes
        </h2>
      </header>
      <p>
        Carefully selected
      </p>
    </div>
  )
}