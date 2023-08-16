import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput, Snackbar } from 'react-native-paper'
import estilos from './style';
import { useState } from 'react';
import { Botao } from '../../Componentes/botao'
import { tema } from '../../Tema';
import { MaterialIcons } from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { corPrimaria } = tema;

const Cadastro = ({ navigation }) => {

    const [dados, setDados] = useState({
        nome: '',
        email: '',
        cel: '',
        cpf: '',
        senha: '',
        confirmaSenha: ''
    })

    const { cel, confirmaSenha, email, nome, senha, cpf } = dados

    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')
    const [snackVisible, setSnackVisible] = useState(false)

    const validarCadastro = () => {
        if (email == '' || senha == '' || confirmaSenha == '' || nome == '' || cpf == '' || cel == '') {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('Preencha os campos vazios')
        } else if (senha != confirmaSenha) {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('As senhas devem ser iguais')
        } else {
            navigation.navigate('Endereço')
        }
    }

    return (
        <KeyboardAvoidingView
            style={estilos.container}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
            <View style={estilos.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={32} />
                </TouchableOpacity>
                <Text style={estilos.textTop}>Preencha os campos abaixo</Text>
            </View>
            <View style={estilos.form}>
                <TextInput
                    label="Nome completo"
                    mode='outlined'
                    autoCapitalize='words'
                    value={nome}
                    onChangeText={text => setDados({ ...dados, nome: text })}
                    error={nome == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                />
                <TextInput
                    label="E-mail"
                    mode='outlined'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={text => setDados({ ...dados, email: text })}
                    error={email == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                />
                <TextInput
                    label="Celular"
                    mode='outlined'
                    keyboardType='number-pad'
                    value={cel}
                    onChangeText={text => setDados({ ...dados, cel: text })}
                    error={cel == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                />
                <TextInput
                    label="CPF"
                    mode='outlined'
                    keyboardType='number-pad'
                    value={cpf}
                    onChangeText={text => setDados({ ...dados, cpf: text })}
                    error={cpf == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                />
                <TextInput
                    label="Senha"
                    mode='outlined'
                    autoCapitalize='none'
                    value={senha}
                    onChangeText={text => setDados({ ...dados, senha: text })}
                    error={senha == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                    secureTextEntry
                />
                <TextInput
                    label="Confirmar senha"
                    mode='outlined'
                    autoCapitalize='none'
                    value={confirmaSenha}
                    onChangeText={text => setDados({ ...dados, confirmaSenha: text })}
                    error={confirmaSenha == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                    secureTextEntry
                />
            </View>
            <Botao
                children='Próximo'
                corDeFundo={corPrimaria}
                estilo={estilos.botao}
                aoPressionar={validarCadastro}
                negrito
            />
            <Snackbar
                visible={snackVisible}
                onDismiss={() => setSnackVisible(false)}
                action={{
                    label: 'Close'
                }}
                icon={'close'}
            >
                {mensagemErro}
            </Snackbar>
        </KeyboardAvoidingView>
    )
}

export default Cadastro;