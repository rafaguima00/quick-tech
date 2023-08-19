import styled from 'styled-components'
import { temaClaro } from '../../Tema'

const { fonteNegrito } = temaClaro;

export const TextoEscrito = styled.TextInput`
    padding: 13px;
    margin: 10px 25px;
    border: 2px solid #7d7d7d;
    border-radius: 10px;
`

export const ItensFiltrados = styled.View`
    background-color: rgba(125,125,125,0.25);
    margin: 0 28px;
    border-radius: 10px;
`

export const Item = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 0 14px;
    padding: 12px 0;
    gap: 10px;
`

export const Imagem = styled.Image`
    width: 45px;
    height: 45px;
    margin-left: 10px;
    border-radius: 5%;
`

export const TextoItem = styled.Text`
    font-family: ${fonteNegrito};
    color: #3a3a3a;
    max-width: 264px;
`