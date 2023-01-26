// @@@ TODO: Simplify this spaghetti.

import type { ReactNode, FC } from "react";
import { createContext, useState, useEffect } from "react";

// @@@ TODO: The `any` terrifies me.
const PathContext = createContext<any>({});

interface PathContextProviderProps {
  children: ReactNode;
}

const PathContextProvider: FC<PathContextProviderProps> = props => {
  const [path, setPath] = useState<{
    name: string;
    url: string;
  }>({ name: "", url: "/" });

  const setPathName = (name: typeof path.name): void => {
    setPath(prev => ({ ...prev, name }));
  };

  const setPathUrl = (url: typeof path.url): void => {
    setPath(prev => ({ ...prev, url }));
  };

  return (
    <PathContext.Provider value={{ path, setPath, setPathName, setPathUrl }}>
      {props.children}
    </PathContext.Provider>
  );
};

const PathContextManager = {
  PathContext,
  PathContextProvider,
};

export default PathContextManager;
