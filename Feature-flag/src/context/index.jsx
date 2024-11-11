import { createContext ,useState , useEffect } from "react";
import fetchFeatureFlagServiceCall from "../data";
  

export const FeatureFlagsContext = createContext(null)

export default function FeatureFlageGlobleState ({children}){
     
      const [loading, setLoading] = useState(false)
      const [enableFlags, setEnableFlags] = useState({})

    const fetchFeatureFlags = async() => {
        try {
            setLoading(true)
            const response = await fetchFeatureFlagServiceCall() 
            setEnableFlags(response)
            setLoading(false)
            
        } catch (error ) {
            console.log(error);
            setLoading(false)
            throw new Error(error)
        }
    }
    useEffect(()=>{
        fetchFeatureFlags();
    } , 
[])
    return(
        <FeatureFlagsContext.Provider value={{loading,enableFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}