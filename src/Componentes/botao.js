import { TouchableOpacity, Text } from "react-native";
import { tema } from "../Tema";

const { fonteNegrito, fonteRegular } = tema;

export const Botao = ({ 
    children,
    negrito = false,
    corDeFundo,
    estilo,
    aoPressionar,
    desabilitado = false
}) => {
    return (
        <TouchableOpacity
            style={[estilo, {
                backgroundColor: corDeFundo,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
            }]}
            disabled={desabilitado}
            onPress={aoPressionar}
            activeOpacity={0.5}
        >
            <Text
                style={{
                    fontFamily: (negrito ? fonteNegrito : fonteRegular),
                    fontSize: 17,
                    color: '#fff',
                    textAlign: 'center'
                }}
            >{children}</Text>
        </TouchableOpacity>
    )
}

