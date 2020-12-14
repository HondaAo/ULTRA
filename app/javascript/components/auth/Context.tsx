import * as React from 'react'
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthState = ({children}) => {
 const [ userInfo, setUserInfo ] = useState(null)
    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    )
}
