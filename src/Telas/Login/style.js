import { temaEscuro } from "../../Tema";
import styled from 'styled-components'

const { fonteRegular } = temaEscuro;

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: #fff;
`

export const Form = styled.View`
    margin-top: 28px;
    margin-bottom: 20px;
    gap: 10px;
    width: 100%;
    padding: 0 48px;
`

export const TextoCadastro = styled.Text`
    font-size: 15px;
    font-family: ${fonteRegular};
`

export const TextoDestaque = styled.Text`
    color: #3968B4;
    text-decoration: underline;
    text-decoration-color: #3968B4;
    font-size: 15px;
    font-family: ${fonteRegular};
`