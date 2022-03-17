import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './common/themes';
import AppAuthentication from './components/AppAuthentication';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppAuthentication />
      </NavigationContainer>

      <StatusBar style='auto'/>
    </PaperProvider>
  );
}