import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export function CarrinhoProvider({ children }) {

    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeVisto, setQuantidadeVisto] = useState(1)
    const [ultimosVistos, setUltimosVistos] = useState([])

    function produtoVisto(produto) {
        //setQuantidadeVisto(quantidadeVisto + 1)

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto)
        setUltimosVistos(novoUltimosVistos)
    }

    function adicionarAoCarrinho(produto) {
        if (quantidade == 0) {
            setQuantidade(quantidade + 1)
        }

        let novoCarrinho = carrinho
        novoCarrinho.push(produto)
        setCarrinho(novoCarrinho)
    }

    return (
        <CarrinhoContext.Provider
            value={{
                quantidade, 
                setQuantidade,
                carrinho,
                setCarrinho,
                ultimosVistos,
                setUltimosVistos,
                produtoVisto,
                adicionarAoCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}