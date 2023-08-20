import styled from 'styled-components'
import { temaClaro } from '../../Tema'

const {fonteRegular} = temaClaro

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