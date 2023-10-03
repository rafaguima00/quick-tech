import { View, SafeAreaView, TouchableOpacity, Text, FlatList } from 'react-native'
import {
    Topo,
    TextoTopo,
    ContentProd,
    News,
    Products,
    BotaoCarrinho,
    BotaoProdVisto,
    ImagemProdVisto,
    InfoProdVisto,
    NomeProduto,
    Item,
    Price
} from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { produtos } from '../../Mocks/produtos';
import { Feather } from 'react-native-vector-icons'
import { temaClaro } from '../../Tema';
import { PesquisaContext } from '../../Context/PesquisaContext';
import { CarrinhoContext } from '../../Context/CarrinhoContext';
import IconeProduto from './componentes/iconeProduto';
import { ScrollView } from 'react-native';
import formatCurrency from '../../Servicos/formatCurrency';

const Menu = ({ navigation }) => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const { setItemEscolhido, produtoVisto } = useContext(PesquisaContext)
    const { cartItem } = useContext(CarrinhoContext)

    const { corDoTexto, bordaTopo } = temaClaro

    const options = [
        {
            id: '1',
            name: 'search',
            function: () => { navigation.navigate('Pesquisa') }
        },
        {
            id: '2',
            name: 'shopping-cart',
            function: () => { navigation.navigate('Finalizar compra') }
        },
        {
            id: '3',
            name: 'heart',
            function: () => { navigation.navigate('Favoritos') }
        },
        {
            id: '4',
            name: 'log-out',
            function: () => { navigation.replace('Login') }
        },
    ]

    function retornarDados({ item }) {
        setItemEscolhido({
            name: item.name,
            desc: item.descricao,
            avaliacao: item.avaliacao,
            price: item.price,
            image: item.image,
            id: item.id,
            desconto: item.desconto,
            quantidade: item.quantidade
        })
        navigation.navigate('Informações')
    }

    const renderItem = ({ item }) => {
        return (
            <BotaoProdVisto
                activeOpacity={0.9}
                onPress={() => retornarDados({ item })}
            >
                <View style={{ alignItems: 'flex-start' }}>
                    <ImagemProdVisto source={{ uri: item.image }} />
                </View>
                <InfoProdVisto>
                    <NomeProduto numberOfLines={2}>{item.name}</NomeProduto>
                    <Item>
                        <Price
                            style={{
                                textDecorationLine: (item.desconto != 0 && 'line-through'),
                                textDecorationColor: (item.desconto != 0 && '#F74F57'),
                                color: (item.desconto != 0 ? '#F74F57' : '#33bbc5')
                            }}
                        >
                            {formatCurrency(item.price, 'BRL')}
                        </Price>
                        {item.desconto != 0 &&
                            <Price>
                                {formatCurrency((item.price * item.desconto), 'BRL')}
                            </Price>
                        }
                    </Item>
                </InfoProdVisto>
            </BotaoProdVisto>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Topo style={{ borderBottomWidth: 2, borderBottomColor: bordaTopo }}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={27} color={corDoTexto} />
                </TouchableOpacity>
                <TextoTopo>Olá, {nome ? nome : '[user_name]'}</TextoTopo>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    {options.map(item => (
                        <TouchableOpacity activeOpacity={0.4} key={item.id} onPress={item.function}>
                            <Feather name={item.name} size={27} color={corDoTexto} />
                            {(item.name == 'shopping-cart' && cartItem.length > 0) &&
                                <BotaoCarrinho>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                        {cartItem.length}
                                    </Text>
                                </BotaoCarrinho>
                            }
                        </TouchableOpacity>
                    ))}
                </View>
            </Topo>
            <ScrollView>
                <ContentProd>
                    {produtoVisto.length > 0 && 
                        <View style={{ marginBottom: 18, backgroundColor: '#f3f3f3' }}>
                            <News>Produtos vistos</News>
                            <FlatList
                                data={produtoVisto}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    }
                    <View>
                        <News>Novidades</News>
                        <Products>
                            {produtos.map(item => (
                                <IconeProduto item={item} retornarDados={retornarDados} />
                            ))}
                        </Products>
                    </View>
                </ContentProd>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu;