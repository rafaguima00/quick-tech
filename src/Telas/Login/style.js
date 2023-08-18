import { StyleSheet } from "react-native";
import { temaEscuro } from "../../Tema";

const { fonteRegular } = temaEscuro;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
        width: '77%'
    },
    textoCadastro: {
        fontFamily: fonteRegular,
        fontSize: 14.5
    },
    textoDestaque: {
        color: '#3968B4',
        textDecorationLine: 'underline',
        fontFamily: fonteRegular,
        fontSize: 14.5
    }
})

export default estilos;