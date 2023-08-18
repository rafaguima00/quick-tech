import { View, Text } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import estilos from '../style'
import { produtos } from '../../../mocks/produtos'

const InfoProduto = () => {
    return (
        <View style={estilos.informacoes}>
            <Text style={estilos.nomeProduto}>{produtos[0].name}</Text>
            <View style={estilos.price}>
                <Text style={estilos.priceProd}>R$ {produtos[0].price}</Text>
                <Feather name="star" size={18} color="#F5C03A" children={produtos[0].avaliacao} />
            </View>
        </View>
    )
}

export default InfoProduto