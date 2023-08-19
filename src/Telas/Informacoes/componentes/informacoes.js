import { Feather } from 'react-native-vector-icons'
import { InfoProduct, NameProduct, Price, PriceProduct } from '../style'
import { produtos } from '../../../mocks/produtos'

const InfoProduto = () => {
    return (
        <InfoProduct>
            <NameProduct>{produtos[0].name}</NameProduct>
            <Price>
                <PriceProduct>R$ {produtos[0].price}</PriceProduct>
                <Feather name="star" size={18} color="#F5C03A" children={produtos[0].avaliacao} />
            </Price>
        </InfoProduct>
    )
}

export default InfoProduto