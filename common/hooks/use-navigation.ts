import { useRouter } from "next/router";
import { usePath } from "@hooks";

const useNavigation = () => {
  // const path = usePath();
  const { push } = useRouter();

  return {
    navigateTo: (url: string, pathname?: string) => {
      // path.setName(pathname ?? url);
      push(url);
    },
  };
};

export default useNavigation;
