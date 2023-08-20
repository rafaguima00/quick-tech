import { View, Text, TouchableOpacity } from "react-native";
import { Lista, EnderecoEntrega, InfoEndereco } from '../style'
import { Feather } from 'react-native-vector-icons'
import { useContext } from "react";
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigation } from "@react-navigation/native";

const Endereco = () => {

    const navigation = useNavigation();

    const { dadosEndereco } = useContext(GlobalContext)
    const { cep, cidade, estado, bairro, rua, numero, complemento } = dadosEndereco;

    return (
        <Lista>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: '#3a3a3a',
                borderBottomWidth: 1,
                paddingBottom: 8
            }}>
                <EnderecoEntrega>Endereço de entrega</EnderecoEntrega>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate('Endereço')}
                >
                    <Feather name="edit" size={24} color={'#3a3a3a'} />
                </TouchableOpacity>
            </View>
            <View style={{ gap: 6 }}>
                <InfoEndereco>CEP: {cep}</InfoEndereco>
                <InfoEndereco>{rua}, {numero} - {bairro} - {cidade} - {estado}</InfoEndereco>
                <InfoEndereco>Complemento: {complemento}</InfoEndereco>
            </View>
        </Lista>
    )
}

export default Endereco;