import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    const {email, senha} = dados

    return (
        <GlobalContext.Provider
            value={{
                email, senha, dados, setDados
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}