import styled from 'styled-components'
import { temaClaro } from '../../Tema'

const {fonteRegular, fonteNegrito, corDoTexto} = temaClaro

export const Form = styled.View`
    gap: 10px;
    padding: 0 48px 48px;
`

export const Topo = styled.View`
    flex-direction: column;
    padding: 16px;
    align-items: flex-start;
    margin-left: 28px;
    gap: 10px;
`

export const TextoTopo = styled.Text`
    font-family: ${fonteRegular};
    font-size: 17px;
    color: #7d7d7d;
`

export const Item = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 0 42px;
    padding: 12px;
    gap: 10px;
`

export const TextoItem = styled.Text`
    font-family: ${fonteNegrito};
    font-size: 16px;
    color: ${corDoTexto};
    max-width: 264px;
    margin: 8px 0;
`

export const TituloPagamento = styled.Text`
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    margin: 14px 42px;
    font-size: 20px;
`