import { useEffect } from "react";
import { createContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({children}) => {
    const [cityId, setCityId] = useState(null);
    

    return (
        <CityContext.Provider value={{cityId, setCityId}}>
            {children}
        </CityContext.Provider>
    );
};

export default CityContext;