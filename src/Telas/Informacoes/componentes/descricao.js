import { View, Text } from 'react-native'
import { NameProduct, Desc } from '../style'
import { produtos } from '../../../mocks/produtos'

const Descricao = () => {
    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <NameProduct>Descrição</NameProduct>
            <Desc>{produtos[3].descricao}</Desc>
        </View>
    )
}

export default Descricao