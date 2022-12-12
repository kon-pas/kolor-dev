import type { ReactNode, FC } from "react";
import { createContext, useState } from "react";

// @@@ TODO: The `any` terrifies me.
const PathContext = createContext<any>({});

interface PathContextProviderProps {
  children: ReactNode;
}

const PathContextProvider: FC<PathContextProviderProps> = (props) => {
  const [name, setName] = useState<string>("");

  return (
    <PathContext.Provider value={{ name, setName }}>
      {props.children}
    </PathContext.Provider>
  );
};

const PathContextManager = {
  PathContext,
  PathContextProvider,
};

export default PathContextManager;
