import type { NextPage, GetServerSideProps } from 'next';
import { GradientScheme } from '@interfaces';

interface GradientColorsProps {
  gradient: GradientScheme
}

const GradientColors: NextPage<GradientColorsProps> = ({
  gradient
}) => {

  return <>{gradient.title}</>

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

export default GradientColors;