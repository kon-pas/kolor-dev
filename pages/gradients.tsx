import styles from '@styles/pages/Gradients.module.scss'

import type { NextPage, GetStaticProps } from 'next'

import GradientCard from '@components/GradientCard'
import TextUnderline from '@components/TextUnderline';
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
          <TextUnderline
            thickness={16}
            offset={2}
          >
            Gradients
          </TextUnderline>
        </h2>

        <p className={styles['header__paragraph']}>
          <span>
            Carefully selected for&nbsp;
          </span>

          <span>
            Artists
          </span>

          <span>,&nbsp;</span>

          <span>
            Designes
          </span>

          <span>&nbsp;&&nbsp;</span>

          <span>
            Developers
          </span>

          <span>.</span>
        </p>
      </header>

      <div className={styles['gradients-list']}>
        {Object.entries(gradients).map(([id, gradient], index) => 
          <GradientCard
            key={index}
            gradient={gradient}
            gradientId={id}
          />
        )}
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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