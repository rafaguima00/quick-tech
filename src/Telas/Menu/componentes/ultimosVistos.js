import { View } from "react-native"
import { useContext } from "react"
import { CarrinhoContext } from "../../../Context/CarrinhoContext"
import {
    BotaoProduto,
    News,
    UltimosVistos,
    ImagemProduto,
    InfoProduto,
    NomeProduto,
    Item,
    Price
} from '../style'
import { Icon } from "react-native-vector-icons/Feather"
import { PesquisaContext } from "../../../Context/PesquisaContext"
import formatCurrency from "../../../Utils/formatCurrency"

const UltimoVisto = ({ retornarDados }) => {

    const { ultimosVistos } = useContext(PesquisaContext)

    const renderItem = ({ item }) => {
        return (
            <BotaoProduto
                activeOpacity={0.9}
                onPress={() => retornarDados({ item })}
            >
                <View style={{ alignItems: 'center' }}>
                    <ImagemProduto source={{ uri: item.image }} />
                </View>
                <InfoProduto>
                    <NomeProduto>{item.name}</NomeProduto>
                    <Item>
                        <Price>{formatCurrency(item.price, 'BRL')}</Price>
                        <Icon name="star" size={14} color="#33bbc5" children={item.avaliacao} />
                    </Item>
                </InfoProduto>
            </BotaoProduto>
        )
    }

    return (
        <View>
            <UltimosVistos
                style={{ maxHeight: 250 }}
                showsVerticalScrollIndicator={false}
                data={{}}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={() => <News>Últimos vistos</News>}
            />
        </View>
    )
}

export default UltimoVisto;