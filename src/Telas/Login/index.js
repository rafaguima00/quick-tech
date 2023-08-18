import { Text, Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import { TextInput, Snackbar } from 'react-native-paper'
import { Botao } from '../../Componentes/botao';
import { temaEscuro } from '../../Tema';
import estilos from './style';
import { TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

const { corPrimaria } = temaEscuro;

const Login = ({ navigation }) => {

    const { dados, setDados } = useContext(GlobalContext)
    const { email, senha } = dados;

    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')
    const [snackVisible, setSnackVisible] = useState(false)

    const validarLogin = () => {
        if (email == '' || senha == '') {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('Preencha os campos vazios')
        } else if (email !== 'teste@email.com' || senha !== '123456') {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('E-mail ou senha não conferem')
        } else {
            navigation.replace('Menu')
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
            style={estilos.container}
        >
            <Image source={require('../../../assets/logo.png')} />
            <View style={estilos.form}>
                <TextInput
                    label='E-mail'
                    mode='outlined'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={text => setDados({ ...dados, email: text })}
                    error={email == '' ? erro : ''}
                    activeOutlineColor={corPrimaria}
                />
                <TextInput
                    label='Senha'
                    mode='outlined'
                    autoCapitalize='none'
                    value={senha}
                    onChangeText={text => setDados({ ...dados, senha: text })}
                    error={senha == '' ? erro : ''}
                    secureTextEntry
                    activeOutlineColor={corPrimaria}
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 4 }}>
                <Text style={estilos.textoCadastro}>Ainda não tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={estilos.textoDestaque}>Cadastre-se aqui</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={[estilos.textoDestaque, { textDecorationLine: 'none', marginTop: 7 }]}>
                    Esqueci a senha
                </Text>
            </TouchableOpacity>
            <Botao
                estilo={estilos.botao}
                children={'Login'}
                negrito
                corDeFundo={corPrimaria}
                aoPressionar={validarLogin}
            />
            <Snackbar
                visible={snackVisible}
                onDismiss={() => setSnackVisible(false)}
                action={{
                    label: 'Close'
                }}
            >
                {mensagemErro}
            </Snackbar>
        </KeyboardAvoidingView>
    )
}

export default Login;