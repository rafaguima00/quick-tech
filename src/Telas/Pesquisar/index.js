import {
    Platform,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Text
} from "react-native";
import { Imagem, Item, ItensFiltrados, TextoEscrito, TextoItem } from "./style";
import { useContext } from "react";
import { produtos } from '../../Mocks/produtos'
import { MaterialIcons } from 'react-native-vector-icons'
import { PesquisaContext } from '../../Context/PesquisaContext'

const Pesquisa = ({ navigation }) => {

    const {
        pesquisar,
        setPesquisar,
        itensFiltrados,
        setItensFiltrados,
        setItemEscolhido,
        handleProdutoVisto
    } = useContext(PesquisaContext)

    function filtrarItens(text) {
        if (text) {
            const resultadoPesquisa = produtos.filter(
                item => item.name.toLowerCase().includes(text.toLowerCase())
            )
            setItensFiltrados(resultadoPesquisa)
        }
        setPesquisar(text)
    }

    function retornarDados({ item }) {
        setItemEscolhido({
            name: item.name,
            image: item.image,
            price: item.price,
            avaliacao: item.avaliacao,
            desc: item.descricao,
            id: item.id,
            desconto: item.desconto,
            quantidade: item.quantidade
        })
        navigation.navigate('Informações')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <ScrollView>
                    <TouchableOpacity style={{ marginTop: 25, marginLeft: 25 }} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <TextoEscrito
                        placeholder="Digite aqui para pesquisar"
                        value={pesquisar}
                        onChangeText={text => filtrarItens(text)}
                    />
                    <ItensFiltrados>
                        {itensFiltrados.map(item => (
                            <Item
                                style={{
                                    borderBottomColor: '#7d7d7d',
                                    borderBottomWidth: 1.5
                                }}
                                key={item.id}
                                activeOpacity={0.4}
                                onPress={() => {
                                    retornarDados({ item })
                                    handleProdutoVisto(item)
                                }}
                            >
                                <Imagem source={{ uri: item.image }} />
                                <TextoItem>{item.name}</TextoItem>
                            </Item>
                        ))}
                    </ItensFiltrados>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Pesquisa;