import { View } from 'react-native'
import { Quantity, TextoQuantidade, Incrementar, Diminuir, SinalMais, SinalMenos } from '../style';
import { useContext } from 'react';
import { CarrinhoContext } from '../../../Context/CarrinhoContext';

const Quantidade = () => {

    const { quantidade, setQuantidade } = useContext(CarrinhoContext)

    return (
        <Quantity>
            <View style={{ flexDirection: 'row' }}>
                <TextoQuantidade>Quantidade: </TextoQuantidade>
                <TextoQuantidade>{ quantidade ? quantidade : 0 }</TextoQuantidade>
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
                    onPress={() => quantidade > 1 ? setQuantidade(quantidade - 1) : null}
                >
                    <SinalMenos>-</SinalMenos>
                </Diminuir>
            </View>
        </Quantity>
    )
}

export default Quantidade;