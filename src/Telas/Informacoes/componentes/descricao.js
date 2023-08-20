import { View } from 'react-native'
import { NameProduct, Desc } from '../style'

const Descricao = ({ itemEscolhido }) => {
    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <NameProduct>Descrição</NameProduct>
            <Desc>{itemEscolhido.desc}</Desc>
        </View>
    )
}

export default Descricao