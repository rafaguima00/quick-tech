import { View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import estilos from './style';
import { MaterialIcons } from 'react-native-vector-icons'
import { produtos } from '../../mocks/produtos';
import Quantidade from './componentes/quantidade';
import InfoProduto from './componentes/informacoes';
import Descricao from './componentes/descricao';
import { Botao } from '../../Componentes/botao'
import { temaEscuro } from '../../Tema';

const { corPrimaria } = temaEscuro

const Informacoes = ({ navigation }) => {

    return (
        <SafeAreaView style={estilos.container}>
            <ScrollView>
                <TouchableOpacity
                    style={{ marginVertical: 18, marginLeft: 35 }}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back" size={32} />
                </TouchableOpacity>
                <View style={estilos.viewImage}>
                    <Image source={{ uri: produtos[0].image }} style={estilos.productImage} />
                </View>
                <InfoProduto />
                <Quantidade />
                <Descricao />
                <View style={{marginHorizontal: 36}}>
                    <Botao 
                        children={'Adicionar ao carrinho'}
                        corDeFundo={'#4285F4'}
                        negrito
                        estilo={estilos.botao}
                    />
                    <Botao 
                        children={'Finalizar compra'}
                        corDeFundo={corPrimaria}
                        negrito
                        estilo={estilos.botao}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Informacoes;