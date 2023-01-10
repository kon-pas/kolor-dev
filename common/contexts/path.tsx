// @@@ TODO: Simplify this spaghetti.

import type { ReactNode, FC } from "react";
import { createContext, useState } from "react";

// @@@ TODO: The `any` terrifies me.
const PathNameContext = createContext<any>({});

interface PathNameContextProviderProps {
  children: ReactNode;
}

const PathNameContextProvider: FC<PathNameContextProviderProps> = props => {
  const [pathName, setPathName] = useState<string>("");

  return (
    <PathNameContext.Provider value={{ pathName, setPathName }}>
      {props.children}
    </PathNameContext.Provider>
  );
};

const PathNameContextManager = {
  PathNameContext,
  PathNameContextProvider,
};

export default PathNameContextManager;
