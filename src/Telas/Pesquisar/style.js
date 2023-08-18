import { StyleSheet } from "react-native";
import { temaClaro } from '../../Tema'

const { fonteNegrito } = temaClaro;

const estilos = StyleSheet.create({
    textInput: {
        padding: 13,
        marginHorizontal: 25,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#7d7d7d',
        borderRadius: 10
    },
    itensFiltrados: {
        backgroundColor: 'rgba(125,125,125,0.25)',
        marginHorizontal: 28,
        borderRadius: 10
    },
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        borderBottomColor: '#3a3a3a',
        borderBottomWidth: 1,
        paddingVertical: 12,
        gap: 10
    },
    image: {
        width: 45,
        height: 45,
        marginLeft: 10
    },
    textItems: {
        fontFamily: fonteNegrito,
        maxWidth: 264,
        color: '#3a3a3a'
    }
})

export default estilos;