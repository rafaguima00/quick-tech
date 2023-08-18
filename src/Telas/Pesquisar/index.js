import {
    TextInput,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import estilos from "./style";
import { useContext } from "react";
import { produtos } from '../../mocks/produtos'
import { MaterialIcons } from 'react-native-vector-icons'
import { Platform } from "react-native";
import { PesquisaContext } from '../../Context/PesquisaContext'

const Pesquisa = ({ navigation }) => {

    const { pesquisar, setPesquisar, itensFiltrados, setItensFiltrados } = useContext(PesquisaContext)

    function filtrarItens(text) {
        if (text) {
            const resultadoPesquisa = produtos.filter(
                item => item.name.toLowerCase().includes(text.toLowerCase())
            )
            setItensFiltrados(resultadoPesquisa)
        }
        setPesquisar(text)
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <ScrollView>
                    <TouchableOpacity style={{ marginTop: 25, marginLeft: 25 }} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Digite aqui para pesquisar"
                        style={estilos.textInput}
                        value={pesquisar}
                        onChangeText={text => filtrarItens(text)}
                    />
                    <View style={estilos.itensFiltrados}>
                        {itensFiltrados.map(item => (
                            <TouchableOpacity 
                                style={estilos.items} 
                                key={item.id} 
                                activeOpacity={0.4}
                                onPress={() => navigation.navigate('Informações')}
                            >
                                <Image source={{ uri: item.image }} style={estilos.image} />
                                <Text style={estilos.textItems}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Pesquisa;