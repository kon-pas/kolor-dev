import styles from './GradientCard.module.scss';

const color_1: string = '#EC7272';
const color_2: string = '#C3FF99';

const GradientCard = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__gradient']}>
        g
      </div>
      <div className={styles['card__desc']}>
        <div className={styles['card__title']}></div>

        <div className={styles['card__like-button']}>
        </div>
      </div>
    </div>
  );
}

export default GradientCard;