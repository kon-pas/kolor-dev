import type { NextPage } from 'next'
import styles from '@styles/pages/Gradients.module.scss'
import GradientCard from '@components/GradientCard'
import { GradientScheme } from '@interfaces';

interface GradientsProps {
  gradients: GradientScheme[]
}

const Gradients: NextPage<GradientsProps> = ({gradients}) => {
  return (
    <div className={styles['gradients-page']}>
      <div className={styles['gradients-list']}>
        {Object.values(gradients).map((gradient, index) => 
          <GradientCard
            key={index}
            gradient={gradient}
          />
        )}
      </div>
    </div>
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