import { View } from 'react-native'
import { NameProduct, Desc } from '../style'
import { useContext } from 'react'
import { PesquisaContext } from '../../../Context/PesquisaContext'

const Descricao = () => {

    const { itemEscolhido } = useContext(PesquisaContext)

    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <NameProduct>Descrição</NameProduct>
            <Desc>{itemEscolhido.desc}</Desc>
        </View>
    )
}

export default Descricao