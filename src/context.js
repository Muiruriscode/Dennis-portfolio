import React from "react";
import { useContext } from "react/cjs/react.production.min";

const rootUrl = "http://127.0.0.1:5000";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ rootUrl }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
