import { View, Text } from 'react-native'
import estilos from '../style'
import { produtos } from '../../../mocks/produtos'

const Descricao = () => {
    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <Text style={estilos.nomeProduto}>Descrição</Text>
            <Text style={estilos.descricao}>{produtos[3].descricao}</Text>
        </View>
    )
}

export default Descricao