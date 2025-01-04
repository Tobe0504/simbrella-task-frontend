import { createContext } from "react";

type AppContextValues = {};

type AppContextProviderTypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderTypes) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
