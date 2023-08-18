import { TouchableOpacity, Text } from "react-native";
import { temaEscuro } from "../Tema";

const { fonteNegrito, fonteRegular } = temaEscuro;

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
            style={[
                estilo,
                {
                    backgroundColor: corDeFundo,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOpacity: 0.6,
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowRadius: 2
                }]}
            disabled={desabilitado}
            onPress={aoPressionar}
            activeOpacity={0.9}
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

