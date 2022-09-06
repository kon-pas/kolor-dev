import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Gradient: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/gradients')
  }, [router]);
  
  return <></>;
}

export default Gradient