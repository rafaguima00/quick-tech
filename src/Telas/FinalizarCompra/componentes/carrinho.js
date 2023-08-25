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

const Carrinho = () => {

    const { quantidade, setQuantidade, carrinho } = useContext(CarrinhoContext)

    const renderItem = ({ item }) => {
        return (
            <ConteudoCarrinho key={item.id}>
                <ImagemProduto source={{ uri: item.image }} />
                <Produto>
                    <FirstRow>
                        <NomeProduto>{item.name}</NomeProduto>
                        <TouchableOpacity activeOpacity={0.4}>
                            <Feather name="trash-2" size={22} color={'#BB2525'} />
                        </TouchableOpacity>
                    </FirstRow>
                    <InformacoesProd>
                        <Options>
                            <TextoQuantidade>{quantidade}</TextoQuantidade>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <Incrementar
                                    activeOpacity={0.6}
                                    onPress={() => setQuantidade(quantidade + 1)}
                                >
                                    <SinalMais>+</SinalMais>
                                </Incrementar>
                                <Diminuir
                                    activeOpacity={0.6}
                                    onPress={() => {
                                        quantidade > 1 ? setQuantidade(quantidade - 1) : null
                                    }}
                                >
                                    <SinalMenos>-</SinalMenos>
                                </Diminuir>
                            </View>
                        </Options>
                        <PrecoProduto>R$ {item.price}</PrecoProduto>
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
                data={carrinho}
                key={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={() => <TextoCarrinho>Carrinho</TextoCarrinho>}
                ListEmptyComponent={() => <TextoCarrinhoVazio>Nenhum item adicionado ao carrinho.</TextoCarrinhoVazio>}
            />
        </Lista>
    )
}

export default Carrinho;