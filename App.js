import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { View } from "react-native-ui-lib";
import AppAuthentication from "./screens/AppAuthentication";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppAuthentication />
      </NavigationContainer>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
