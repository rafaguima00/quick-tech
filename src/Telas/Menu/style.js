import { StyleSheet } from "react-native";
import { temaEscuro, temaClaro } from "../../Tema";

const { 
    fonteNegrito, 
    corBotao, 
    corDeFundoTopo, 
    corDoTexto, 
    corDaBorda, 
    bordaTopo, 
    corPrimaria, 
    sombra } = temaClaro;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: corDeFundoTopo,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderBottomWidth: 2,
        borderBottomColor: bordaTopo
    },
    textTop: {
        fontFamily: fonteNegrito,
        color: corDoTexto,
        fontSize: 18,
        width: 180,
        maxHeight: 70
    },
    contentProducts: { 
        paddingTop: 18,
        backgroundColor: '#fff',
        minHeight: '100%',
        backgroundColor: corPrimaria
    },
    allProducts: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginVertical: 16 
    },
    textTopRelease: {
        fontFamily: fonteNegrito,
        color: corDoTexto,
        paddingLeft: 18,
        fontSize: 24
    },
    info: {
        backgroundColor: corBotao, 
        width: 180, 
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: corDaBorda,
        marginLeft: 17,
        marginVertical:  9,
        shadowColor: sombra,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 1
    },
    image: {
        width: 130, 
        height: 130,
        borderRadius: 8,
        marginBottom: 8,
        marginLeft: 24,
        justifyContent: 'center'
    },
    infoProducts: { 
        marginHorizontal: 12, 
        gap: 8, 
        justifyContent: 'space-between', 
        height: 75 
    },    
    productName: {
        color: corDoTexto,
        fontFamily: fonteNegrito,
        maxHeight: 52,
        textTransform: 'uppercase'
    },
    item: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 15, 
        justifyContent: 'space-between' 
    },
    price: {
        color: '#33BBC5',
        textDecorationLine: 'underline',
        fontFamily: fonteNegrito
    }
})

export default estilos;