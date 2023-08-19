import { temaEscuro } from "../../Tema";
import { EstiloBotao, TextoBotao } from "./bt_style";

const { fonteNegrito, fonteRegular } = temaEscuro;

export const Botao = ({
    children,
    negrito = false,
    aoPressionar,
    desabilitado = false,
    corDeFundo
}) => {
    return (
        <EstiloBotao
            style={{ backgroundColor: corDeFundo }}
            disabled={desabilitado}
            onPress={aoPressionar}
            activeOpacity={0.9}
        >
            <TextoBotao
                style={{fontFamily: (negrito ? fonteNegrito : fonteRegular)}}
            >
                {children}
            </TextoBotao>
        </EstiloBotao>
    )
}

