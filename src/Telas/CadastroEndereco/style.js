import { temaEscuro } from '../../Tema'
import styled from 'styled-components'

const { fonteRegular } = temaEscuro;

export const Container = styled.SafeAreaView`
    flex: 1;
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

export const Form = styled.View`
    gap: 10px;
    padding: 24px 48px;
`