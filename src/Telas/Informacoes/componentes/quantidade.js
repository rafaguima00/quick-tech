import { View } from 'react-native'
import { Quantity, TextoQuantidade, Incrementar, Diminuir, SinalMais, SinalMenos } from '../style';
import { useContext, useState } from 'react';
import { CarrinhoContext } from '../../../Context/CarrinhoContext';
import { PesquisaContext } from '../../../Context/PesquisaContext';

const Quantidade = () => {

    const { itemEscolhido, setItemEscolhido } = useContext(PesquisaContext)

    return (
        <Quantity>
            <View style={{ flexDirection: 'row' }}>
                <TextoQuantidade>Quantidade: </TextoQuantidade>
                <TextoQuantidade>{itemEscolhido.quantidade}</TextoQuantidade>
            </View>
            <View style={{ flexDirection: 'row', gap: 12 }}>
                <Incrementar
                    activeOpacity={0.6}
                    onPress={() => itemEscolhido.quantidade > 1 && setItemEscolhido({...itemEscolhido, quantidade: itemEscolhido.quantidade - 1})}
                >
                    <SinalMais>-</SinalMais>
                </Incrementar>
                <Diminuir
                    activeOpacity={0.6}
                    onPress={() => setItemEscolhido({...itemEscolhido, quantidade: itemEscolhido.quantidade + 1 })}
                >
                    <SinalMenos>+</SinalMenos>
                </Diminuir>
            </View>
        </Quantity>
    )
}

export default Quantidade;