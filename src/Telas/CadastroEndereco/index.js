import { TextInput, Snackbar } from "react-native-paper";
import { KeyboardAvoidingView, View, TouchableOpacity, ScrollView, Modal, Platform } from 'react-native'
import { Container, Topo, TextoTopo, Form } from "./style";
import { MaterialIcons } from 'react-native-vector-icons'
import { useState, useContext } from "react";
import { temaEscuro } from "../../Tema";
import { Botao } from '../../Componentes/Botao/botao'
import ModalCarregando from "./Modal/modal";
import { GlobalContext } from '../../Context/GlobalContext'

const CadastroEndereco = ({ navigation }) => {

    const { dadosEndereco, setDadosEndereco } = useContext(GlobalContext)
    const {
        bairro,
        cep,
        cidade,
        complemento,
        estado,
        numero,
        rua } = dadosEndereco;

    const { corPrimaria } = temaEscuro

    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')
    const [snackVisible, setSnackVisible] = useState(false)

    function validarDados() {
        if (
            bairro == '' ||
            cep == '' ||
            cidade == '' ||
            estado == '' ||
            numero == '' ||
            rua == '') {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('Preencha os campos vazios')
        } else {
            navigation.replace('Menu')
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
            >
                <ScrollView>
                    <Topo>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={32} />
                        </TouchableOpacity>
                        <TextoTopo>Preencha os dados do seu endereço</TextoTopo>
                    </Topo>
                    <Form>
                        <TextInput
                            label='Digite seu CEP'
                            mode='outlined'
                            keyboardType='number-pad'
                            value={cep}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, cep: text })}
                            activeOutlineColor={corPrimaria}
                            error={cep == '' ? erro : ''}
                        />
                        <TextInput
                            label='Cidade'
                            mode='outlined'
                            autoCapitalize='words'
                            value={cidade}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, cidade: text })}
                            activeOutlineColor={corPrimaria}
                            error={cidade == '' ? erro : ''}
                        />
                        <TextInput
                            label='Estado'
                            mode='outlined'
                            autoCapitalize='words'
                            value={estado}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, estado: text })}
                            activeOutlineColor={corPrimaria}
                            error={estado == '' ? erro : ''}
                        />
                        <TextInput
                            label='Bairro'
                            mode='outlined'
                            autoCapitalize='words'
                            value={bairro}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, bairro: text })}
                            activeOutlineColor={corPrimaria}
                            error={bairro == '' ? erro : ''}
                        />
                        <TextInput
                            label='Rua'
                            mode='outlined'
                            autoCapitalize='words'
                            value={rua}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, rua: text })}
                            activeOutlineColor={corPrimaria}
                            error={rua == '' ? erro : ''}
                        />
                        <TextInput
                            label='Número'
                            mode='outlined'
                            keyboardType='number-pad'
                            value={numero}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, numero: text })}
                            activeOutlineColor={corPrimaria}
                            error={numero == '' ? erro : ''}
                        />

                        <TextInput
                            label='Complemento (opcional)'
                            mode='outlined'
                            value={complemento}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, complemento: text })}
                            activeOutlineColor={corPrimaria}
                        />
                    </Form>
                    <View style={{alignItems: 'center', paddingBottom: 12}}>
                        <Botao
                            children={'Próximo'}
                            corDeFundo={corPrimaria}
                            negrito
                            aoPressionar={validarDados}
                        />
                    </View>
                    <Modal
                        visible={carregando}
                        transparent={true}
                        onRequestClose={() => { }}
                        animationType='fade'
                    >
                        <ModalCarregando />
                    </Modal>
                </ScrollView>
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
        </Container>
    )
}

export default CadastroEndereco;