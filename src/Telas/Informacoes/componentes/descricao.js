import { View, TouchableOpacity, Text } from 'react-native'
import { NameProduct, Desc, MostrarMais } from '../style'
import { useContext, useState } from 'react'
import { PesquisaContext } from '../../../Context/PesquisaContext'
import SeeMore from 'react-native-see-more-inline'
import { temaClaro } from '../../../Tema'

const { corDoTexto } = temaClaro

const Descricao = () => {

    const { itemEscolhido } = useContext(PesquisaContext)

    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <NameProduct>Descrição</NameProduct>
            <SeeMore
                numberOfLines={5}
                style={{
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    color: corDoTexto,
                    textAlign: 'justify',
                    maxHeight: 148
                }}
            >
                {itemEscolhido.desc}
            </SeeMore>
        </View>
    )
}

export default Descricao;