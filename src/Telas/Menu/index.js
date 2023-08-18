import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import estilos from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { produtos } from '../../mocks/produtos';
import { Feather } from 'react-native-vector-icons'
import { temaEscuro, temaClaro } from '../../Tema';

const Menu = ({ navigation }) => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const { corDoTexto } = temaClaro

    const options = [
        {
            id: '1',
            name: 'search',
            function: () => { navigation.navigate('Pesquisa') }
        },
        {
            id: '2',
            name: 'shopping-cart',
            function: () => { }
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

    return (
        <SafeAreaView style={estilos.container}>
            <ScrollView>
                <View style={estilos.top}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={27} color={corDoTexto} />
                    </TouchableOpacity>
                    <Text style={estilos.textTop}>Olá, {nome ? nome : '[user_name]'}</Text>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        {options.map(item => (
                            <TouchableOpacity activeOpacity={0.4} key={item.id} onPress={item.function}>
                                <Feather name={item.name} size={27} color={corDoTexto} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                
                <View style={estilos.contentProducts}>
                    <Text style={estilos.textTopRelease}>Novidades</Text>
                    <View style={estilos.allProducts}>
                        {produtos.map(item => (
                            <TouchableOpacity 
                                key={item.id} 
                                style={estilos.info} 
                                activeOpacity={0.9}
                                onPress={() => navigation.navigate('Informações')}
                            >
                                <Image
                                    style={estilos.image}
                                    source={{ uri: item.image }}
                                />
                                <View style={estilos.infoProducts}>
                                    <Text style={estilos.productName}>{item.name}</Text>
                                    <View style={estilos.item}>
                                        <Text style={estilos.price}>R$ {item.price}</Text>
                                        <Feather name="star" size={14} color="#33bbc5" children={item.avaliacao} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu;