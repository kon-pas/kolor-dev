import type { NextPage, GetServerSideProps } from 'next';

interface GradientColorsProps {
  isColors: boolean,
  colors: {
    from: string,
    via: string,
    to: string
  }
}

const GradientColors: NextPage<GradientColorsProps> = ({
  isColors,
  colors: {
    from,
    via,
    to
  }
}) => {

  if (!isColors) return <>Dupa</>
  // if(colors === 'colors') {
  // }
  // if(from && via && to) {
  // }
  // else if(from && to){
  // }
  // else router.push('/gradients')

  return <p>{from} - {via} - {to}</p>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params)

  return {
    props: {
      isColors: context.params?.colors === 'colors',
      colors: {
        from: context.query.from || null,
        via: context.query.via || null,
        to: context.query.to || null
      }
    }
  }
}

export default GradientColors;