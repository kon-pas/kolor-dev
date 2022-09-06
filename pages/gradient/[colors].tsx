import { useRouter } from 'next/router';
import type { NextPage } from 'next';


const Post: NextPage = () => {
  const router = useRouter()

  const { colors, from, via, to } = router.query;

  if(colors === 'colors') {

  }

  if(from && via && to) {

  }
  else if(from && to){

  }
  else router.push('/gradients')

  return <p>gradient</p>
}

export async function getServerSideProps(context) {

  return {
    props: {}
  }
}

export default Post