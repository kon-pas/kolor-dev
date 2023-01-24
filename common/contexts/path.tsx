// @@@ TODO: Simplify this spaghetti.

import type { ReactNode, FC } from "react";
import { createContext, useState, useEffect } from "react";

// @@@ TODO: The `any` terrifies me.
const PathContext = createContext<any>({});

interface PathContextProviderProps {
  children: ReactNode;
}

const PathContextProvider: FC<PathContextProviderProps> = props => {
  const [pathName, setPathName] = useState<string>("");
  const [pathUrl, setPathUrl] = useState<string>("/");

  const setPath = (path: {
    name: typeof pathName;
    url: typeof pathUrl;
  }): void => {
    setPathName(path.name);
    setPathUrl(path.url);
  };

  return (
    <PathContext.Provider
      value={{ pathName, setPathName, pathUrl, setPathUrl, setPath }}
    >
      {props.children}
    </PathContext.Provider>
  );
};

const PathContextManager = {
  PathContext,
  PathContextProvider,
};

export default PathContextManager;
