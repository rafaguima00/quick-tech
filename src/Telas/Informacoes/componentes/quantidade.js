import { View } from 'react-native'
import { Quantity, TextoQuantidade, Incrementar, Diminuir, SinalMais, SinalMenos } from '../style';
import { useState } from 'react';

const Quantidade = () => {

    const [quantidade, setQuantidade] = useState(1)

    function diminuirQuantidade() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <Quantity>
            <View style={{ flexDirection: 'row' }}>
                <TextoQuantidade>Quantidade: </TextoQuantidade>
                <TextoQuantidade>{quantidade}</TextoQuantidade>
            </View>
            <View style={{ flexDirection: 'row', gap: 12 }}>
                <Incrementar
                    activeOpacity={0.6}
                    onPress={() => setQuantidade(quantidade + 1)}
                >
                    <SinalMais>+</SinalMais>
                </Incrementar>
                <Diminuir
                    activeOpacity={0.6}
                    onPress={() => quantidade > 1 ? setQuantidade(quantidade - 1) - 1 : null}
                >
                    <SinalMenos>-</SinalMenos>
                </Diminuir>
            </View>
        </Quantity>
    )
}

export default Quantidade;