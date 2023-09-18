import { styled } from "styled-components";
import { temaClaro } from "../../Tema";

const { 
    fonteNegrito, 
    corBotao, 
    corDeFundoTopo, 
    corDoTexto, 
    corDaBorda, 
    corPrimaria,
    fonteRegular 
} = temaClaro;

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

export const BotaoCarrinho = styled.View`
    width: 18px;
    height: 18px;
    background: red;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -10;
    top: -5;
`

export const ContentProd = styled.View`
    padding-top: 18px;
    min-height: 100%;
    background-color: ${corPrimaria};
`

export const UltimosVistos = styled.FlatList`
    flex-direction: row;
    margin: 16px 0;
    background-color: ${corBotao};
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
    margin: 8px 0;
`

export const BotaoProduto = styled.TouchableOpacity`
    background-color: ${corBotao};
    width: 180px;
    padding: 10px 0;
    border-radius: 12px;
    border: solid 1.5px ${corDaBorda};
    margin: 9px 0 9px 17px;
    box-shadow: 0 1px 1.5px #000;
`

export const ImagemProduto = styled.Image`
    width: 180px;
    height: 136px;
    margin: 4px 0;
`

export const InfoProduto = styled.View`
    margin: 0 12px;
    gap: 8px;
    justify-content: space-between;
    max-height: 45px;
    box-sizing: border-box;
`

export const NomeProduto = styled.Text`
    padding: 0;
    color: ${corDoTexto};
    font-family: ${fonteNegrito};
    height: 34px;
`

export const Item = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Price = styled.Text`
    color: #33bbc5;
    font-family: ${fonteNegrito};
`

export const BotaoProdVisto = styled.TouchableOpacity`
    background-color: ${corBotao};
    width: 200px;
    padding: 10px;
    border-radius: 12px;
    border: solid 1.5px ${corDaBorda};
    margin: 9px 0 9px 17px;
    box-shadow: 0 1px 1.5px #000;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

export const ImagemProdVisto = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 8px;
    border: solid 2px ${corDoTexto};
    margin-bottom: 8px;
`

export const InfoProdVisto = styled.View`
    margin: 0 12px;
    box-sizing: border-box;
    width: 100px;
    align-items: flex-start;
    gap: 6px;
`