import styled from 'styled-components'
import { temaEscuro } from '../../Tema'

const { fonteRegular, fonteNegrito } = temaEscuro

export const Topo = styled.View`
    flex-direction: column;
    padding: 16px;
    align-items: flex-start;
    margin-left: 28px;
    gap: 10px;
`

export const TextoTopo = styled.Text`
    font-family: ${fonteRegular};
    font-size: 19px;
    color: #7d7d7d;
`

export const Item = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 14px;
    padding: 12px 0;
    gap: 10px;
    background-color: transparent;
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
    max-width: 224px;
`

export const ItensFavoritos = styled.View`
    margin: 0 28px;
`

export const ItemFavorito = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const TextoFavoritoVazio = styled.Text`
    font-family: ${fonteRegular};
    font-size: 16px;
    color: #7d7d7d;
    padding: 16px;
    text-align: center;
`