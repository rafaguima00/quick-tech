import styled from 'styled-components'
import { temaClaro } from '../../Tema'

const { fonteRegular, fonteNegrito, corDoTexto } = temaClaro;

export const Topo = styled.View`
    flex-direction: row;
    margin-top: 26px;
    align-items: center;
    padding: 0 20px 16px;
    gap: 14px;
`

export const ViewImage = styled.View`
    width: 60px;
    height: 60px;
    background-color: rgba(125,125,125,0.6);
    border-radius: 32px;
    justify-content: center;
    align-items: center;
`

export const TextoTopo = styled.Text`
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    font-size: 19px;
    max-width: 180px;
    max-height: 70px;
`

export const Lista = styled.View`
    margin: 20px 25px 0;
    gap: 16px;
`

export const Botao = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const TextoBotao = styled.Text`
    font-size: 19px;
    font-family: ${fonteRegular};
    color: ${corDoTexto};
`