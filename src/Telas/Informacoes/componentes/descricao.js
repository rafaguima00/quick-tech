import { View, TouchableOpacity, Text } from 'react-native'
import { NameProduct, Desc, MostrarMais } from '../style'
import { useContext, useState } from 'react'
import { PesquisaContext } from '../../../Context/PesquisaContext'

const Descricao = () => {

    const { itemEscolhido } = useContext(PesquisaContext)

    const [showMore, setShowMore] = useState(false);
    const [numberOfLines, setNumberOfLines] = useState(5);

    const handleTextLayout = ({ nativeEvent }) => {
        const shouldShowMore = nativeEvent.lines.length > numberOfLines;
        setShowMore(shouldShowMore);
    };

    const onPressShowMore = () => {
        setNumberOfLines(numberOfLines ? null : 5);
    };


    return (
        <View style={{ marginHorizontal: 36, marginVertical: 20 }}>
            <NameProduct>Descrição</NameProduct>
            <Desc numberOfLines={numberOfLines} onTextLayout={handleTextLayout}>
                {itemEscolhido.desc}
            </Desc>
            {showMore &&
                <TouchableOpacity activeOpacity={1} onPress={onPressShowMore}>
                    <MostrarMais style={{ textAlign: 'right', paddingTop: 12 }}>
                        {numberOfLines ? 'Mostrar mais...' : 'Mostrar menos'}
                    </MostrarMais>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Descricao