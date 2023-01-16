import { useRouter } from "next/router";
import { usePathName } from "@hooks";

// @@@ NOTE: Remove? After clean-up this hook is an overkill.
const useNavigation = () => {
  const { push } = useRouter();
  return {
    navigateTo: (url: string, pathname?: string) => {
      push(url);
    },
  };
};

export default useNavigation;
