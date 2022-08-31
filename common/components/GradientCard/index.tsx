import styles from './GradientCard.module.scss';
import IconSVG from '@components/IconSVG';
import Gradient from '@components/Gradient';

const GradientCard = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__gradient']}>
        <Gradient colors={['#EC7272', '#C3FF99']} />
      </div>

      <div className={styles['card__desc']}>
        <div className={styles['card__like-button']}>
          <IconSVG title="Like gradient" strokeWidth={1}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </IconSVG>
          <span>Like</span>
        </div>

        <div className={styles['card__title']}>
          Title
        </div>
      </div>
    </div>
  );
}

export default GradientCard;