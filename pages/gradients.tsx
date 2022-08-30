import type { NextPage } from 'next'
import styles from '@/styles/pages/Gradients.module.scss'
import GradientCard from '@/components/GradientCard'

const Gradients: NextPage = () => {
  return (
    <div className={styles['gradients-page']}>
      <GradientCard />
      <GradientCard />
      <GradientCard />
    </div>
  )
}

export default Gradients