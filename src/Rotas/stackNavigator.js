import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Telas/Login';
import Cadastro from '../Telas/Cadastro';
import CadastroEndereco from '../Telas/CadastroEndereco';
import Menu from '../Telas/Menu';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Endereço' component={CadastroEndereco} />
            <Stack.Screen name='Menu' component={Menu} />
        </Stack.Navigator>
    )
}

export default StackNavigator;