import { View, Image } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { Botao, Lista, TextoBotao, TextoTopo, Topo, ViewImage } from './estilo'
import { temaClaro } from '../../Tema'

const CustomDrawer = () => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const { corDoTexto } = temaClaro;

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
            function: () => { },
            icon: 'dollar-sign'
        },
        {
            id: '4',
            name: 'Endereço',
            function: () => { },
            icon: 'home'
        },
        {
            id: '5',
            name: 'Favoritos',
            function: () => { },
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
                    <Botao key={item.id}>
                        <Feather name={item.icon} size={24} color={corDoTexto} />
                        <TextoBotao>{item.name}</TextoBotao>
                    </Botao>
                ))}
            </Lista>
        </View>
    )
}

export default CustomDrawer