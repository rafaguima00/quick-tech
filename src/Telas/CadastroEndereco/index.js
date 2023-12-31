import { TextInput, Snackbar } from "react-native-paper";
import { KeyboardAvoidingView, View, TouchableOpacity, ScrollView, Modal, Platform } from 'react-native'
import { Container, Topo, TextoTopo, Form } from "./style";
import { MaterialIcons } from 'react-native-vector-icons'
import { useState, useContext } from "react";
import { temaEscuro } from "../../Tema";
import { Botao } from '../../Componentes/Botao/botao'
import ModalCarregando from "./Modal/modal";
import { GlobalContext } from '../../Context/GlobalContext'
import api from "../../Servicos/api";

const CadastroEndereco = ({ navigation }) => {

    const { dadosEndereco, setDadosEndereco } = useContext(GlobalContext)
    const {
        bairro,
        cep,
        cidade,
        complemento,
        estado,
        numero,
        rua
    } = dadosEndereco;

    const { corPrimaria } = temaEscuro

    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')
    const [snackVisible, setSnackVisible] = useState(false)

    async function buscarDados(cepDigitado) {
        try {
            const result = await api.get(`/${cepDigitado}/json/`)

            if (result) {
                setDadosEndereco({
                    ...dadosEndereco,
                    rua: result.data.logradouro,
                    cidade: result.data.localidade,
                    bairro: result.data.bairro,
                    estado: result.data.uf
                })
            }
        } catch {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('CEP inválido')
        }
    }

    function validarDados() {
        if (
            bairro == '' ||
            cep == '' ||
            cidade == '' ||
            estado == '' ||
            rua == '') {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('Preencha os campos vazios')
        } else if(cep.length != 8) {
            setErro(true)
            setSnackVisible(true)
            setMensagemErro('CEP inválido')
        } else {
            navigation.replace('Menu')
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                            onBlur={() => buscarDados(cep)}
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
                        />

                        <TextInput
                            label='Complemento (opcional)'
                            mode='outlined'
                            value={complemento}
                            onChangeText={text => setDadosEndereco({ ...dadosEndereco, complemento: text })}
                            activeOutlineColor={corPrimaria}
                        />
                    </Form>
                    <View style={{ alignItems: 'center', paddingBottom: 12, marginHorizontal: 48 }}>
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
