import { styled } from "styled-components";
import { temaClaro } from "../../Tema";

const { 
    fonteNegrito, 
    corBotao, 
    corDeFundoTopo, 
    corDoTexto, 
    corDaBorda, 
    corPrimaria } = temaClaro;

export const Topo = styled.View`
    background-color: ${corDeFundoTopo};
    height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
`

export const TextoTopo = styled.Text`
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    font-size: 18px;
    width: 180px;
    max-height: 70px;
`

export const ContentProd = styled.View`
    padding-top: 18px;
    min-height: 100%;
    background-color: ${corPrimaria};
`

export const News = styled.Text`
    font-family: ${fonteNegrito};
    color: ${corDoTexto};
    padding-left: 18px;
    font-size: 24px;
`

export const Products = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 16px 0;
`

export const BotaoProduto = styled.TouchableOpacity`
    background-color: ${corBotao};
    width: 180px;
    padding: 12px 0;
    border-radius: 12px;
    border: solid 1.5px ${corDaBorda};
    margin: 9px 0 9px 17px;
    box-shadow: 0 1px 1.5px #000;
`

export const ImagemProduto = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 8px;
    margin-bottom: 8px;
`

export const InfoProduto = styled.View`
    margin: 0 12px;
    gap: 8px;
    justify-content: space-between;
    height: 75px;
`

export const NomeProduto = styled.Text`
    color: ${corDoTexto};
    font-family: ${fonteNegrito};
    max-height: 52px;
    text-transform: uppercase;
`

export const Item = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.Text`
    color: #33bbc5;
    text-decoration: underline;
    text-decoration-color: #33bbc5;
    font-family: ${fonteNegrito};
`