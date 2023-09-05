import { Feather } from 'react-native-vector-icons'
import { InfoProduct, NameProduct, Price, PriceProduct } from '../style'
import formatCurrency from '../../../Utils/formatCurrency';
import { useContext } from 'react';
import { PesquisaContext } from '../../../Context/PesquisaContext';

const InfoProduto = () => {

    const { itemEscolhido } = useContext(PesquisaContext)

    const quantidade = itemEscolhido.quantidade
    const precoFinal = itemEscolhido.price * itemEscolhido.desconto

    return (
        <InfoProduct>
            <NameProduct>{itemEscolhido.name}</NameProduct>
            <Price>
                <PriceProduct>
                    {
                        itemEscolhido.desconto != 0 ? 
                        formatCurrency((precoFinal) * quantidade, 'BRL') : 
                        formatCurrency(itemEscolhido.price * quantidade, 'BRL')
                    }
                </PriceProduct>
                <Feather name="star" size={18} color="#F5C03A" children={itemEscolhido.avaliacao} />
            </Price>
        </InfoProduct>
    )
}

export default InfoProduto