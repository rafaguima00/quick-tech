import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Telas/Login';
import Cadastro from '../Telas/Cadastro';
import CadastroEndereco from '../Telas/CadastroEndereco';
import DrawerNavigation from './drawerNavigator';
import Pesquisa from '../Telas/Pesquisar';
import Informacoes from '../Telas/Informacoes';
import FinalizarCompra from '../Telas/FinalizarCompra';
import CadastroCartao from '../Telas/CadastroCartao';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Cadastrar cartão' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Endereço" component={CadastroEndereco} />
                <Stack.Screen name="Menu" component={DrawerNavigation} />
                <Stack.Screen name="Pesquisa" component={Pesquisa} />
                <Stack.Screen name="Informações" component={Informacoes} />
                <Stack.Screen name="Finalizar compra" component={FinalizarCompra} />
                <Stack.Screen name="Cadastrar cartão" component={CadastroCartao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;