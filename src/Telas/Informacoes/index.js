import { View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import { ViewImage, Imagem } from './style';
import { MaterialIcons, Feather } from 'react-native-vector-icons'
import Quantidade from './componentes/quantidade';
import InfoProduto from './componentes/informacoes';
import Descricao from './componentes/descricao';
import { Botao } from '../../Componentes/Botao/botao'
import { temaEscuro } from '../../Tema';
import { Snackbar } from 'react-native-paper';
import { useState, useContext } from 'react';
import { PesquisaContext } from '../../Context/PesquisaContext';
import { CarrinhoContext } from '../../Context/CarrinhoContext';

const { corPrimaria } = temaEscuro

const Informacoes = ({ navigation }) => {

    const [snackVisible, setSnackVisible] = useState(false)

    const { itemEscolhido } = useContext(PesquisaContext)
    const { adicionarAoCarrinho } = useContext(CarrinhoContext)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 35,
                    marginVertical: 18
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="heart" size={28} />
                    </TouchableOpacity>
                </View>
                <ViewImage>
                    <Imagem source={{ uri: itemEscolhido.image }} />
                </ViewImage>
                <InfoProduto />
                <Quantidade />
                <Descricao />
                <View style={{ alignItems: 'center', gap: 20, marginBottom: 36, marginHorizontal: 36 }}>
                    <Botao
                        children={'Adicionar ao carrinho'}
                        corDeFundo={'#4285F4'}
                        negrito
                        aoPressionar={() => {
                            adicionarAoCarrinho(itemEscolhido)
                            setSnackVisible(true)
                        }}
                    />
                    <Botao
                        children={'Finalizar compra'}
                        corDeFundo={corPrimaria}
                        negrito
                        aoPressionar={() => navigation.navigate('Finalizar compra')}
                    />
                </View>
            </ScrollView>
            <Snackbar
                visible={snackVisible}
                onDismiss={() => setSnackVisible(false)}
                action={{
                    label: 'Close'
                }}
            >
                <Text style={{ color: '#fff' }}>{itemEscolhido.name} adicionado ao carrinho!</Text>
            </Snackbar>
        </SafeAreaView>
    )
}

export default Informacoes;