import { Image, Platform, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
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
    const [secureText, setSecureText] = useState(true)

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
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../../assets/logo.png')} />
                    </View>
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
                            secureTextEntry={secureText}
                            activeOutlineColor={corPrimaria}
                            right={
                                <TextInput.Icon 
                                    icon={secureText ? "eye" : "eye-off"} 
                                    onPress={() => setSecureText(!secureText)} 
                                />
                            }
                        />
                    </Form>
                    <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
                        <TextoCadastro>Ainda não tem uma conta?</TextoCadastro>
                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                            <TextoDestaque>Cadastre-se aqui</TextoDestaque>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <TextoDestaque style={{ textDecorationLine: 'none', marginVertical: 13 }}>
                            Esqueci a senha
                        </TextoDestaque>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', paddingBottom: 12, marginHorizontal: 48 }}>
                        <Botao
                            children='Login'
                            corDeFundo={corPrimaria}
                            aoPressionar={validarLogin}
                            negrito
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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