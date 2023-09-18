import { createContext, useState } from "react";

export const PesquisaContext = createContext({})

export function PesquisaProvider({ children }) {

    const [pesquisar, setPesquisar] = useState('')
    const [itensFiltrados, setItensFiltrados] = useState([])
    const [itemEscolhido, setItemEscolhido] = useState({})
    const [produtoVisto, setProdutoVisto] = useState([])
    const [favorito, setFavorito] = useState([])
    const [handleBotaoFav, setHandleBotaoFav] = useState(false)

    const handleFavorite = (produto) => {
        const itemExistente = favorito.find(item => item.id == produto.id)

        if (itemExistente) {
            const updatedFav = favorito.filter(item => item.id != produto.id)
            setFavorito(updatedFav);
            return 'removido'
        } else {
            setFavorito([...favorito, { ...produto }]);
            return 'adicionado'
        }
    }

    const handleProdutoVisto = (itemClicado) => {
        let novoProdutoVisto = new Set(produtoVisto)
        novoProdutoVisto.add(itemClicado)
        setProdutoVisto([...novoProdutoVisto])
    }

    const value = {
        pesquisar, 
        setPesquisar, 
        itensFiltrados, 
        setItensFiltrados, 
        itemEscolhido, 
        setItemEscolhido,
        produtoVisto, 
        setProdutoVisto,
        favorito,
        setFavorito,
        handleFavorite,
        handleBotaoFav,
        setHandleBotaoFav,
        handleProdutoVisto
    }

    return (
        <PesquisaContext.Provider value={value}>
            {children}
        </PesquisaContext.Provider>
    )
}