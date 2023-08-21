import styled from 'styled-components'
import { temaClaro } from '../../Tema'

const { fonteNegrito, corDoTexto, fonteRegular } = temaClaro

export const Incrementar = styled.TouchableOpacity`
    background-color: ${corDoTexto};
    width: 28px;
    height: 28px;
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
    width: 28px;
    height: 28px;
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

export const Lista = styled.View`
    background-color: #fff;
    margin: 0 36px;
    border-radius: 12px;
    padding: 16px;
    gap: 14px;
    box-shadow: 0 2px 1px #3a3a3a;
`

export const ConteudoCarrinho = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const ImagemProduto = styled.Image`
    width: 52px;
    height: 52px;
    border: solid 2px ${corDoTexto};
    border-radius: 50%;
`

export const Options = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px solid ${corDoTexto};
    border-radius: 8px;
    padding: 4px;
    gap: 18px;
`

export const InformacoesProd = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Produto = styled.View`
    gap: 5px;
    width: 245px;
`

export const TextoQuantidade = styled.Text`
    font-family: ${fonteRegular};
    font-size: 16px;
`

export const NomeProduto = styled.Text`
    font-family: ${fonteNegrito};
    font-size: 18px;
    color: ${corDoTexto};
`

export const PrecoProduto = styled.Text`
    font-family: ${fonteNegrito};
    font-size: 14.5px;
    color: ${corDoTexto};
`

export const EnderecoEntrega = styled.Text`
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    font-size: 18px;
`

export const InfoEndereco = styled.Text`
    font-family: ${fonteRegular};
    font-size: 15px;
`

export const Total = styled.View`
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 36px;
    padding: 16px;
    box-shadow: 0 2px 1px #3a3a3a;
`

export const TextoTotal = styled.Text`
    font-size: 16px;
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    text-transform: uppercase;
`

export const FirstRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`