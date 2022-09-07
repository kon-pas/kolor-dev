import styles from '@styles/pages/gradient/[pid].module.scss';
import type { NextPage, GetServerSideProps } from 'next';
import TextUnderline from '@components/TextUnderline';
import Gradient from '@components/Gradient';
import { GradientScheme } from '@interfaces';

interface GradientPidProps {
  gradient: GradientScheme
}

const GradientPid: NextPage<GradientPidProps> = ({
  gradient
}) => {
  return (
    <section className={styles['gradient-id']}>
      <header className={styles['header']}>
        <h1 className={styles['header__heading']}>
          <TextUnderline
            colors={gradient.colors}
          >
            {gradient.title}
          </TextUnderline>
        </h1>
      </header>

      <div className={styles['gradient-id__gradient']}>
        <Gradient colors={gradient.colors}/>
      </div>

      <div className={styles['gradient-id__colors-list']}>
        {gradient.colors.map((color, idx) => 
          <div
            className={styles['gradient-id__color']}
            key={idx}
          >
            {color}
          </div>
        )}
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/gradient/${context.query.pid}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });

  const gradient = await res.json()

  return {
    props: {
      gradient
    }
  }
}

export default GradientPid;