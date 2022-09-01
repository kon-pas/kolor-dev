import type { NextPage } from 'next'
import styles from '@styles/pages/Gradients.module.scss'
import GradientCard from '@components/GradientCard'
import { GradientScheme } from '@interfaces';

const Gradients: NextPage<GradientScheme[]> = ({gradients}) => {
  return (
    <div className={styles['gradients-page']}>
      <div className={styles['gradients-list']}>
        gradients.map((gradient, index) => {
          <GradientCard gradient={gradient}/>
        })
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let GRADIENTS = await fetch('/api/gradients');
  GRADIENTS = await GRADIENTS.json()

  return {
    props: {
      GRADIENTS
    }
  }
}

export default Gradients