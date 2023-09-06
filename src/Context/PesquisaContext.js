import { createContext, useState } from "react";

export const PesquisaContext = createContext({})

export function PesquisaProvider({ children }) {

    const [pesquisar, setPesquisar] = useState('')
    const [itensFiltrados, setItensFiltrados] = useState([])
    const [itemEscolhido, setItemEscolhido] = useState({})
    const [ultimosVistos, setUltimosVistos] = useState(null)
    const [favorito, setFavorito] = useState([])
    const [handleBotaoFav, setHandleBotaoFav] = useState(false)

    const produtoVisto = ({produtos}) => {
        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produtos)
        setUltimosVistos([{...novoUltimosVistos}])
    }

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

    const value = {
        pesquisar, 
        setPesquisar, 
        itensFiltrados, 
        setItensFiltrados, 
        itemEscolhido, 
        setItemEscolhido,
        produtoVisto,
        ultimosVistos, 
        setUltimosVistos,
        favorito,
        setFavorito,
        handleFavorite,
        handleBotaoFav,
        setHandleBotaoFav
    }

    return (
        <PesquisaContext.Provider value={value}>
            {children}
        </PesquisaContext.Provider>
    )
}