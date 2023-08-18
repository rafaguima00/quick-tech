import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { temaClaro, temaEscuro } from '../../Tema'
import { Feather } from 'react-native-vector-icons'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

const { fonteRegular, fonteNegrito, corDoTexto } = temaClaro;

const CustomDrawer = () => {

    const { dados } = useContext(GlobalContext)
    const { nome } = dados;

    const botoes = [
        {
            id: '1',
            name: 'Menu',
            function: () => { },
            icon: 'menu'
        },
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
        <View style={estilos.container}>
            <View style={estilos.top}>
                <View style={estilos.viewImage}>
                    <Image style={{width: 40, height: 40}} source={require('../../../assets/camera.png')} />
                </View>
                <Text style={estilos.textTop}>{nome ? nome : '[user_name]'}</Text>
            </View>
            <View style={estilos.botoes}>
                {botoes.map(item => (
                    <TouchableOpacity style={estilos.botao} key={item.id}>
                        <Feather name={item.icon} size={24} color={corDoTexto} />
                        <Text style={estilos.textoBotao}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flexDirection: 'row', 
        marginTop: 26, 
        alignItems: 'center', 
        paddingHorizontal: 20, 
        paddingBottom: 16,
        gap: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#7d7d7d'
    },
    viewImage: {
        width: 60, 
        height: 60, 
        backgroundColor: 'rgba(125,125,125,0.6)', 
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTop: {
        fontFamily: fonteNegrito,
        color: corDoTexto,
        fontSize: 19,
        maxWidth: 180,
        maxHeight: 70
    },
    botoes: {
        marginHorizontal: 25,
        marginTop: 20,
        gap: 16
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    textoBotao: {
        fontSize: 20,
        fontFamily: fonteRegular,
        color: corDoTexto
    }
})

export default CustomDrawer