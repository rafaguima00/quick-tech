import {
    BotaoProduto,
    ImagemProduto,
    InfoProduto,
    Item,
    NomeProduto,
    Price
} from '../style';
import formatCurrency from '../../../Utils/formatCurrency';
import { View } from 'react-native';
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react';
import { PesquisaContext } from '../../../Context/PesquisaContext';

const IconeProduto = ({ item, retornarDados }) => {

    const { produtoVisto, itemEscolhido } = useContext(PesquisaContext)

    return (
        <BotaoProduto
            key={item.id}
            activeOpacity={0.9}
            onPress={() => {
                retornarDados({ item })
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <ImagemProduto source={{ uri: item.image }} />
            </View>
            <InfoProduto>
                <NomeProduto>{item.name}</NomeProduto>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between'
                    }}
                >
                    <Item>
                        <Price
                            style={{
                                textDecorationLine: (item.desconto != 0 && 'line-through'),
                                textDecorationColor: (item.desconto != 0 && '#F74F57'),
                                color: (item.desconto != 0 ? '#F74F57' : '#33bbc5'),
                                fontSize: (item.desconto == 0 && 17)
                            }}
                        >
                            {formatCurrency(item.price, 'BRL')}
                        </Price>
                        {item.desconto != 0 &&
                            <Price style={{ fontSize: 17 }}>
                                {formatCurrency((item.price * item.desconto), 'BRL')}
                            </Price>
                        }
                    </Item>
                    <Feather name="star" size={14} color="#33bbc5" children={item.avaliacao} />
                </View>
            </InfoProduto>
        </BotaoProduto>
    )
}

export default IconeProduto;