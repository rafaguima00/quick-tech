import { TextInput, Snackbar } from "react-native-paper";
import { Text, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import estilos from "./style";
import { MaterialIcons } from 'react-native-vector-icons'
import { useState } from "react";
import { tema } from "../../Tema";
import { Botao } from '../../Componentes/botao'
import { ScrollView } from "react-native";

const CadastroEndereco = ({navigation}) => {

    const [dadosEndereco, setDadosEndereco] = useState({
        cep: '',
        cidade: '',
        estado: '',
        rua: '',
        bairro: '',
        numero: '',
        complemento: ''
    })

    const { bairro, cep, cidade, complemento, estado, numero, rua } = dadosEndereco

    const { corPrimaria } = tema

    return (
        <KeyboardAvoidingView
            style={estilos.container}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
            <ScrollView>
                <View style={estilos.top}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <Text style={estilos.textTop}>Preencha os campos abaixo</Text>
                </View>
                <View style={estilos.form}>
                    <TextInput
                        label='Digite seu CEP'
                        mode='outlined'
                        keyboardType='number-pad'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                    <TextInput
                        label='Cidade'
                        mode='outlined'
                        autoCapitalize='words'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                    <TextInput
                        label='Estado'
                        mode='outlined'
                        autoCapitalize='words'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                    <TextInput
                        label='Bairro'
                        mode='outlined'
                        autoCapitalize='words'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                    <TextInput
                        label='Rua'
                        mode='outlined'
                        autoCapitalize='words'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                    <TextInput
                        label='Número'
                        mode='outlined'
                        keyboardType='number-pad'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />

                    <TextInput
                        label='Complemento'
                        mode='outlined'
                        value={cep}
                        onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                        activeOutlineColor={corPrimaria}
                    />
                </View>
                <Botao
                    children={'Próximo'}
                    corDeFundo={corPrimaria}
                    estilo={estilos.botao}
                    negrito
                    aoPressionar={() => navigation.navigate('')}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default CadastroEndereco;