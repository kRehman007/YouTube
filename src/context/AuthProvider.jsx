import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/Rapidapi";

export const AuthContext=createContext(null);

export default function AuthProvider({children}){
const [loading,setLoading]=useState(false);
const [mobile,setMobile]=useState(false);
const [visible,setVisible]=useState(false);
const [first,setFirst]=useState(true);
const [data,setData]=useState([]);
const [nav,setNav]=useState(false);
const [value,setValue]=useState('new')

useEffect(()=>{
     // fetchAllData(value)
},[value])
const fetchAllData=(query)=>{
    setLoading(true)
    fetchData(`search/?q=${query}`).then((res)=>{
        
        setData(res.contents)
    setLoading(false)
    })
}
return(
    <AuthContext.Provider value={{loading,data,value,setValue,setLoading,mobile,setMobile,nav,setNav,visible,setVisible,first,setFirst}}>
        {children}
    </AuthContext.Provider>
)
}
export const useAuth=()=>useContext(AuthContext);
