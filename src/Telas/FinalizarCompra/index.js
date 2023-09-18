import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import Carrinho from './componentes/carrinho'
import Endereco from './componentes/endereco'
import { Total, TextoTotal } from './style'
import { temaClaro } from '../../Tema'
import { Botao } from '../../Componentes/Botao/botao'
import { useContext } from 'react'
import formatCurrency from '../../Servicos/formatCurrency'
import { CarrinhoContext } from '../../Context/CarrinhoContext'
import { GlobalContext } from '../../Context/GlobalContext'

const { corDoTexto } = temaClaro

const FinalizarCompra = ({ navigation }) => {

    const { cartItem } = useContext(CarrinhoContext)
    const { dadosEndereco } = useContext(GlobalContext)

    const totalPrice = cartItem.reduce((acc, item) => {
        const itemPrice = item.desconto ? (item.price * item.desconto) : item.price;
        return (itemPrice * item.quantidade) + acc;
    }, 0)

    const avancar = () => {
        (cartItem.length > 0 && dadosEndereco.cep ) &&
        navigation.navigate('Cadastrar cartão')
    }

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
                        aoPressionar={avancar}
                    />
                </View>
            </View>
            {/* reaproveitar o snackbar e adicioná-lo aqui */}
        </SafeAreaView>
    )
}

export default FinalizarCompra;