import { StyleSheet } from "react-native";
import { tema } from "../../Tema";

const { fonteNegrito } = tema;

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        backgroundColor: '#bababa'
    },
    textTop: {
        fontFamily: fonteNegrito,
        color: '#333',
        paddingLeft: 18,
        paddingTop: 18,
        paddingBottom: 48,
        fontSize: 19
    }
})

export default estilos;