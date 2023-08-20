import { View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import { ViewImage, Imagem } from './style';
import { MaterialIcons } from 'react-native-vector-icons'
import { produtos } from '../../mocks/produtos';
import Quantidade from './componentes/quantidade';
import InfoProduto from './componentes/informacoes';
import Descricao from './componentes/descricao';
import { Botao } from '../../Componentes/Botao/botao'
import { temaEscuro } from '../../Tema';
import { Snackbar } from 'react-native-paper';
import { useState } from 'react';

const { corPrimaria } = temaEscuro

const Informacoes = ({ navigation }) => {

    const [snackVisible, setSnackVisible] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <TouchableOpacity
                    style={{ marginVertical: 18, marginLeft: 35 }}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back" size={32} />
                </TouchableOpacity>
                <ViewImage>
                    <Imagem source={{ uri: produtos[0].image }} />
                </ViewImage>
                <InfoProduto />
                <Quantidade />
                <Descricao />
                <View style={{alignItems: 'center', gap: 20, paddingBottom: 12}}>
                    <Botao
                        children={'Adicionar ao carrinho'}
                        corDeFundo={'#4285F4'}
                        negrito
                        aoPressionar={() => setSnackVisible(true)}
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
                <Text style={{color: '#fff'}}>{produtos[0].name} adicionado ao carrinho!</Text>
            </Snackbar>
        </SafeAreaView>
    )
}

export default Informacoes;