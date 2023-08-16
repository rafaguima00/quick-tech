import { View, Text, SafeAreaView } from 'react-native'
import estilos from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const Menu = () => {

    const { email } = useContext(GlobalContext)

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.top}>
                <Text style={estilos.textTop}>Olá, {email ? email : '[user_name]'}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Menu;