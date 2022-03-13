import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppBottomNavigation from './components/AppBottomNavigation';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
      </SafeAreaView>

      <AppBottomNavigation />

      <StatusBar style='auto'/>
    </PaperProvider>
  );
}