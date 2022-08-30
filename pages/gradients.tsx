import type { NextPage } from 'next'
import styles from '@/styles/pages/Gradients.module.scss'
import GradientCard from '@/components/GradientCard'

const Gradients: NextPage = () => {
  return (
    <div className={styles['gradients-page']}>
      <div className={styles['gradients-list']}>
        <GradientCard />
        <GradientCard />
        <GradientCard />
        <GradientCard />
        <GradientCard />
        <GradientCard />
        <GradientCard />
        <GradientCard />
      </div>
    </div>
  )
}

export default Gradients