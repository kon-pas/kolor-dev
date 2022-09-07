import styles from '@styles/pages/gradient/[pid].module.scss';
import type { NextPage, GetServerSideProps } from 'next';
import { GradientScheme } from '@interfaces';

interface GradientPidProps {
  gradient: GradientScheme
}

const GradientPid: NextPage<GradientPidProps> = ({
  gradient: {}
}) => {
  return (
    <div className={styles['gradient-id']}>
      

    </div>
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