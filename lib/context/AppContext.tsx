import { createContext, useState } from "react"
import { AppContextType } from "./contextTypes";

const defaultContext: AppContextType = {
  units: {system: "US", temperature: '°F', distance: 'mi'},
  setUnits: () => {},
}

export const AppContext = createContext<AppContextType>(defaultContext);

const AppProvider = ({children}: {children: JSX.Element[]}) => { 
  const [units, setUnits] = useState<AppContextType["units"]>(defaultContext.units);
  return (
    <AppContext.Provider 
    value={
      {
        units: units,
        setUnits: setUnits,
      }
    }
    >
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;