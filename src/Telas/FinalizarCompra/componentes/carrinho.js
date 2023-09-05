import { View, TouchableOpacity } from 'react-native'
import {
    Diminuir,
    Incrementar,
    SinalMais,
    SinalMenos,
    ConteudoCarrinho,
    ImagemProduto,
    Options,
    InformacoesProd,
    Produto,
    TextoQuantidade,
    NomeProduto,
    PrecoProduto,
    Lista,
    FirstRow,
    TextoCarrinho,
    TextoCarrinhoVazio
} from '../style'
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react'
import { CarrinhoContext } from '../../../Context/CarrinhoContext'
import { FlatList } from 'react-native'
import formatCurrency from '../../../Utils/formatCurrency'

const Carrinho = () => {

    const { cartItem, setCartItem } = useContext(CarrinhoContext)

    const handleRemoveItem = ( itemSelecionado ) => {
        const updatedItems = cartItem.filter(item => item.id != itemSelecionado)
        setCartItem(updatedItems)
    }

    const renderItem = ({ item }) => {
        return (
            <ConteudoCarrinho key={item.id}>
                <ImagemProduto source={{ uri: item.image }} />
                <Produto>
                    <FirstRow>
                        <NomeProduto>{item.name}</NomeProduto>
                        <TouchableOpacity 
                            activeOpacity={0.4} 
                            onPress={() => handleRemoveItem( item.id )}
                        >
                            <Feather name="trash-2" size={22} color={'#BB2525'} />
                        </TouchableOpacity>
                    </FirstRow>
                    <InformacoesProd>
                        <Options>
                            <TextoQuantidade>{item.quantidade}</TextoQuantidade>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <Incrementar
                                    activeOpacity={0.6}
                                    onPress={() => {
                                        item.quantidade > 1 && setCartItem({...cartItem, quantidade: item.quantidade - 1})
                                    }}
                                >
                                    <SinalMais>-</SinalMais>
                                </Incrementar>
                                <Diminuir
                                    activeOpacity={0.6}
                                    onPress={() => setCartItem({...cartItem, quantidade: item.quantidade + 1})}
                                >
                                    <SinalMenos>+</SinalMenos>
                                </Diminuir>
                            </View>
                        </Options>
                        <PrecoProduto>
                            {
                                item.desconto != 0 ?
                                formatCurrency((item.price * item.desconto) * item.quantidade, 'BRL') :
                                formatCurrency(item.price * item.quantidade, 'BRL')
                            }
                        </PrecoProduto>
                    </InformacoesProd>
                </Produto>
            </ConteudoCarrinho>
        )
    }

    return (
        <Lista>
            <FlatList
                style={{ maxHeight: 250 }}
                showsVerticalScrollIndicator={false}
                data={cartItem}
                key={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={() => <TextoCarrinho>Carrinho</TextoCarrinho>}
                ListEmptyComponent={() => <TextoCarrinhoVazio>Nenhum item adicionado ao carrinho.</TextoCarrinhoVazio>}
            />
        </Lista>
    )
}

export default Carrinho;