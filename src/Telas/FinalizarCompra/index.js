import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import Carrinho from './componentes/carrinho'
import Endereco from './componentes/endereco'
import { Total, TextoTotal } from './style'
import { temaClaro } from '../../Tema'
import { Botao } from '../../Componentes/Botao/botao'

const { corDoTexto } = temaClaro

const FinalizarCompra = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <TouchableOpacity
                    style={{ marginVertical: 18, marginLeft: 35 }}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back" size={32} />
                </TouchableOpacity>
                <View style={{ gap: 20 }}>
                    <Carrinho />
                    <Endereco />
                    <Total style={{ borderLeftWidth: 12, borderLeftColor: corDoTexto }}>
                        <TextoTotal>Total</TextoTotal>
                        <TextoTotal>R$ 15,00</TextoTotal>
                    </Total>
                    <View style={{ alignItems: 'center' }}>
                        <Botao 
                            children={'Continuar'}
                            corDeFundo={corDoTexto}
                            negrito
                            aoPressionar={() => navigation.navigate('Cadastrar cartão')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FinalizarCompra;