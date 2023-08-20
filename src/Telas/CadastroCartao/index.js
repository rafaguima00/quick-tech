import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import { TextInput } from 'react-native-paper'
import { Form, TextoTopo, Topo } from './style';
import { Botao } from '../../Componentes/Botao/botao'
import { temaClaro } from '../../Tema';

const { corDoTexto } = temaClaro;

const CadastroCartao = ({ navigation }) => {
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
                        <TextInput
                            label={'Número do cartão'}
                            mode='outlined'
                        />
                        <TextInput
                            label={'Nome do titular'}
                            mode='outlined'
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <TextInput
                                label={'MM/AA'}
                                mode='outlined'
                                style={{ width: 150 }}
                            />
                            <TextInput
                                label={'CVC'}
                                mode='outlined'
                                style={{ width: 150 }}
                            />
                        </View>
                    </Form>
                    <View style={{ alignItems: 'center', paddingBottom: 12 }}>
                        <Botao
                            children={'Finalizar'}
                            corDeFundo={corDoTexto}
                            negrito
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default CadastroCartao;