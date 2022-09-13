import styles from './Banner.module.scss';

interface BannerProps {
  title?: string;
  desc?: string;
}

const Banner: React.FC<BannerProps> = ({title, desc}) => {
  return (
    <div className={styles.banner}>
      { title &&
        <h1>
          {title}
        </h1>
      }

      { desc &&
        <span>
          {desc}
        </span>
      }
    </div>
  )
}

export default Banner;