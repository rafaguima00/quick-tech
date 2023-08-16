import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/Rotas/stackNavigator';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { InfoProvider } from './src/Context/GlobalContext';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <InfoProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <StackNavigator />
      </NavigationContainer>
    </InfoProvider>
  );
}