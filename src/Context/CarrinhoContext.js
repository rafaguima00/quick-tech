import { createContext, useState, useContext } from "react";
import { PesquisaContext } from "./PesquisaContext";

export const CarrinhoContext = createContext({})

export function CarrinhoProvider({ children }) {

    const [cartItem, setCartItem] = useState([])

    const adicionarAoCarrinho = (produto) => setCartItem([...cartItem, produto])

    const value = {
        cartItem,
        setCartItem,
        adicionarAoCarrinho
    }

    return (
        <CarrinhoContext.Provider value={value}>
            {children}
        </CarrinhoContext.Provider>
    )
}