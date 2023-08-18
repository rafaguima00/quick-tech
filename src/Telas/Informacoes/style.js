import { StyleSheet } from "react-native";
import { temaClaro } from '../../Tema'

const { fonteNegrito, fonteRegular, corDoTexto } = temaClaro;

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    viewImage: {
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    productImage: {
        width: 350,
        height: 320,
        borderRadius: 15
    },
    informacoes: {
        marginHorizontal: 36,
        marginVertical: 20
    },
    nomeProduto: {
        fontFamily: fonteNegrito,
        fontSize: 22,
        color: corDoTexto,
        marginBottom: 5
    },
    price: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    priceProd: {
        fontFamily: fonteNegrito,
        fontSize: 17,
        color: corDoTexto
    },
    quantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 36,
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2
    },
    textoQuantidade: {
        fontFamily: fonteRegular,
        fontSize: 16
    },
    botaoIncrementa: {
        backgroundColor: corDoTexto,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    sinalMais: {
        color: '#fff',
        fontSize: 22,
        fontFamily: fonteNegrito
    },
    botaoDiminui: {
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: corDoTexto
    },
    sinalMenos: {
        color: corDoTexto,
        fontSize: 22,
        fontFamily: fonteNegrito
    },
    descricao: {
        fontFamily: fonteRegular,
        fontSize: 15,
        color: corDoTexto,
        maxHeight: 148
    },
    botao: {
        paddingVertical: 16,
        marginBottom: 16
    }
})

export default estilos;