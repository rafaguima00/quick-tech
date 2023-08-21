import { View, Text, TouchableOpacity, Image } from 'react-native'
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
    FirstRow
} from '../style'
import { produtosNoCarrinho } from '../../../mocks/produtosNoCarrinho'
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react'
import { CarrinhoContext } from '../../../Context/CarrinhoContext'

const Carrinho = () => {

    const { quantidade, setQuantidade } = useContext(CarrinhoContext)

    return (
        <Lista>
            {produtosNoCarrinho.map(item => (
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
            ))}
        </Lista>
    )
}

export default Carrinho;