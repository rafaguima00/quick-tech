import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import Carrinho from './componentes/carrinho'
import Endereco from './componentes/endereco'
import { Total, TextoTotal } from './style'
import { temaClaro } from '../../Tema'
import { Botao } from '../../Componentes/Botao/botao'
import { useContext } from 'react'
import formatCurrency from '../../Utils/formatCurrency'
import { CarrinhoContext } from '../../Context/CarrinhoContext'

const { corDoTexto } = temaClaro

const FinalizarCompra = ({ navigation }) => {

    const { cartItem } = useContext(CarrinhoContext)

    const totalPrice = cartItem.reduce((acc, item) => {
        const itemPrice = item.desconto ? (item.price * item.desconto) : item.price;
        return (itemPrice * item.quantidade) + acc;
    }, 0)

    console.log(cartItem)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
                style={{ marginVertical: 18, marginLeft: 35 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={32} />
            </TouchableOpacity>
            <View style={{ gap: 20 }}>
                <Carrinho />
                <Endereco />
                <Total style={{ borderLeftWidth: 10, borderLeftColor: corDoTexto }}>
                    <TextoTotal>Total</TextoTotal>
                    <TextoTotal>{formatCurrency(totalPrice, 'BRL')}</TextoTotal>
                </Total>
                <View style={{ alignItems: 'center', marginHorizontal: 35 }}>
                    <Botao
                        children={'Continuar'}
                        corDeFundo={corDoTexto}
                        negrito
                        aoPressionar={() => navigation.navigate('Cadastrar cartão')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FinalizarCompra;