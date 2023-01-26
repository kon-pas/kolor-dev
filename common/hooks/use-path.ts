import { useContext } from "react";
import { PathContextManager } from "@contexts";

const usePath = () => useContext(PathContextManager.PathContext);

export default usePath;
