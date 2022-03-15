import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppAuthentication from './components/AppAuthentication';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#004999',
    headerText: 'white'
  }
}

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