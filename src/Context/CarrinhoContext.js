import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export function CarrinhoProvider({children}) {

    const [quantidade, setQuantidade] = useState(1)

    return (
        <CarrinhoContext.Provider
            value={{
                quantidade, setQuantidade
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}