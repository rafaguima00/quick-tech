import { Feather } from 'react-native-vector-icons'
import { InfoProduct, NameProduct, Price, PriceProduct } from '../style'

const InfoProduto = ({ itemEscolhido }) => {
    return (
        <InfoProduct>
            <NameProduct>{itemEscolhido.name}</NameProduct>
            <Price>
                <PriceProduct>R$ {itemEscolhido.price}</PriceProduct>
                <Feather name="star" size={18} color="#F5C03A" children={itemEscolhido.avaliacao} />
            </Price>
        </InfoProduct>
    )
}

export default InfoProduto