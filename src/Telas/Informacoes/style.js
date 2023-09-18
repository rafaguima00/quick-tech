import { temaClaro } from '../../Tema'
import styled from 'styled-components'

const { fonteNegrito, fonteRegular, corDoTexto } = temaClaro;

export const ViewImage = styled.View`
    align-items: center;
    box-shadow: 0 1.5px 2px #000;
`

export const Imagem = styled.Image`
    width: 350px;
    height: 320px;
    border-radius: 16px;
`

export const InfoProduct = styled.View`
    margin: 22px 36px;
`

export const NameProduct = styled.Text`
    font-family: ${fonteNegrito};
    font-size: 22px;
    color: ${corDoTexto};
    margin-bottom: 5px;
`

export const Price = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const PriceProduct = styled.Text`
    font-family: ${fonteNegrito};
    font-size: 17px;
    color: ${corDoTexto};
`

export const Quantity = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    margin: 0 36px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 1.5px 1px #000;
`

export const TextoQuantidade = styled.Text`
    font-family: ${fonteRegular};
    font-size: 16px;
`

export const Incrementar = styled.TouchableOpacity`
    background-color: ${corDoTexto};
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export const SinalMais = styled.Text`
    color: #fff;
    font-family: ${fonteNegrito};
    font-size: 22px;
`

export const Diminuir = styled.TouchableOpacity`
    background-color: #fff;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: solid 2px ${corDoTexto}
`

export const SinalMenos = styled.Text`
    color: ${corDoTexto};
    font-family: ${fonteNegrito};
    font-size: 22px;
`

export const Desc = styled.Text`
    font-family: ${fonteRegular};
    font-size: 15px;
    color: ${corDoTexto};
    max-height: 148px;
    text-align: justify;
`

export const MostrarMais = styled.Text`
    color: #7d7d7d;
    font-family: ${fonteNegrito};
`