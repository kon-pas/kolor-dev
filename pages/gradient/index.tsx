import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Post: NextPage = () => {
  const router = useRouter()
  const { from, via, to } = router.query

  if(from && via && to) {

  }
  else if(from && to){

  }
  else router.push('/gradients')

  return <p>Test</p>
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Post