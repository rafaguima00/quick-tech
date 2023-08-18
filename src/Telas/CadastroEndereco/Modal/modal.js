import { StyleSheet } from 'react-native';
import { View, Text, ActivityIndicator } from 'react-native'
import { temaEscuro } from '../../../Tema';

const {fonteRegular} = temaEscuro;

const ModalCarregando = () => {
    return (
        <View style={estilos.modalContainer}>
            <View style={estilos.modalContent}>
                <ActivityIndicator size='small' color={'#7d7d7d'} />
                <Text style={estilos.textoCarregando}>Carregando</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(125,125,125,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        width: 110,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    textoCarregando: {
        fontFamily: fonteRegular
    }
})

export default ModalCarregando;