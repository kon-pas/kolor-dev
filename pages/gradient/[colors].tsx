import type { NextPage, GetServerSideProps } from 'next';

interface GradientColorsProps {
  from: string
}

const GradientColors: NextPage<GradientColorsProps> = ({
  from
}) => {
  console.log(from);
  // const { colors, from, via, to }
  // if(colors === 'colors') {
  // }
  // if(from && via && to) {
  // }
  // else if(from && to){
  // }
  // else router.push('/gradients')

  return <p>test</p>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      from: context.query
    }
  }
}

export default GradientColors;