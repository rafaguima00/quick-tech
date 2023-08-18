import { View, TouchableOpacity, Text } from 'react-native'
import estilos from '../style';
import { useState } from 'react';

const Quantidade = () => {

    const [quantidade, setQuantidade] = useState(1)

    function diminuirQuantidade() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <View style={estilos.quantidade}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={estilos.textoQuantidade}>Quantidade: </Text>
                <Text style={estilos.textoQuantidade}>{quantidade}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 12 }}>
                <TouchableOpacity
                    style={estilos.botaoIncrementa}
                    activeOpacity={0.6}
                    onPress={() => setQuantidade(quantidade + 1)}
                >
                    <Text style={estilos.sinalMais}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={estilos.botaoDiminui}
                    activeOpacity={0.6}
                    onPress={diminuirQuantidade}
                >
                    <Text style={estilos.sinalMenos}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quantidade;