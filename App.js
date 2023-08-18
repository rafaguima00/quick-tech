import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './src/Rotas/stackNavigator';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { InfoProvider } from './src/Context/GlobalContext';
import { PesquisaProvider } from './src/Context/PesquisaContext'

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
      <PesquisaProvider>
        <StatusBar style='auto' />
        <StackNavigator />
      </PesquisaProvider>
    </InfoProvider>
  );
}