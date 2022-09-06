import type { NextPage, GetServerSideProps } from 'next';

interface GradientColorsProps {
  // isColors: boolean,
  // colors: {
  //   from: string,
  //   via: string,
  //   to: string
  // }
}

const GradientColors: NextPage<GradientColorsProps> = ({
  // isColors,
  // colors: {
  //   from,
  //   via,
  //   to
  // }
}) => {

  return <>Dupa</>
  // if(colors === 'colors') {
  // }
  // if(from && via && to) {
  // }
  // else if(from && to){
  // }
  // else router.push('/gradients')

  // return <p>{from} - {via} - {to}</p>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/gradient/colors?from=red&to=blue', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });

  const colors = await res.json()

  console.log(colors);

  return {
    props: {
      // isColors: context.params?.pid === 'colors',
      // colors: {
      //   from: context.query.from || null,
      //   via: context.query.via || null,
      //   to: context.query.to || null
      // }
    }
  }
}

export default GradientColors;