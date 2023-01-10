import { useContext } from "react";
import { PathNameContextManager } from "@contexts";

const usePathName = () => useContext(PathNameContextManager.PathNameContext);

export default usePathName;
