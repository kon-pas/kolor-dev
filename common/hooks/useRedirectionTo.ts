import { useRouter } from 'next/router';
import { useEffect, Fragment, createElement } from 'react';

const useRedirectionTo: {
  (path: string): JSX.Element
} = path => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${path}`)
  });

  return createElement(Fragment);
}

export default useRedirectionTo;