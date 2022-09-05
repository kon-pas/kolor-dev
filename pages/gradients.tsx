import type { NextPage } from 'next'
import styles from '@styles/pages/Gradients.module.scss'
import GradientCard from '@components/GradientCard'
import { GradientScheme } from '@interfaces';

interface GradientsProps {
  gradients: GradientScheme[]
}

const Gradients: NextPage<GradientsProps> = ({gradients}) => {
  return (
    <section className={styles['gradients-page']}>
      <header className={styles['header']}>
        <h1 className={styles['header__heading-1']}>
          {Object.keys(gradients).length}
        </h1>
        <h2 className={styles['header__heading-2']}>
          Carefully selected gradients
        </h2>
        <p className={styles['header__paragraph']}>
          For artists, designers & developers
        </p>
      </header>

      <div className={styles['gradients-list']}>
        {Object.values(gradients).map((gradient, index) => 
          <GradientCard
            key={index}
            gradient={gradient}
          />
        )}
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/gradients', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });
  const gradients = await res.json()

  return {
    props: {
      gradients
    }
  }
}

export default Gradients