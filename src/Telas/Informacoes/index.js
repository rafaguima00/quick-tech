import { View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import { ViewImage, Imagem } from './style';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons'
import Quantidade from './componentes/quantidade';
import InfoProduto from './componentes/informacoes';
import Descricao from './componentes/descricao';
import { Botao } from '../../Componentes/Botao/botao'
import { temaEscuro } from '../../Tema';
import { Snackbar } from 'react-native-paper';
import { useState, useContext, useEffect } from 'react';
import { PesquisaContext } from '../../Context/PesquisaContext';
import { CarrinhoContext } from '../../Context/CarrinhoContext';

const { corPrimaria } = temaEscuro

const Informacoes = ({ navigation }) => {

    const [snackVisible, setSnackVisible] = useState(false)
    const [mensagemSnack, setMensagemSnack] = useState('')

    const { 
        itemEscolhido, 
        handleFavorite, 
        handleBotaoFav, 
        setHandleBotaoFav,
        favorito
    } = useContext(PesquisaContext)
    const { addItemToCart } = useContext(CarrinhoContext)

    const salvarFavorito = (item) => {
        setSnackVisible(true)

        const addItem = handleFavorite(item)

        if (addItem == 'removido') {
            setMensagemSnack(`${item.name} removido dos favoritos`)
            setHandleBotaoFav(false)
        } else if (addItem == 'adicionado') {
            setMensagemSnack(`${item.name} adicionado aos favoritos`)
            setHandleBotaoFav(true)
        } else {
            setMensagemSnack('erro ao adicionar/remover favorito')
        }
    }

    const verificarFavorito = (itemEscolhido) => {
        const itemFavorito = favorito.find(item => item.id == itemEscolhido.id)

        itemFavorito ? setHandleBotaoFav(true) : setHandleBotaoFav(false)
    }

    useEffect(() => {
        verificarFavorito(itemEscolhido)
    }, [])

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
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name="arrow-back" size={32} color={corPrimaria} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => salvarFavorito(itemEscolhido)}
                    >
                        <FontAwesome
                            name={handleBotaoFav ? "heart" : "heart-o"}
                            size={28}
                            color={handleBotaoFav ? "red" : corPrimaria}
                        />
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
                            addItemToCart(itemEscolhido)
                            setSnackVisible(true)
                            setMensagemSnack(`${itemEscolhido.name} adicionado ao carrinho!`)
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
                <Text style={{ color: '#fff' }}>{mensagemSnack}</Text>
            </Snackbar>
        </SafeAreaView>
    )
}

export default Informacoes;