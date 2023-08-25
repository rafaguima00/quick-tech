import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import {
    Topo,
    TextoTopo,
    ContentProd,
    News,
    Products,
    BotaoProduto,
    ImagemProduto,
    InfoProduto,
    Item,
    NomeProduto,
    Price
} from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { produtos } from '../../mocks/produtos';
import { Feather } from 'react-native-vector-icons'
import { temaClaro } from '../../Tema';
import { PesquisaContext } from '../../Context/PesquisaContext';
import { CarrinhoContext } from '../../Context/CarrinhoContext';
import UltimoVisto from './componentes/ultimosVistos';

const Menu = ({ navigation }) => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const { setItemEscolhido, itemEscolhido } = useContext(PesquisaContext)
    const { produtoVisto, setUltimosVistos } = useContext(CarrinhoContext)

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
            function: () => { }
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
            id: item.id
        })
        navigation.navigate('Informações')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <>
                <Topo style={{ borderBottomWidth: 2, borderBottomColor: bordaTopo }}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={27} color={corDoTexto} />
                    </TouchableOpacity>
                    <TextoTopo>Olá, {nome ? nome : '[user_name]'}</TextoTopo>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        {options.map(item => (
                            <TouchableOpacity activeOpacity={0.4} key={item.id} onPress={item.function}>
                                <Feather name={item.name} size={27} color={corDoTexto} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </Topo>
                <ContentProd>
                    <UltimoVisto retornarDados={retornarDados} />
                    <View>
                        <News>Novidades</News>
                        <Products>
                            {produtos.map(item => (
                                <BotaoProduto
                                    key={item.id}
                                    activeOpacity={0.9}
                                    onPress={() => {
                                        retornarDados({ item })
                                        setUltimosVistos({ item })
                                    }}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <ImagemProduto source={{ uri: item.image }} />
                                    </View>
                                    <InfoProduto>
                                        <NomeProduto>{item.name}</NomeProduto>
                                        <Item>
                                            <Price>R$ {item.price}</Price>
                                            <Feather name="star" size={14} color="#33bbc5" children={item.avaliacao} />
                                        </Item>
                                    </InfoProduto>
                                </BotaoProduto>
                            ))}
                        </Products>
                    </View>
                </ContentProd>
            </>
        </SafeAreaView>
    )
}

export default Menu;