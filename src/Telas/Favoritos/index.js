import { Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { Snackbar } from 'react-native-paper';
import { MaterialIcons, Feather } from 'react-native-vector-icons'
import {
    TextoTopo,
    Topo,
    Imagem,
    Item,
    TextoItem,
    ItensFavoritos,
    ItemFavorito
} from './style'
import { useContext, useState } from 'react';
import { PesquisaContext } from '../../Context/PesquisaContext';

const Favoritos = ({ navigation }) => {

    const [snackVisible, setSnackVisible] = useState(false)
    const [mensagemSnack, setMensagemSnack] = useState('')

    const { favorito, handleFavorite, setItemEscolhido } = useContext(PesquisaContext)

    const salvarFavorito = (item) => {
        const addItem = handleFavorite(item)
        if (addItem == 'removido') {
            setMensagemSnack(`${item.name} removido dos favoritos`)

        } else if (addItem == 'adicionado') {
            setMensagemSnack(`${item.name} adicionado aos favoritos`)

        } else {
            setMensagemSnack('erro ao adicionar/remover favorito')
        }
    }

    function retornarDados({ item }) {
        setItemEscolhido({
            name: item.name,
            desc: item.descricao,
            avaliacao: item.avaliacao,
            price: item.price,
            image: item.image,
            id: item.id,
            desconto: item.desconto,
            quantidade: item.quantidade
        })
        navigation.navigate('Informações')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Topo>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={32} />
                </TouchableOpacity>
                <TextoTopo>Favoritos</TextoTopo>
            </Topo>
            { favorito ? <ItensFavoritos>
                {favorito.map(item => (
                    <Item
                        key={item.id}
                        activeOpacity={0.4}
                        style={{
                            borderBottomWidth: 1.5,
                            borderBottomColor: 'rgba(125,125,125,0.25)'
                        }}
                        onPress={() => retornarDados({ item })}
                    >
                        <ItemFavorito>
                            <Imagem source={{ uri: item.image }} />
                            <TextoItem>{item.name}</TextoItem>
                        </ItemFavorito>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                Alert.alert(
                                    "Remover item",
                                    `Tem certeza que deseja remover ${item.name} dos seus favoritos?`,
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => {
                                                salvarFavorito(item)
                                                setSnackVisible(true)
                                            }
                                        },
                                        {
                                            text: "Cancelar"
                                        }
                                    ]
                                )
                            }}
                        >
                            <Feather name="trash-2" size={22} color={'#BB2525'} />
                        </TouchableOpacity>
                    </Item>
                ))}
            </ItensFavoritos> : <Text>Ola</Text>}
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

export default Favoritos;