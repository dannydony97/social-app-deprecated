import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import AppAuthentication from './components/AppAuthentication';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppAuthentication />
      </NavigationContainer>

      <StatusBar style='auto'/>
    </PaperProvider>
  );
}