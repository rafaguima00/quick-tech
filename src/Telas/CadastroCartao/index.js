import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import { Form, TextoTopo, Topo } from './style';
import { Botao } from '../../Componentes/Botao/botao'
import { temaClaro } from '../../Tema';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { TextInputMask } from 'react-native-masked-text';

const { corDoTexto } = temaClaro;

const CadastroCartao = ({ navigation }) => {

    const { dadosCartao, setDadosCartao } = useContext(GlobalContext)
    const { titular, numero, cvc, validade } = dadosCartao

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Topo>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <MaterialIcons name="arrow-back" size={32} />
                        </TouchableOpacity>
                        <TextoTopo>Preencha os dados do cartão de crédito</TextoTopo>
                    </Topo>
                    <Form>
                        <TextInputMask
                            placeholder={'Número do cartão'}
                            placeholderTextColor={corDoTexto}
                            type={'credit-card'}
                            value={numero}
                            style={estilos.entradaTexto}
                            onChangeText={text => setDadosCartao({...dadosCartao, numero: text})}
                            maxLength={19}
                        />
                        <TextInput
                            placeholder={'Nome do titular'}
                            placeholderTextColor={corDoTexto}
                            value={titular}
                            style={estilos.entradaTexto}
                            onChangeText={text => setDadosCartao({...dadosCartao, titular: text})}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <TextInputMask
                                placeholder={'MM/AA'}
                                placeholderTextColor={corDoTexto}
                                type={'datetime'}
                                style={estilos.entradaTextoInferior}
                                value={validade}
                                onChangeText={text => setDadosCartao({...dadosCartao, validade: text})}
                                maxLength={5}
                            />
                            <TextInputMask
                                placeholder={'CVC'}
                                placeholderTextColor={corDoTexto}
                                type='custom'
                                options={{
                                    mask: '9999'
                                }}
                                style={estilos.entradaTextoInferior}
                                value={cvc}
                                onChangeText={text => setDadosCartao({...dadosCartao, cvc: text})}
                            />
                        </View>
                    </Form>
                    <View style={{ alignItems: 'center', paddingBottom: 12, marginHorizontal: 48 }}>
                        <Botao
                            children={'Finalizar'}
                            corDeFundo={corDoTexto}
                            negrito
                            aoPressionar={() => console.log(dadosCartao)}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    entradaTexto: { 
        borderWidth: 1.5, 
        borderColor: corDoTexto, 
        borderRadius: 8,
        padding: 14 
    },
    entradaTextoInferior: { 
        width: 150, 
        borderWidth: 1.5, 
        borderColor: corDoTexto, 
        borderRadius: 8,
        padding: 14 
    }
})

export default CadastroCartao;