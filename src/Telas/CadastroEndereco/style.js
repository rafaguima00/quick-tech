import { StyleSheet } from "react-native";
import { temaEscuro } from '../../Tema'

const { fonteRegular } = temaEscuro;

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 28,
        marginTop: 25,
        gap: 10
    },
    textTop: {
        fontFamily: fonteRegular,
        fontSize: 17,
        color: '#7d7d7d'
    },
    form: {
        marginTop: 28,
        marginBottom: 20,
        gap: 10,
        width: '100%',
        paddingHorizontal: 48
    },
    botao: {
        marginTop: 22,
        paddingVertical: 16,
        marginHorizontal: 48,
        width: '77%'
    },
})

export default estilos;