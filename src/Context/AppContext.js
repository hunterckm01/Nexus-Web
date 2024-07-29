import { createContext, useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const navigate = useNavigate();
    const value = {
        navigate
    };

    return <AppContext.Provider value = {value} >    {children}  </AppContext.Provider>
}


