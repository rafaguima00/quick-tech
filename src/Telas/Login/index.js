import { Image, Platform, View, TouchableOpacity } from 'react-native'
import { TextInput, Snackbar } from 'react-native-paper'
import { Botao } from '../../Componentes/Botao/botao';
import { temaEscuro } from '../../Tema';
import { Container, Form, TextoCadastro, TextoDestaque } from './style';
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
        <Container
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
            <Image source={require('../../../assets/logo.png')} />
            <Form>
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
            </Form>
            <View style={{ flexDirection: 'row', gap: 4 }}>
                <TextoCadastro>Ainda não tem uma conta?</TextoCadastro>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <TextoDestaque>Cadastre-se aqui</TextoDestaque>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <TextoDestaque style={{ textDecorationLine: 'none', marginVertical: 13 }}>
                    Esqueci a senha
                </TextoDestaque>
            </TouchableOpacity>
            <Botao
                children={'Login'}
                negrito
                aoPressionar={validarLogin}
                corDeFundo={corPrimaria}
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
        </Container>
    )
}

export default Login;