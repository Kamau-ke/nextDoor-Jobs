import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext=()=>{
    const context=useContext(AuthContext)

    if(!context){
        throw Error('You should be inside AuthContext provider')
    }

    return context
}