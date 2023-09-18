import { createContext, useState, useContext } from "react";

export const CarrinhoContext = createContext({})

export function CarrinhoProvider({ children }) {

    const [cartItem, setCartItem] = useState([])

    const addItemToCart = (produto) => {
        const itemExistente = cartItem.find(item => item.id == produto.id)

        if (itemExistente) {
            const updatedCart = cartItem.map((item) =>
                item.id == itemExistente.id ? 
                { ...item, quantidade: item.quantidade + produto.quantidade } : 
                item
            );
            setCartItem(updatedCart);
        } else {
            setCartItem([...cartItem, { ...produto }]);
        }
    }

    const value = {
        cartItem,
        setCartItem,
        addItemToCart
    }

    return (
        <CarrinhoContext.Provider value={value}>
            {children}
        </CarrinhoContext.Provider>
    )
}