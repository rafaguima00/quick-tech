import { createContext, useState } from "react";

export const PesquisaContext = createContext({})

export function PesquisaProvider({ children }) {

    const [pesquisar, setPesquisar] = useState('')
    const [itensFiltrados, setItensFiltrados] = useState([])
    const [itemEscolhido, setItemEscolhido] = useState({})

    return (
        <PesquisaContext.Provider
            value={{
                pesquisar, 
                setPesquisar, 
                itensFiltrados, 
                setItensFiltrados, 
                itemEscolhido, 
                setItemEscolhido
            }}
        >
            {children}
        </PesquisaContext.Provider>
    )
}