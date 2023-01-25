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
  const [path, setPath] = useState<{
    name: typeof pathName;
    url: typeof pathUrl;
  }>({ name: pathName, url: pathUrl });

  useEffect(() => {
    setPath(prev => ({ ...prev, name: pathName }));
  }, [pathName]);

  useEffect(() => {
    setPath(prev => ({ ...prev, url: pathUrl }));
  }, [pathUrl]);

  useEffect(() => {
    setPathName(path.name);
  }, [path.name]);

  useEffect(() => {
    setPathUrl(path.url);
  }, [path.url]);

  return (
    <PathContext.Provider
      value={{ pathName, setPathName, pathUrl, setPathUrl, path, setPath }}
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
