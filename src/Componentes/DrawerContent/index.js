import { View, Image } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { Botao, Lista, TextoBotao, TextoTopo, Topo, ViewImage } from './estilo'
import { temaClaro } from '../../Tema'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = () => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const { corDoTexto } = temaClaro;

    const navigation = useNavigation()

    const botoes = [
        {
            id: '2',
            name: 'Histórico',
            function: () => { },
            icon: 'clock'
        },
        {
            id: '3',
            name: 'Pagamento',
            function: () => { navigation.navigate('Cadastrar cartão') },
            icon: 'dollar-sign'
        },
        {
            id: '4',
            name: 'Endereço',
            function: () => { navigation.navigate('Endereço') },
            icon: 'home'
        },
        {
            id: '5',
            name: 'Favoritos',
            function: () => { navigation.navigate('Favoritos') },
            icon: 'heart'
        },
        {
            id: '6',
            name: 'Cupons',
            function: () => { },
            icon: 'gift'
        },
        {
            id: '7',
            name: 'Ajuda',
            function: () => { },
            icon: 'help-circle'
        },
    ]

    return (
        <View style={{flex: 1}}>
            <Topo
                style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#7d7d7d'
                }}
            >
                <ViewImage>
                    <Image 
                        style={{width: 40, height: 40}} 
                        source={require('../../../assets/camera.png')} 
                    />
                </ViewImage>
                <TextoTopo>{nome ? nome : '[user_name]'}</TextoTopo>
            </Topo>
            <Lista>
                {botoes.map(item => (
                    <Botao key={item.id} activeOpacity={0.4} onPress={item.function} >
                        <Feather name={item.icon} size={24} color={corDoTexto} />
                        <TextoBotao>{item.name}</TextoBotao>
                    </Botao>
                ))}
            </Lista>
        </View>
    )
}

export default CustomDrawer