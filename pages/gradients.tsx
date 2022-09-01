import type { NextPage } from 'next'
import styles from '@styles/pages/Gradients.module.scss'
import GradientCard from '@components/GradientCard'
import { GradientScheme } from '@interfaces';

const Gradients: NextPage = ({GRADIENTS}: GradientScheme[]) => {
  return (
    <div className={styles['gradients-page']}>
      <div className={styles['gradients-list']}>
        GRADIENTS.map((gradient, index) => {
          <GradientCard ggradient={gradient}/>
        })
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const GRADIENTS = await fetch('');
  const GRADIENTS = await res.json()

  return {
    props: {
      GRADIENTS
    }
  }
}

export default Gradients