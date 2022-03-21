import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { AuthProvider } from "./providers/AuthProvider";
import AppAuthentication from "./screens/AppAuthentication";

export default function App() {
  return ( 
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppAuthentication />
        </NavigationContainer>

        <StatusBar style="auto" /> 
      </SafeAreaView>
    </AuthProvider>
  );
}