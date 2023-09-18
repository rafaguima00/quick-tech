import { Feather } from 'react-native-vector-icons'
import { InfoProduct, NameProduct, Price, PriceProduct } from '../style'
import formatCurrency from '../../../Servicos/formatCurrency';
import { useContext } from 'react';
import { PesquisaContext } from '../../../Context/PesquisaContext';

const InfoProduto = () => {

    const { itemEscolhido } = useContext(PesquisaContext)

    const quantidade = itemEscolhido.quantidade
    const precoFinal = (
        itemEscolhido.desconto ? 
        (itemEscolhido.price * itemEscolhido.desconto) * quantidade : 
        itemEscolhido.price * quantidade
    )

    return (
        <InfoProduct>
            <NameProduct>{itemEscolhido.name}</NameProduct>
            <Price>
                <PriceProduct>
                    {formatCurrency(precoFinal, 'BRL')}
                </PriceProduct>
                <Feather name="star" size={18} color="#F5C03A" children={itemEscolhido.avaliacao} />
            </Price>
        </InfoProduct>
    )
}

export default InfoProduto