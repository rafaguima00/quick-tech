import { createContext, useState } from "react";

export const PesquisaContext = createContext({})

export function PesquisaProvider({ children }) {

    const [pesquisar, setPesquisar] = useState('')
    const [itensFiltrados, setItensFiltrados] = useState([])

    return (
        <PesquisaContext.Provider
            value={{
                pesquisar, setPesquisar, itensFiltrados, setItensFiltrados
            }}
        >
            {children}
        </PesquisaContext.Provider>
    )
}