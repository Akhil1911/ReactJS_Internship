import React , {createContext} from 'react'
import { useState,useEffect } from 'react';
const context = createContext({
    isLoggedIn: false,
    onLogin: (email,password) => { },
});
export const AppContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // setIsLoggedIn(!changeLog)
    const toggle = (email,password) => {
        setEmail(email);
        setPassword(password);
    }
    useEffect(() => {
        if (email?.includes(".com") && password?.length > 6) {
            localStorage.setItem('trueUser','1')
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [email,password])
    
  return (
      <context.Provider value={{isLoggedIn:isLoggedIn,onLogin: toggle}}>
       {children}   
    </context.Provider>
  )
}

export default context